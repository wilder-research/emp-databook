import React from 'react';

import TopicHeading from './TopicHeading';
import Question from './Question';

//a question list renders all the questions
export default class QuestionList extends React.Component {
  
  handleSelectAllVisible = (e) => {
    e.preventDefault();
    this.props.onSelectVisibleQuestions();
  }

  handleClearAllSelected = (e) => {
    e.preventDefault();
    this.props.onClearSelectedQuestions();
  }

  renderQuestionsTitle() {
    let numActiveQuestions = 0;
    let numSelectedQuestions = 0;
    this.props.questions.forEach(question => {
      if (this.props.shouldShowQuestion(question)) {
        numActiveQuestions = numActiveQuestions + 1;
      }
      if (question.selected) {
        numSelectedQuestions = numSelectedQuestions + 1;
      }
    });
    if (numActiveQuestions > 0) {
      return (
        <div>
          <p><em>Showing {numActiveQuestions} of {this.props.questions.length} questions, {numSelectedQuestions} selected.</em></p>
          <div className="SelectButtons SelectButtons--questions">
            <button type="button" className="SelectButtons_Button" onClick={this.handleSelectAllVisible}>select all</button>
            <button type="button" className="SelectButtons_Button" onClick={this.handleClearAllSelected}>clear</button>
          </div>
        </div> 
      );
    /* 
    } else {
      return (
        <div>
          <div className="QuestionList__Placeholder">(Select topic(s) or use the search field to find questions.)</div>
        </div>
    );
    */
    }
  }

  render() {
    const rows = [];
    let lastTopic = null;
    let topicIndex = -1;
    this.props.questions.forEach((question, index) => {
      if (this.props.shouldShowQuestion(question)) {
        if (question.topic !== lastTopic) {
          rows.push(
            <TopicHeading
              key={topicIndex}
              label={question.topic}
              />
          );
          topicIndex--;
        }
        rows.push(
          <Question
          key={index}
          selected={question.selected}
          question={question}
          datayears={this.props.datayears}
          csv2018={this.props.csv2018}
          csv2021={this.props.csv2021}
          csv2024={this.props.csv2024}
          resulttypes={this.props.resulttypes}
          onClick={() => this.props.onClick(index)}
          />
          );
        lastTopic = question.topic;
      }
    });

    return (
      <div className="QuestionList">
        {this.renderQuestionsTitle()}
        {rows}
      </div>
    );
  }
}