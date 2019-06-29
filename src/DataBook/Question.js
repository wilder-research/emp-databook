import React from 'react';

//a question can be selected or not
export default function Question(props) {
  return (
    <div className={'databook__question databook__question--' + ((props.active) ? 'checked' : 'unchecked')} onClick={props.onClick}>
      {/* props.value */}
      {props.label}
    </div>
  );
}