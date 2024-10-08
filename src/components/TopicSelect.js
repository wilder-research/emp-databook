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
        {/* <p>Find questions by topic ({this.props.selectedTopics.length} selected)</p> */}
        <p>Find questions by topic:</p>
        <Select
          isMulti
          placeholder="Select topic(s)..."
          onChange={this.handleChange}
          options={this.props.options}
          theme={theme => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              neutral50: '#757575', // increase contrast; accessibility; placeholder text
            },
          })}
        />
      </div>
    );
  }
}