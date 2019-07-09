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

  render() {
    return (
      <div className="databook__topic-select">
        <p>Add or remove filters to focus list questions by topic: ({this.props.selectedTopics.length} selected)</p>
        <Select
          isMulti
          placeholder="Find questions by topic..."
          onChange={this.handleChange}
          options={this.props.options}
        />
      </div>
    );
  }
}
