import React from 'react';
import { CSVLink } from "react-csv";

import TopicHeading from './TopicHeading';
import DataTable from './DataTable';

//a datatable list renders all the datatable outputs
export default class DataTableList extends React.Component {
  //props passed:
  //questions={current.questions}
  //resulttypes={current.resulttypes}
  //datayears={current.datayears}
  //csv2018={this.props.csv2018}
  //csv2021={this.props.csv2021}

  shouldRenderDataTableForQuestion(question) {
    if (!question.selected || !question.value) {
      return false;
    }

    let shouldRender = false;
    console.log('shouldRenderDataTableForQuestion');

    this.props.datayears.forEach(datayear => {
      console.log('datayear:', datayear.value);
      if (!datayear.selected) { return; }
      if (this.props['csv' + datayear.value] && 
        this.props['csv' + datayear.value][question.value] &&
        this.props['csv' + datayear.value][question.value]['data']) {
          console.log('data for question:', question.value);
          for (let i = 0; i < this.props.resulttypes.length; i++) {
            if (this.props.resulttypes[i].selected &&
              this.props['csv' + datayear.value][question.value]['data'][this.props.resulttypes[i].value]) {
                console.log('data for resulttype:', this.props.resulttypes[i].value);
                shouldRender = true; // have data for at least 1 year and selected result type
                break; 
            // } else {
            //   console.log('No data for resulttype:', this.props.resulttypes[i].value);
            }
          }
      // } else {
      //   console.log('No data for question:', question.value);
      }
    });

    return shouldRender;

  }

  yearsToRenderDataTablesForQuestion(question) {
    
    let yearsToRender = [];
    if (!question.selected || !question.value) {
      return yearsToRender;
    }

    // console.log('yearsToRenderDataTablesForQuestion');

    this.props.datayears.forEach(datayear => {
      // console.log('datayear:', datayear.value);
      if (datayear.selected &&
        this.props['csv' + datayear.value] && 
        this.props['csv' + datayear.value][question.value] &&
        this.props['csv' + datayear.value][question.value]['data']) {
          console.log('data for question, year:', question.value, datayear.value);
          for (let i = 0; i < this.props.resulttypes.length; i++) {
            if (this.props.resulttypes[i].selected &&
              this.props['csv' + datayear.value][question.value]['data'][this.props.resulttypes[i].value]) {
                console.log('data for resulttype:', this.props.resulttypes[i].value);
                yearsToRender.push(datayear.value); // have data for at least 1 year and selected result type
                break; 
            // } else {
            //   console.log('No data for resulttype:', this.props.resulttypes[i].value);
            }
          }
      // } else {
      //   console.log('No data for question:', question.value);
      }
    });

    console.log('returning yearsToRender:', yearsToRender);
    return yearsToRender;
  }

  getDataForCSVLink(questions, years) {
    let labels = [],
        data = {},
        csvHeader = [],
        csvHeaders = [],
        csvRows = [],
        csvData = [],
        csvTableSeparator = [[''],['']]; // creates spacer rows in csv between tables
    
    console.log('getDataForCSVLink', questions, years);
    
    // may get passed one question or array of questions
    if(!questions.length || !Array.isArray(questions)) {
      questions = [questions];
    }

    // may get passed one year or array of years
    if(!years.length || !Array.isArray(years)) {
      years = [years];
    }

    console.log('as arrays', questions, years);

    // loop through each question passed
    questions.forEach((question, index) => {
      // questions should have at least a value and label property
      if (!question.value || !question.label) {
        return;
      }
      years.forEach((year) => {
        if (this.props['csv' + year] && this.props['csv' + year][question.value]) {
          console.log('this.props[\'csv' + year + '\'][' + question.value + ']');
          console.log('typeof year:', typeof year);
          labels = this.props['csv' + year][question.value].labels || [];
          data = this.props['csv' + year][question.value].data || null;
          csvHeader = [[year + ': ' + question.label]]; // use array of array(s)
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
          // append csvData for current question & year
          csvData = csvData.concat(csvHeader, csvHeaders, csvRows, csvTableSeparator);
        }
      });
    });
    return csvData;
  }

  render() {
    let title = null;
    const rows = [];
    let lastTopic = null;
    let topicIndex = -1;
    let renderedQuestions = [];
    let yearsToRender = [];
    let dataForAllCSVsLink = []

    this.props.questions.forEach((question, index) => {
      if (!question.selected) { return; }
      yearsToRender = this.yearsToRenderDataTablesForQuestion(question);
      console.log('this.props.questions.forEach', yearsToRender);
      if (yearsToRender.length) { // have any years of data to render
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
        yearsToRender.forEach((year) => {
          rows.push(
            <DataTable
              key={year + index}
              question={question}
              resulttypes={this.props.resulttypes}
              year={year}
              csv={this.props['csv' + year]}
              dataForCSVLink={this.getDataForCSVLink(question, year)}
            />
          );
          dataForAllCSVsLink = dataForAllCSVsLink.concat(this.getDataForCSVLink(question, year));
        });
        lastTopic = question.topic;
      }
    });

    console.log('Download all: yearsToRender', yearsToRender);
    if (renderedQuestions.length === 0) {
      title = <div className="DataTableList__Placeholder">[Displayed after selecting result types and questions above]</div>;
    } else if (renderedQuestions.length > 1) {
      title = <div><CSVLink
        data={dataForAllCSVsLink}
        filename={'data-book-selected-tables.csv'}
        className="DataTable__CSVLink"
        >Download all ({renderedQuestions.length}) selected tables as CSV</CSVLink></div>;
    }

    return (
      <div className="DataTableList">
        {title}
        {rows}
      </div>
    );
  }
}