import React from 'react';
import Select from 'react-select';
//import CreatableSelect from 'react-select/lib/Creatable';

//a topic can be selected or not
function Heading(props) {
  return (
    <div className="heading">
      <div className="title">East Metro Pulse Databook</div>
      <div className="intro">View or download data tables of East Metro Pulse survey results.</div>
    </div>
  );
}

/*
//a topic can be selected or not
function Topic(props) {
  return (
    <div className={'topic' + ((props.active) ? ' checked' : ' unchecked')} onClick={props.onClick}>
      {// TODO topics should look different when selected}
      {props.label}
    </div>
  );
}

//a topic list renders all the topics
class TopicList extends React.Component {
  renderTopic(i) {
    return (<Topic
      key={i}
      label={this.props.topics[i].label}
      active={this.props.topics[i].active}
      onClick={() => this.props.onClick(i)}
    />);
  }

  render() {
    return (
      <div className="topic-list">
        <p>Filter survey questions by topic:</p>
        {this.props.topics.map((value, index) => {
          return this.renderTopic(index);
        })}
      </div>
    );
  }
}
*/

/*
//a search bar for filtering questions
class SearchBar extends React.Component {
  handleChange = (e: any) => {
    this.props.onChange(e.target.value);
  }
  render() {
    return (
      <form className="searchbar">
        <p>Search to find questions:</p>
        <input
          className="form-control"
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
*/

//a multi-select foro filtering questions
class TopicSelect extends React.Component {
  handleChange = (newValue, actionMeta) => {
    //console.group('Value Changed');
    //console.log(newValue);
    //console.log(`action: ${actionMeta.action}`);
    //console.groupEnd();
    this.props.onChange(newValue);
  };
  render() {
    return (
      <div className="topic-select">
        <p>First, select your topic(s) of interest:</p>
        <Select
          isMulti
          //value={{label: "Housing", value: "Housing"}}
          onChange={this.handleChange}
          options={this.props.options}
        />
      </div>
    );
  }
}

//a question can be selected or not
function Question(props) {
  return (
    <div className={'question' + ((props.active) ? ' checked' : ' unchecked')} onClick={props.onClick}>
      {/* TODO question should look different when selected */}
      <em>{props.topic + '; '}</em>
      {props.label}
    </div>
  );
}

//a question list renders all the questions
class QuestionList extends React.Component {
  renderQuestionsTitle() {
    let activeQuestions = 0;
    this.props.questions.forEach(question => {
      if (this.shouldRenderQuestion(question)) {
        activeQuestions = activeQuestions + 1;
      }
    });
    if (activeQuestions > 0) {
      return (<p>Next, select the questions to include:</p>);
    }
  }

  shouldRenderQuestion(question) {
    //determine which topics are selected
    let topicsSelected = [];
    for (let i = 0; i < this.props.topics.length; i++) {
      if (this.props.topics[i].active) {
        topicsSelected.push(this.props.topics[i].value);
      }
    }
    //render if search string matches, has a selected topic, or is active
    if ((this.props.filterText !== '' &&
      !(question.label.indexOf(this.props.filterText) === -1))
      || topicsSelected.includes(question.topic)
      || question.active) {
      return true;
    } else {
      return false;
    }
  }

  renderQuestion(i) {
    return (<Question
      key={i}
      topic={this.props.questions[i].topic}
      label={this.props.questions[i].label}
      active={this.props.questions[i].active}
      onClick={() => this.props.onClick(i)}
    />);
  }

  render() {
    return (
      <div className="question-list">
        {this.renderQuestionsTitle()}
        {/* show each if shouldRenderQuestion(question) */
          this.props.questions.map((question, index) => {
            return (this.shouldRenderQuestion(question))
              ? this.renderQuestion(index)
              : null;
          })
        }
      </div>
    );
  }
}

//a resulttype can be selected or not
function Resulttype(props) {
  return (
    <div className={'resulttype' + ((props.active) ? ' checked' : ' unchecked')} onClick={props.onClick}>
      {/* TODO resulttypes should look different when selected */}
      {props.label}
    </div>
  );
}

//a resulttype list renders all the resulttypes
class ResulttypeList extends React.Component {
  renderResulttypesTitle() {
    let activeResulttypes = 0;
    this.props.resulttypes.forEach(resulttype => {
      if (this.shouldRenderResulttype(resulttype)) {
        activeResulttypes = activeResulttypes + 1;
      }
    });
    if (activeResulttypes > 0) {
      return (<p>Finally, select the result types to include:</p>);
    }
  }

  shouldRenderResulttype(resulttype) {
    //determine which questions are selected
    let questionsSelected = [];
    for (let i = 0; i < this.props.questions.length; i++) {
      if (this.props.questions[i].active) {
        questionsSelected.push(this.props.questions[i].value);
      }
    }
    //render if any questions are selected, or is active
    if (questionsSelected.length > 0
      || resulttype.active) {
      return true;
    } else {
      return false;
    }
  }

  renderResulttype(i) {
    return (<Resulttype
      key={i}
      label={this.props.resulttypes[i].label}
      active={this.props.resulttypes[i].active}
      onClick={() => this.props.onClick(i)}
    />);
  }

  render() {
    return (
      <div className="resulttype-list">
        {this.renderResulttypesTitle()}
        {/* show each if shouldRenderResulttype(resulttype)  */
          this.props.resulttypes.map((resulttype, index) => {
            return (this.shouldRenderResulttype(resulttype))
              ? this.renderResulttype(index)
              : null;
          })
        }
      </div>
    );
  }
}

//a question can be selected or not
class Datatable extends React.Component {
  renderResulttypes() {
    let result = [];
    this.props.resulttypes.map((resulttype, index) => {
      if (resulttype.active) {
        result.push('[' + resulttype.label + ']');
      }
      return null;
    });
    if (result.length > 0) {
      return (<div>{
        result.map((item, index) => {
          return (<div>{item}</div>);
      })}</div>);
    }
  }
  render () {
    return (
      <div className="datatable">
        {/* TODO data tables should include selected data */}
        Table for: {this.props.question}
        {this.renderResulttypes()}
      </div>
    );
    }
}

//a data list renders all the data outputs
class DatatableList extends React.Component {
  renderDatatablesTitle() {
    let activeQuestions = 0;
    this.props.questions.forEach(question => {
      if (this.shouldRenderDatatable(question)) {
        activeQuestions = activeQuestions + 1;
      }
    });
    if (activeQuestions > 0) {
      return (<p>Here are your data tables!</p>);
    }
  }
  
  shouldRenderDatatable(question) {
  //any result types selected
	let activeResulttypes = 0;
    this.props.resulttypes.forEach(resulttype => {
      if (resulttype.active) {
        activeResulttypes = activeResulttypes + 1;
      }
    });
	  //this question active and result types
    if (question.active && activeResulttypes > 0) {
      return true;
    } else {
      return false;
    }
  }

  renderDatatable(i) {
    return (<Datatable
      key={i}
      question={this.props.questions[i].label}
      resulttypes={this.props.resulttypes}
    />);
  }

  render() {
    return (
      <div className="datatable-list">
        {this.renderDatatablesTitle()}
        {this.props.questions.map((question, index) => {
          return (this.shouldRenderDatatable(question))
              ? this.renderDatatable(index)
              : null;
        })}
      </div>
    );
  }
}

//the data book is the top level component
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
    //add this change to history
    const history = this.state.history;
    const current = history[history.length - 1];
    //set changes into current state
    current.filterText = searchval;
    //setState to update the UI
    this.setState({ history: history.concat([current]) });
  }

  handleMultiChange(newval) {
    //add this change to history
    const history = this.state.history;
    const current = history[history.length - 1];
    //set changes into current state
    let topicsSelected = [];
    for (let i = 0; i < newval.length; i++) {
      topicsSelected.push(newval[i].value);
    }
    for (let i = 0; i < current.topics.length; i++) {
      current.topics[i].active = (topicsSelected.includes(current.topics[i].value));
    }
    //setState to update the UI
    this.setState({ history: history.concat([current]) });
  }

  handleTopicClick(i) {
    //add this change to history
    const history = this.state.history;
    const current = history[history.length - 1];
    //copy topics array from current state
    const topics = current.topics.slice();
    //TODO - Toggle topic selected or not for use in filtering
    topics[i].active = !topics[i].active;
    //set changes into current state
    current.topics = topics;
    //setState to update the UI
    this.setState({ history: history.concat([current]) });
  }

  handleQuestionClick(i) {
    //add this change to history
    const history = this.state.history;
    const current = history[history.length - 1];
    //copy questions array from current state
    const questions = current.questions.slice();
    //TODO - Toggle question selected or not for use in filtering
    questions[i].active = !questions[i].active;
    //set changes into current state
    current.questions = questions;
    //setState to update the UI
    this.setState({ history: history.concat([current]) });
  }

  handleResulttypeClick(i) {
    //add this change to history
    const history = this.state.history;
    const current = history[history.length - 1];
    //copy topics array from current state
    const resulttypes = current.resulttypes.slice();
    //TODO - Toggle topic selected or not for use in filtering
    resulttypes[i].active = !resulttypes[i].active;
    //set changes into current state
    current.resulttypes = resulttypes;
    //setState to update the UI
    this.setState({ history: history.concat([current]) });
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];

    return (
      <div className="databook">
        <Heading />
        <div className="databook-selections">
          {/*<SearchBar
              filterText={current.filterText}
              onChange={(searchval) => this.handleSearchbarChange(searchval)}
          />
          */}
          <TopicSelect
            options={current.topics}
            onChange={(newval) => this.handleMultiChange(newval)}
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
            filterText={current.filterText}
            onClick={(i) => this.handleQuestionClick(i)}
          />
          <ResulttypeList
              resulttypes={current.resulttypes}
              questions={current.questions}
              onClick={(i) => this.handleResulttypeClick(i)}
          />
        </div>
        <div className="databook-results">
          <DatatableList
            questions={current.questions}
            resulttypes={current.resulttypes}
          />
        </div>
      </div>
    );
  }
}
