import React from 'react';

import Heading from './DataBook/Heading';
import TopicSelect from './DataBook/TopicSelect';
//import TopicList from './DataBook/TopicList';
import QuestionList from './DataBook/QuestionList';
import ResulttypeList from './DataBook/ResulttypeList';
import DatatableList from './DataBook/DatatableList';
import SearchBar from './DataBook/SearchBar';

//the databook is the top level component
export default class DataBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //store changes to state in .history; an array of objects
      history: [{
        topics: props.topics,
        questions: props.questions,
        resulttypes: props.resulttypes,
        filterText: '',
      }],
    };
  }

  handleSearchbarChange(searchval) {
    //get the current state from history
    const history = this.state.history;
    const current = history[history.length - 1];
    
    //set changes into current state
    current.filterText = searchval;
    
    //setState to add to history and update the UI
    this.setState({ history: history.concat([current]) });
  }

  handleSearchBarClear() {
    //get the current state from history
    const history = this.state.history;
    const current = history[history.length - 1];
    
    //set changes into current state
    current.filterText = '';
    
    //setState to add to history and update the UI
    this.setState({ history: history.concat([current]) });
  }

  handleMultiChange(newval) {
    //get the current state from history
    const history = this.state.history;
    const current = history[history.length - 1];
    
    let topicsSelected = [];
    for (let i = 0; i < newval.length; i++) {
      topicsSelected.push(newval[i].value);
    }
    for (let i = 0; i < current.topics.length; i++) {
      //set changes into current state
      current.topics[i].active = (topicsSelected.includes(current.topics[i].value));
    }

    //setState to add to history and update the UI
    this.setState({ history: history.concat([current]) });
  }

  getSelectedTopics() {
    //get the current state from history
    const history = this.state.history;
    const current = history[history.length - 1];

    let value = [];
    current.topics.forEach(topic => {
      if (topic.active) {
        value.push(topic.value);
      }
    });

    return value;
  };

  /*
  handleTopicClick(i) {
    //get the current state from history
    const history = this.state.history;
    const current = history[history.length - 1];
    
    //copy topics array from current state
    const topics = current.topics.slice();
    //TODO - Toggle topic selected or not for use in filtering
    topics[i].active = !topics[i].active;
    //set changes into current state
    current.topics = topics;
    
    //setState to add to history and update the UI
    this.setState({ history: history.concat([current]) });
  }
  */

  handleSelectVisibleQuestions() {
    //TODO: Finish this function
    //      Track questions.visible separate from questions.active in state
    //get the current state from history
    const history = this.state.history;
    const current = history[history.length - 1];
    
    //copy questions array from current state
    const questions = current.questions.slice();
    for (let i = 0; i < current.questions.length; i++) {
      questions[i].active = true;
    }
    //set changes into current state
    current.questions = questions;
    
    //setState to add to history and update the UI
    this.setState({ history: history.concat([current]) });
  }

  handleClearAllSelected() {
    //TODO: Finish this function
    //get the current state from history
    const history = this.state.history;
    const current = history[history.length - 1];
    
    //copy questions array from current state
    const questions = current.questions.slice();
    for (let i = 0; i < current.questions.length; i++) {
      questions[i].active = false;
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
    questions[i].active = !questions[i].active;
    //set changes into current state
    current.questions = questions;
    
    //setState to add to history and update the UI
    this.setState({ history: history.concat([current]) });
  }

  handleResulttypeClick(i) {
    //get the current state from history
    const history = this.state.history;
    const current = history[history.length - 1];
    
    //copy topics array from current state
    const resulttypes = current.resulttypes.slice();
    //Toggle result type selected or not
    resulttypes[i].active = !resulttypes[i].active;
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
      <div className="databook">
        <Heading />
        <div className="databook__selections">
          <TopicSelect
            options={current.topics}
            selectedTopics={this.getSelectedTopics()}
            onChange={(newval) => this.handleMultiChange(newval)}
          />
          <SearchBar
            filterText={current.filterText}
            onChange={(searchval) => this.handleSearchbarChange(searchval)}
            onClear={() => this.handleSearchBarClear()}
          />
          {/*
          <TopicList
            topics={current.topics}
            onClick={(i) => this.handleTopicClick(i)}
          />
          */}
          <QuestionList
            questions={current.questions}
            topics={current.topics}
            selectedTopics={this.getSelectedTopics()}
            filterText={current.filterText}
            onClick={(i) => this.handleQuestionClick(i)}
            onSelectVisibleQuestions={() => this.handleSelectVisibleQuestions()}
            onClearAllSelected={() => this.handleClearAllSelected()}
          />
          <ResulttypeList
            resulttypes={current.resulttypes}
            questions={current.questions}
            onClick={(i) => this.handleResulttypeClick(i)}
          />
        </div>
        <div className="databook__results">
          <DatatableList
            questions={current.questions}
            resulttypes={current.resulttypes}
            csv={this.props.csv}
          />
        </div>
      </div>
    );
  }
}
