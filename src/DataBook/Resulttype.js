import React from 'react';

//a resulttype can be selected or not
export default function ResultType(props) {
    return (
      <div className={'ResultTypeList__Choice ResultTypeList__Choice--' + ((props.selected) ? 'checked' : 'unchecked')}
        onClick={props.onClick}>
        {props.label}
      </div>
    );
  }