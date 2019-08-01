import React from 'react';

//import Intro from './DataBook/Intro';
import ResultTypeList from './DataBook/ResultTypeList';
import TopicSelect from './DataBook/TopicSelect';
import FilterText from './DataBook/FilterText';
import QuestionList from './DataBook/QuestionList';
import DataTableList from './DataBook/DataTableList';

//the databook is the top level component
export default class DataBook extends React.Component {
  constructor(props) {
    super(props);
    //set initial state for the databook
    this.state = {
      //store changes to state in .history; an array of objects
      history: [{
        resulttypes: props.resulttypes,
        selectedTopics: [],
        filterText: '',
        questions: props.questions,
      }],
    };
    // Create a ref object
    this.myRef = React.createRef();
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

  handleSelectAllResultTypes() {
    //get the current state from history
    const history = this.state.history;
    const current = history[history.length - 1];
    
    //copy topics array from current state
    const resulttypes = current.resulttypes.slice();
    
    for (let i = 0; i < current.resulttypes.length; i++) {
      resulttypes[i].selected = true;
    }
    
    //set changes into current state
    current.resulttypes = resulttypes;
    
    //setState to update the UI
    this.setState({ history: history.concat([current]) });
  }

  handleClearSelectedResultTypes() {
    //get the current state from history
    const history = this.state.history;
    const current = history[history.length - 1];
    
    //copy topics array from current state
    const resulttypes = current.resulttypes.slice();
    
    for (let i = 0; i < current.resulttypes.length; i++) {
      resulttypes[i].selected = false;
    }
    
    //set changes into current state
    current.resulttypes = resulttypes;
    
    //setState to update the UI
    this.setState({ history: history.concat([current]) });
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

  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop);

  handleLinkToDataTablesClick = (e) => {
    e.preventDefault();
    this.scrollToMyRef();
  }

  getNumberOfSelectedResultTypes() {
    //get the current state from history
    const history = this.state.history;
    const current = history[history.length - 1];
    
    //copy topics array from current state
    let NumberOfSelectedResultTypes = 0;
    
    for (let i = 0; i < current.resulttypes.length; i++) {
      if (current.resulttypes[i].selected) {
        NumberOfSelectedResultTypes = NumberOfSelectedResultTypes + 1;
      };
    }
    
    return NumberOfSelectedResultTypes;
  }

  getNumberOfSelectedQuestions() {
    //get the current state from history
    const history = this.state.history;
    const current = history[history.length - 1];
    
    //copy topics array from current state
    let NumberOfSelectedQuestions = 0;
    
    for (let i = 0; i < current.questions.length; i++) {
      if (current.questions[i].selected) {
        NumberOfSelectedQuestions = NumberOfSelectedQuestions + 1;
      };
    }
    
    return NumberOfSelectedQuestions;
  }

  render() {
    //get the current state from history
    const history = this.state.history;
    const current = history[history.length - 1];

    return (
      <div className="DataBook">
        {/*<Intro />*/}
        <div className="SectionTitle SectionTitle--first">Result types
          <span className={"SectionTitle__SelectionsNote SectionTitle__SelectionsNote" + ((this.getNumberOfSelectedResultTypes()) ? "--selections" : "--no-selections" )}>
            select 1 or more
          </span>
        </div>
        <ResultTypeList
          resulttypes={current.resulttypes}
          questions={current.questions}
          onClick={(i) => this.handleResultTypeClick(i)}
          onSelectAllResultTypes={() => this.handleSelectAllResultTypes()}
          onClearSelectedResultTypes={() => this.handleClearSelectedResultTypes()}
        />
        <div className="SectionTitle">Survey questions
          <span className={"SectionTitle__SelectionsNote SectionTitle__SelectionsNote" + ((this.getNumberOfSelectedQuestions()) ? "--selections" : "--no-selections" )}>
            select 1 or more
          </span>
          {(
            (this.getNumberOfSelectedResultTypes() && this.getNumberOfSelectedQuestions()) 
              //? <button type="button" className="SectionTitle__Button" onClick={this.handleLinkToDataTablesClick}>view your tables</button>
              ? <span className="SectionTitle__ScrollNote">scroll down to view your tables!</span>
              : "" 
          )}
        </div>
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
            resulttypes={current.resulttypes}
            csv={this.props.csv}
            shouldShowQuestion={(question) => this.shouldShowQuestion(question)}
            onClick={(i) => this.handleQuestionClick(i)}
            onSelectVisibleQuestions={() => this.handleSelectVisibleQuestions()}
            onClearSelectedQuestions={() => this.handleClearSelectedQuestions()}
          />
        </div>
        <div className="SectionTitle" ref={this.myRef}>Your data tables:</div>
        <DataTableList
          questions={current.questions}
          resulttypes={current.resulttypes}
          csv={this.props.csv}
        />
      </div>
    );
  }
}