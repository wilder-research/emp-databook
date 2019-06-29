import React from 'react';
import Select from 'react-select';
//import CreatableSelect from 'react-select/lib/Creatable';

//a multi-select foro filtering questions
export default class TopicSelect extends React.Component {
    //determine which topics are selected

    handleChange = (newValue, actionMeta) => {
      //console.group('Value Changed');
      //console.log(newValue);
      //console.log(`action: ${actionMeta.action}`);
      //console.groupEnd();
      this.props.onChange(newValue);
    };

    getDefaultValue() {
      let value = [];
      this.props.options.forEach(option => {
        if (option.active) {
          value.push(option);
        }
      });
      return value;
    };

    render() {
      return (
        <div className="databook__topic-select">
          <p>Add or remove filters to focus list questions by topic: ({this.props.selectedTopics.length} selected)</p>
          <Select
            isMulti
            placeholder="Add topic filters..."
            onChange={this.handleChange}
            options={this.props.options}
            defaultValue={this.getDefaultValue()}
          />
        </div>
      );
    }
  }