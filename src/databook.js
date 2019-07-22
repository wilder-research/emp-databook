import React from 'react';

import Intro from './DataBook/Intro';
import TopicSelect from './DataBook/TopicSelect';
import QuestionList from './DataBook/QuestionList';
import ResultTypeList from './DataBook/ResultTypeList';
import DataTableList from './DataBook/DataTableList';
import FilterText from './DataBook/FilterText';

//the databook is the top level component
export default class DataBook extends React.Component {
  constructor(props) {
    super(props);
    //set initial state for the databook
    this.state = {
      //store changes to state in .history; an array of objects
      history: [{
        selectedTopics: [],
        filterText: '',
        questions: props.questions,
        resulttypes: props.resulttypes,
      }],
    };
  }

  handleTopicSelectChange(newValue) {
    //get the current state from history
    const history = this.state.history;
    const current = history[history.length - 1];

    let selectedTopics = [];
    for (let i = 0; i < newValue.length; i++) {
      selectedTopics.push(newValue[i].value);
    }
    
    //set changes into current state
    current.selectedTopics = selectedTopics;

    //setState to add to history and update the UI
    this.setState({ history: history.concat([current]) });
  }

  handleFilterTextChange(newValue) {
    //get the current state from history
    const history = this.state.history;
    const current = history[history.length - 1];
    
    //set changes into current state
    current.filterText = newValue;
    
    //setState to add to history and update the UI
    this.setState({ history: history.concat([current]) });
  }

  shouldShowQuestion(question) {
    //get the current state from history
    const history = this.state.history;
    const current = history[history.length - 1];

    // always include selected questions in the list
    if (question.selected) {
      return true;
    // else if there's filter text, only look at that
    } else if (current.filterText !== '') {
      return !(question.label.toLowerCase().indexOf(current.filterText.toLowerCase()) === -1);
    // else if not filtering, just look at topics
    } else {
      return current.selectedTopics.includes(question.topic);
    }
  }

  handleSelectVisibleQuestions() {
    //get the current state from history
    const history = this.state.history;
    const current = history[history.length - 1];
    
    //copy questions array from current state
    const questions = current.questions.slice();
    for (let i = 0; i < current.questions.length; i++) {
      if (this.shouldShowQuestion(questions[i])) {
        questions[i].selected = true;
      }
    }

    //set changes into current state
    current.questions = questions;
    
    //setState to add to history and update the UI
    this.setState({ history: history.concat([current]) });
  }

  handleClearSelectedQuestions() {
    //get the current state from history
    const history = this.state.history;
    const current = history[history.length - 1];
    
    //copy questions array from current state
    const questions = current.questions.slice();
    for (let i = 0; i < current.questions.length; i++) {
      questions[i].selected = false;
    }

    //set changes into current state
    current.questions = questions;
    
    //setState to add to history and update the UI
    this.setState({ history: history.concat([current]) });
  }

  handleQuestionClick(i) {
    //add this change to history
    const history = this.state.history;
    const current = history[history.length - 1];
    
    //copy questions array from current state
    const questions = current.questions.slice();
    //Toggle question selected or not
    questions[i].selected = !questions[i].selected;
    
    //set changes into current state
    current.questions = questions;
    
    //setState to add to history and update the UI
    this.setState({ history: history.concat([current]) });
  }

  handleResultTypeClick(i) {
    //get the current state from history
    const history = this.state.history;
    const current = history[history.length - 1];
    
    //copy topics array from current state
    const resulttypes = current.resulttypes.slice();
    //Toggle result type selected or not
    resulttypes[i].selected = !resulttypes[i].selected;
    
    //set changes into current state
    current.resulttypes = resulttypes;
    
    //setState to update the UI
    this.setState({ history: history.concat([current]) });
  }

  render() {
    //get the current state from history
    const history = this.state.history;
    const current = history[history.length - 1];

    return (
      <div className="DataBook">
        <Intro />
        <div className="SectionTitle">Select the result types you want to see:</div>
        <ResultTypeList
          resulttypes={current.resulttypes}
          questions={current.questions}
          onClick={(i) => this.handleResultTypeClick(i)}
        />
        <div className="SectionTitle">Select which questions you want to view:</div>
        <div className="Questions">
          <div className="QuestionFilters">
            <TopicSelect
              selectedTopics={current.selectedTopics}
              options={this.props.topics}
              onChange={(newValue) => this.handleTopicSelectChange(newValue)}
            />
            <FilterText
              filterText={current.filterText}
              onChange={(newValue) => this.handleFilterTextChange(newValue)}
            />
          </div>
          <QuestionList
            selectedTopics={current.selectedTopics}
            filterText={current.filterText}
            questions={current.questions}
            shouldShowQuestion={(question) => this.shouldShowQuestion(question)}
            onClick={(i) => this.handleQuestionClick(i)}
            onSelectVisibleQuestions={() => this.handleSelectVisibleQuestions()}
            onClearSelectedQuestions={() => this.handleClearSelectedQuestions()}
          />
        </div>
        <div className="SectionTitle">View your selected data tables:</div>
        <DataTableList
          questions={current.questions}
          resulttypes={current.resulttypes}
          csv={this.props.csv}
        />
      </div>
    );
  }
}