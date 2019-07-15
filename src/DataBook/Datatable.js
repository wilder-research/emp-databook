import React from 'react';

//a question can be selected or not
export default class DataTable extends React.Component {
  //props passed:
  //key={i}
  //question={this.props.questions[i]}
  //resulttypes={this.props.resulttypes}
  //csv={this.props.csv}
  
  renderDataTableTitle(question) {
    return (<p>{question.label}</p>);
  }

  renderDataTableHeaderRow(question) {
    const labels = this.props.csv[question.value].labels;
    return (
      <thead><tr>
        {labels.map((label, k) => {
          return (<th key={k}>{label}</th>)
        })}
      </tr></thead>
    );
  }

  renderCell(i, cell) {
    if(i === 0) {
      return <th key={i}>{cell}</th>;
    } else {
      return <td key={i}>{cell}</td>;
    }
  }

  renderDataTableRows(question, resulttypes) {
    //render selected result types for a single question
    const data = this.props.csv[question.value].data;
    return resulttypes.map((resulttype, i) => {
      if (data && resulttype.selected && data[resulttype.value]) {
        const rows = data[resulttype.value];
        return rows.map((row, j) => {
          console.log(resulttype.value, row);
          return (<tr key={j}>{
            row.map((cell, k) => {
              return this.renderCell(k, cell);
            })
          }</tr>)
        })
      }
      return null
    });
  }
  
  renderDataTableForQuestion(question) {
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
          return null;
        });
        rowString += '<br>';
        return null;
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
      <div className="DataTable">
        {this.renderDataTableTitle(this.props.question)}
        <table className="table">
          {this.renderDataTableHeaderRow(this.props.question)}
          <tbody>
            {this.renderDataTableRows(this.props.question,this.props.resulttypes)}
          </tbody>
        </table>
      </div>
    );
  }
}