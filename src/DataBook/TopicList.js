import React from 'react';

//a topic can be selected or not
function Topic(props) {
  return (
    <div className="databook__topic databook__topic--{((props.active) ? 'checked' : 'unchecked')}" onClick={props.onClick}>
      {props.label}
    </div>
  );
}

//a topic list renders all the topics
class TopicList extends React.Component {
  renderTopic(i) {
    return (<Topic
      key={i}
      label={this.props.topics[i].label}
      active={this.props.topics[i].active}
      onClick={() => this.props.onClick(i)}
    />);
  }

  render() {
    return (
      <div className="databook__topiclist">
        <p>Filter survey questions by topic:</p>
        {this.props.topics.map((value, index) => {
          return this.renderTopic(index);
        })}
      </div>
    );
  }
}
