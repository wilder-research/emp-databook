import React from 'react';

import Select from 'react-select';

//a multi-select for filtering questions
export default class TopicSelect extends React.Component {

  handleChange = (newValue, actionMeta) => {
    //console.group('Value Changed');
    //console.log(newValue);
    //console.log(`action: ${actionMeta.action}`);
    //console.groupEnd();
    this.props.onChange(newValue);
  };

  handleSelectAll = (e) => {
    e.preventDefault();
    this.props.onSelectAllTopics();
  }

  render() {
    return (
      <div className="TopicSelect">
        <p>Find questions by topic ({this.props.selectedTopics.length} selected)
          {/*<button type="button" className="Button__Link" onClick={this.handleSelectAll}>select all</button>*/}
          </p>
        <Select
          isMulti
          placeholder="Select topic(s)..."
          onChange={this.handleChange}
          options={this.props.options}
        />
      </div>
    );
  }
}