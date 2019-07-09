import React from 'react';

import Datatable from './Datatable';

//a datatable list renders all the datatable outputs
export default class DatatableList extends React.Component {
  //props passed:
  //questions={current.questions}
  //resulttypes={current.resulttypes}
  //csv={this.props.csv}

  shouldRenderDatatable(question) {
    //this question selected and result types
    if (question.selected) {
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
      if (resulttype.selected) {
        activeResulttypes = activeResulttypes + 1;
      }
    });
    return ((activeQuestions > 0) && (activeResulttypes > 0));
  }

  renderDatatablesTitle() {
    return (<p>View or download your data tables:</p>);
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
