import React from 'react';

//a question can be selected or not
export default function Question(props) {
  return (
    <div className="Question">
      <div className={'Question__Choice Question__Choice--' + ((props.selected) ? 'checked' : 'unchecked')}
        onClick={props.onClick}>
        {props.label}
      </div>
    </div>
  );
}