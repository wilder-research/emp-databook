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
    //any result types selected
    let activeResultTypes = 0;
    this.props.resulttypes.forEach(resulttype => {
      if (resulttype.selected) {
        activeResultTypes++;
      }
    });

    //is this question is selected and resulttypes are selected
    //TODO: check if selected resulttypes exist in this question's data
    if (question.selected && activeResultTypes > 0) {
      return true;
    } else {
      return false;
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
          console.log(question.topic, lastTopic);
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
      title = <div className="DataTables__Placeholder">(Select at least one result type and question to view data.)</div>;
    }

    return (
      <div className="DataTables">
        {title}
        {rows}
      </div>
    );
  }
}