import React from 'react';

//display a topic heading
export default function TopicHeading(props) {
  return (
    <div className="TopicHeading">
      {props.label}
    </div>
  );
}