import React from 'react';

//a question can be selected or not
export default class DataTable extends React.Component {
  //props passed:
  //key={i}
  //question={this.props.questions[i]}
  //resulttypes={this.props.resulttypes}
  //csv={this.props.csv}

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
    //render data rows for all selected result types for a single question
    const labels = this.props.csv[question.value].labels;
    const data = this.props.csv[question.value].data;
    const rows = [];
    resulttypes.forEach((resulttype, index) => {
      if (data && resulttype.selected && data[resulttype.value]) {
        rows.push(
          <tr
            key={resulttype.value}
            className="rowgroup"
            >
              <th colSpan={labels.length}>{resulttype.value}</th>
            </tr>
        );
        data[resulttype.value].forEach((row, index) => {
          rows.push(
            <tr
              key={resulttype.value + '-' + index}
              >
                {
                  row.map((cell, i) => {
                    return this.renderCell(i, cell);
                  })
                }
              </tr>
          );
        });
      }
    });
    return rows;
  }

  render () {
    return (
      <div className="DataTable">
        <p>{this.props.question.label}</p>
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