import React from 'react';

//a question can be selected or not
export default function Question(props) {
  return (
    <div className={'databook__question databook__question--' + ((props.selected) ? 'checked' : 'unchecked')}
      onClick={props.onClick}>
      {props.label}
    </div>
  );
}
