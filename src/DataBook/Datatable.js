import React from 'react';

//a question can be selected or not
export default class Datatable extends React.Component {
  //props passed:
  //key={i}
  //question={this.props.questions[i]}
  //resulttypes={this.props.resulttypes}
  //csv={this.props.csv}
  
  renderDatatableTitle(question) {
    return (<p>{question.label}</p>);
  }

  renderDatatableHeaderRow(question) {
    const labels = this.props.csv[question.value].labels;
    return (
      <thead><tr>
        {labels.map((label, k) => {
          return (<td key={k}>{label}</td>)
        })}
      </tr></thead>
    );
  }

  renderDatatableRows(question, resulttypes) {
    //render selected result types for a single question
    const data = this.props.csv[question.value].data;
    return resulttypes.map((resulttype, i) => {
      if (resulttype.active && data[resulttype.value]) {
        const rows = data[resulttype.value];
        return rows.map((row, j) => {
          console.log(row);
          return (<tr key={j}>{
            row.map((cell, k) => {
              return (<td key={k}>{cell}</td>)
            })
          }</tr>)
        })
      }
    });
  }
  
  renderDatatableForQuestion(question) {
    let result = [];

    const data = this.props.csv[question.value].data;

    //TODO: Only display the selected Result Types
    for (let [type, rows] of Object.entries(data)) {
      let rowString = type;
      rowString += '<br>';
      //console.log(type, rows);
      rows.map((row) => {
        row.map((cell) => {
          rowString += cell + ' ';
          //console.log (cell);
        });
        rowString += '<br>';
      })
      result.push('' + rowString + '<br>');
    }

    return (<div>{
      result.map((item, index) => {
        return (<div key={index}>{item}</div>);
      })}</div>
    );
  }

  render () {
    return (
      <div className="databook__datatable">
        {this.renderDatatableTitle(this.props.question)}
        <table className="databook__table">
          {this.renderDatatableHeaderRow(this.props.question)}
          <tbody>
            {this.renderDatatableRows(this.props.question,this.props.resulttypes)}
          </tbody>
        </table>
      </div>
    );
  }
}
