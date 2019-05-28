import React from 'react';
import Select from 'react-select';

//import CreatableSelect from 'react-select/lib/Creatable';

//a topic can be selected or not
function Heading(props) {
  return (
    <div className="databook__heading">
      <div className="databook__title">Volume 2 Data Book</div>
      <div className="databook__intro">View or download data tables of East Metro Pulse survey results.</div>
    </div>
  );
}

/*
//a topic can be selected or not
function Topic(props) {
  return (
    <div className="databook__topic databook__topic--{((props.active) ? 'checked' : 'unchecked')}" onClick={props.onClick}>
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
      <div className="databook__topiclist">
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
      <form className="databook__searchbar">
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
      <div className="databook__topic-select">
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
    <div className={'databook__question databook__question--' + ((props.active) ? 'checked' : 'unchecked')} onClick={props.onClick}>
      {/* props.value */}
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
      value={this.props.questions[i].value}
      topic={this.props.questions[i].topic}
      label={this.props.questions[i].label}
      active={this.props.questions[i].active}
      onClick={() => this.props.onClick(i)}
    />);
  }

  render() {
    return (
      <div className="databook__question-list">
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
    <div className={'databook__resulttype databook__resulttype--' + ((props.active) ? 'checked' : 'unchecked')} onClick={props.onClick}>
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
      return (
        <p>Finally, select the result types to include: &nbsp;
        <small><em>{'('}scroll down to view your data tables{')'}</em></small>
        </p>
      );
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
      <div className="databook__resulttype-list">
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
  //props passed:
  //key={i}
  //question={this.props.questions[i]}
  //resulttypes={this.props.resulttypes}
  //csv={this.props.csv}

  renderResulttypes() {
    let result = [];
    this.props.resulttypes.map((resulttype, index) => {
      //only display the selected resulttypes
      if (resulttype.active) {
        result.push('[' + resulttype.label + ']');
      }
      return null;
    });
    return (<div>{
      result.map((item, index) => {
        return (<div key={index}>{item}</div>);
      })}</div>
    );
  }
  renderDatatableForQuestion(question) {
    let result = [];
    let numRows = 0;
    result.push(<div>{question.label}</div>);
    /*
    const Qnum = this.props.data.cols.findIndex(col => col === 'Qnum' );
    this.props.data.rows.map((row, index) => {
      if (row[Qnum] === question.value) {
        //result.push('[' + row[Qnum] + row[Qnum+1] + row[Qnum+2] + row[Qnum+3] + ']');
        numRows++;
      }
      return null;
    });
    */
    const rows = this.props.csv[question.value].rows; //Object.entries(user)
    Object.entries(rows).map((qProp, key) => {
      //if (index === question.value) {
        //result.push('[' + row[Qnum] + row[Qnum+1] + row[Qnum+2] + row[Qnum+3] + ']');
        result.push('[' + qProp + '; ' + key + ']');
        numRows++;
      //}
      return null;
    });
    result.push('[' + numRows + ' rows of data found for ' + question.value + ']');
    return (<div>{
      result.map((item, index) => {
        return (<div key={index}>{item}</div>);
      })}</div>
    );
  }

  render () {
    return (
      <div className="databook__datatable">
        {/* TODO data tables should include selected data */}
        {this.renderDatatableForQuestion(this.props.question) }
        {this.renderResulttypes()}
      </div>
    );
    }
}

//a datatable list renders all the datatable outputs
class DatatableList extends React.Component {
  //props passed:
  //questions={current.questions}
  //resulttypes={current.resulttypes}
  //csv={this.props.csv}

  shouldRenderDatatable(question) {
	  //this question active and result types
    if (question.active) {
      return true;
    } else {
      return false;
    }
  }

  shouldRenderAny() {
    //any questions selected
    let activeQuestions = 0;
    this.props.questions.forEach(question => {
      if (this.shouldRenderDatatable(question)) {
        activeQuestions = activeQuestions + 1;
      }
    });
    //any result types selected
    let activeResulttypes = 0;
    this.props.resulttypes.forEach(resulttype => {
      if (resulttype.active) {
        activeResulttypes = activeResulttypes + 1;
      }
    });
    return ((activeQuestions > 0) && (activeResulttypes > 0));
  }

  renderDatatablesTitle() {
    return (<p>Here are your selected data tables:</p>);
  }
  
  renderDatatable(i) {
    return (<Datatable
      key={i}
      question={this.props.questions[i]}
      resulttypes={this.props.resulttypes}
      csv={this.props.csv}
    />);
  }

  render() {
    if (!this.shouldRenderAny()) {
      return null;
    }
    return (
      <div className="databook__datatable-list">
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
        <div className="databook__selections">
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
