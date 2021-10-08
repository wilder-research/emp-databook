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

  yearsToRenderDataTablesForQuestion(question) {
    
    let yearsToRender = [];
    
    if (!question.selected || !question.value) {
      return yearsToRender;
    }

    this.props.datayears.forEach(datayear => {
      if (datayear.selected &&
        this.props['csv' + datayear.value] && 
        this.props['csv' + datayear.value][question.value] &&
        this.props['csv' + datayear.value][question.value]['data']) {
          for (let i = 0; i < this.props.resulttypes.length; i++) {
            if (this.props.resulttypes[i].selected &&
              this.props['csv' + datayear.value][question.value]['data'][this.props.resulttypes[i].value]) {
                console.log('data for resulttype:', this.props.resulttypes[i].value);
                yearsToRender.push(datayear.value); // have data for at least 1 year and 1 selected result type
                break; 
            }
          }
      }
    });

    return yearsToRender;
  }

  getDataForCSVLink(question, year) {
    let labels = [],
        data = {},
        csvHeader = [],
        csvHeaders = [],
        csvRows = [],
        csvData = [],
        csvTableSeparator = [[''],['']]; // creates spacer rows in csv between tables
    
    //minimal data validation, this function should only be called after other checks
    if(!question || !question.selected) {
      return csvData;
    }

    //minimal data validation
    if(!year || year === '') {
      return csvData;
    }

    //minimal data validation
    if (this.props['csv' + year] && this.props['csv' + year][question.value]) {
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
      // append each partial result array to csvData
      csvData = csvData.concat(csvHeader, csvHeaders, csvRows, csvTableSeparator);
    }

    return csvData;
  }

  render() {
    let title = null;
    const rows = [];
    let lastTopic = null;
    let topicIndex = -1;
    let renderedTables = 0;
    let yearsToRender = [];
    let dataForCSV = [];
    let dataForAllCSV = []

    this.props.questions.forEach((question, index) => {
      if (!question.selected) { return; }
      yearsToRender = this.yearsToRenderDataTablesForQuestion(question);
      console.log('this.props.questions.forEach', yearsToRender);
      if (yearsToRender.length) { // have any years of data to render
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
          renderedTables++;
          dataForCSV = this.getDataForCSVLink(question, year);
          rows.push(
            <DataTable
              key={year + index}
              question={question}
              resulttypes={this.props.resulttypes}
              year={year}
              csv={this.props['csv' + year]}
              dataForCSVLink={dataForCSV}
            />
          );
          dataForAllCSV = dataForAllCSV.concat(dataForCSV);
        });
        lastTopic = question.topic;
      }
    });

    if (renderedTables === 0) {
      title = <div className="DataTableList__Placeholder">[Displayed after selecting result types and questions above]</div>;
    } else if (renderedTables > 1) {
      console.log('Download all: yearsToRender', yearsToRender);
      title = <div><CSVLink
        data={dataForAllCSV}
        filename={'data-book-selected-tables.csv'}
        className="DataTable__CSVLink"
        >Download all tables below as CSV</CSVLink></div>;
    }

    return (
      <div className="DataTableList">
        {title}
        {rows}
      </div>
    );
  }
}