import React from 'react';

import QuestionHeading from './QuestionHeading';
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
    let activeQuestions = 0;
    this.props.questions.forEach(question => {
      if (this.props.shouldShowQuestion(question)) {
        activeQuestions = activeQuestions + 1;
      }
    });
    if (activeQuestions > 0) {
      return (
        <div>
          <p>Select the questions you'd like to view data for: (showing {activeQuestions} of {this.props.questions.length})</p>
          <div>
            <button type="button" onClick={this.handleSelectAllVisible}>select all below</button>
            &nbsp; &nbsp;
            <button type="button" onClick={this.handleClearAllSelected}>clear selections</button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p>No questions match your current filters.</p>
        </div>
    );
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
            <QuestionHeading
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
          label={question.label}
          onClick={() => this.props.onClick(index)}
          />
          );
      }
      lastTopic = question.topic;
    });

    return (
      <div className="databook__questionlist">
        {this.renderQuestionsTitle()}
        {rows}
      </div>
    );
  }
}