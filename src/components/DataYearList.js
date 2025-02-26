import React from 'react';

import DataYear from './DataYear';

//a DataYear list renders all the DataYears
export default class DataYearList extends React.Component {

  handleSelectAll = (e) => {
    e.preventDefault();
    this.props.onSelectAllDataYears();
  }

  handleClearAllSelected = (e) => {
    e.preventDefault();
    this.props.onClearSelectedDataYears();
  }

  shouldRenderDataYear(datayear) {
    return true;
  }

  renderDataYear(i) {
    return (<DataYear
      key={i}
      label={this.props.datayears[i].label}
      selected={this.props.datayears[i].selected}
      onClick={() => this.props.onClick(i)}
    />);
  }

  render() {
    return (
      <div className="DataYearList">
        <p>First, select which years of data to include.</p>
        <div className="SelectButtons">
          <button type="button" className="SelectButtons_Button" onClick={this.handleSelectAll}>select all</button>
          <button type="button" className="SelectButtons_Button" onClick={this.handleClearAllSelected}>clear</button>
        </div>
        <div className="DataYearList__Choices">
          {/* show each if shouldRenderDataYear(datayear)  */
            this.props.datayears.map((datayear, index) => {
              return (this.shouldRenderDataYear(datayear))
                ? this.renderDataYear(index)
                : null;
            })
          }
        </div>
      </div>
    );
  }
}