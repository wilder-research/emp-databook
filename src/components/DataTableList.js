import React from 'react';

import TopicHeading from './TopicHeading';
import DataTable from './DataTable';

//a datatable list renders all the datatable outputs
export default class DataTableList extends React.Component {
  //props passed:
  //questions={current.questions}
  //resulttypes={current.resulttypes}
  //csv={this.props.csv}

  shouldRenderDataTableForQuestion(question) {
    if (!question.selected || !question.value) {
      return false;
    }

    const q = this.props.csv[question.value];
    if (!q) {
      return false;
    }

    const data = this.props.csv[question.value].data;
    if (!data) {
      return false;
    }

    for (let i = 0; i < this.props.resulttypes.length; i++) {
      if (this.props.resulttypes[i].selected && data[this.props.resulttypes[i].value]) {
        return true;
      }
    }
  }

  render() {
    let title = null;
    const rows = [];
    let lastTopic = null;
    let topicIndex = -1;
    this.props.questions.forEach((question, index) => {
      if (this.shouldRenderDataTableForQuestion(question)) {
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
          <DataTable
            key={index}
            question={question}
            resulttypes={this.props.resulttypes}
            csv={this.props.csv}
          />
        );
        lastTopic = question.topic;
      }
    });

    if(rows.length === 0) {
      title = <div className="DataTableList__Placeholder">(Select result types and questions above to generate data tables.)</div>;
    }

    return (
      <div className="DataTableList">
        {title}
        {rows}
      </div>
    );
  }
}