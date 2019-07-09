import React from 'react';

//a resulttype can be selected or not
export default function Resulttype(props) {
    return (
      <div className={'databook__resulttype databook__resulttype--' + ((props.selected) ? 'checked' : 'unchecked')}
        onClick={props.onClick}>
        {props.label}
      </div>
    );
  }