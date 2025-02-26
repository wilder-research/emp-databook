import React from 'react';

//a DataYear can be selected or not
export default function DataYear(props) {
    return (
      <div className={'DataYearList__Choice DataYearList__Choice--' + ((props.selected) ? 'checked' : 'unchecked')}
        onClick={props.onClick}>
        {props.label}
      </div>
    );
  }