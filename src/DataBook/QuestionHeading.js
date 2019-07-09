import React from 'react';

//a question can be selected or not
export default function QuestionHeading(props) {
  return (
    <div className="databook__questionlist-header">
      {props.label}
    </div>
  );
}
