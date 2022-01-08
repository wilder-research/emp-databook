import React from 'react';
import { CSVLink } from "react-csv";

//a question can be selected or not
export default class DataTable extends React.Component {
  //props passed:
  //key={i}
  //question={this.props.questions[i]}
  //resulttypes={this.props.resulttypes}
  //year={year}
  //csv={this.props['csv' + year]}

  renderCell(i, cell) {
    if(i === 0) {
      return <th key={i}>{cell}</th>;
    } else {
      return <td key={i}>{cell}</td>;
    }
  }

  render () {

    const labels = this.props.csv[this.props.question.value].labels;
    const header = [];
    header.push(
      <tr key="header-row">
        {
          labels.map((label, k) => {
            return <th key={k}>{label}</th>
          })
        }
      </tr>
    );

    const data = this.props.csv[this.props.question.value].data;
    const rows = [];
    this.props.resulttypes.forEach((resulttype, i) => {
      if (data && resulttype.selected && data[resulttype.value]) {
        rows.push(
          <tr
          key={resulttype.value}
          className="rowgroup"
          >
              <th colSpan={labels.length}>{resulttype.value}</th>
            </tr>
        );
        data[resulttype.value].forEach((row, j) => {
          rows.push(
            <tr
              key={resulttype.value + '-' + j}
              >
                {
                  row.map((cell, k) => {
                    return this.renderCell(k, cell);
                  })
                }
              </tr>
          );
        });
        
      }
    });
    
    return (
      <div className="DataTable">
        <div className="DataTable__QuestionLabel">{this.props.year}: {this.props.question.label}
          <span className="note">{this.props.question.note}</span>
        </div>
        <div className="DataTable__Wrap">
          <table className="DataTable__Table">
            <thead>
              {header}
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
          <CSVLink
            data={this.props.dataForCSVLink}
            filename={'data-book-' + this.props.year + '-' + this.props.question.value + '.csv'}
            className="DataTable__CSVLink"
          >Download as CSV</CSVLink>
        </div>
      </div>
    );
  }
}