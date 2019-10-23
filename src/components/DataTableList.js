import React from 'react';
import { CSVLink } from "react-csv";

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

  getDataForCSVLink(questions) {
    let labels = [],
        data = {},
        csvHeader = [],
        csvHeaders = [],
        csvRows = [],
        csvData = [],
        csvTableSeparator = [[''],['']]; // creates spacer rows in csv between tables
    
    // may get passed one question or array of questions
    if(!questions.length || !Array.isArray(questions)) {
      questions = [questions];
    }

    // loop through each question passed
    questions.forEach((question, index) => {
      // questions should have at least a value and label property
      if(!question.value || !question.label) {
        return;
      }
      labels = this.props.csv[question.value].labels || [];
      data = this.props.csv[question.value].data || null;
      csvHeader = [[question.label]]; // use array of array(s)
      csvHeaders = [labels]; // use array of array(s)
      csvRows = []; // start with an empty rows array
      // loop through resulttypes and add selected data types to output rows
      this.props.resulttypes.forEach((resulttype, i) => {
        if (data && resulttype.selected && data[resulttype.value]) {
          csvRows.push([resulttype.value]);
          data[resulttype.value].forEach((row, j) => {
            csvRows.push(row);
          });
          
        }
      });
      // append csvData for current question
      csvData = csvData.concat(csvHeader, csvHeaders, csvRows, csvTableSeparator);
    });
    return csvData;
  }

  render() {
    let title = null;
    const rows = [];
    let lastTopic = null;
    let topicIndex = -1;
    let renderedQuestions = [];

    this.props.questions.forEach((question, index) => {
      if (this.shouldRenderDataTableForQuestion(question)) {
        renderedQuestions.push(question);
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
            dataForCSVLink={this.getDataForCSVLink(question)}
          />
        );
        lastTopic = question.topic;
      }
    });

    if(renderedQuestions.length === 0) {
      title = <div className="DataTableList__Placeholder">[Displayed after selecting result types and questions above]</div>;
    } else if(renderedQuestions.length > 1) {
      title = <div><CSVLink
        data={this.getDataForCSVLink(renderedQuestions)}
        filename={'data-book-selected-tables.csv'}
        className="DataTable__CSVLink"
        >Download all selected tables as CSV</CSVLink></div>;
    }

    return (
      <div className="DataTableList">
        {title}
        {rows}
      </div>
    );
  }
}