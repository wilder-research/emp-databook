import React from 'react';

//display a topic heading
export default function TopicHeading(props) {
  return (
    <div className="topichead">
      {props.label}
    </div>
  );
}