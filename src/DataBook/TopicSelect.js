import React from 'react';

import Select from 'react-select';

//a multi-select for filtering questions by topic
export default class TopicSelect extends React.Component {

  handleChange = (newValue, actionMeta) => {
    this.props.onChange(newValue);
  };

  render() {
    return (
      <div className="TopicSelect">
        <p>Find questions by topic ({this.props.selectedTopics.length} selected)</p>
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