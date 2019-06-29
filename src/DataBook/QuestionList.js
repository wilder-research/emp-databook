import React from 'react';

import Question from './Question';

//a question list renders all the questions
export default class QuestionList extends React.Component {
  handleSelectAllVisible = (e) => {
    e.preventDefault();
    this.props.onSelectVisibleQuestions();
  }

  handleClearAllSelected = (e) => {
    e.preventDefault();
    this.props.onClearAllSelected();
  }

  renderQuestionsTitle() {
    let activeQuestions = 0;
    this.props.questions.forEach(question => {
      if (this.shouldRenderQuestion(question)) {
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
  
  shouldRenderQuestion(question) {
    // always include selected questions in the list
    if (question.active) {
      return true;
    // else if there's filter text, only look at that
    } else if (this.props.filterText !== '') {
      return !(question.label.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1);
    // else if not filtering, just look at topics
    } else {
      return this.props.selectedTopics.includes(question.topic);
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