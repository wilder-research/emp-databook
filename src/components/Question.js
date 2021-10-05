import React from 'react';

//a question can be selected or not
export default function Question(props) {
  
  // identify which selected resulttypes this question has data for
  let hasResultTypes = [];
  let hasSelectedResultTypes = [];
  props.resulttypes.forEach(resulttype => {    
    if (props.csv2018[props.question.value] && 
        props.csv2018[props.question.value]['data'] && 
        props.csv2018[props.question.value]['data'][resulttype.value]) {
      hasResultTypes.push(resulttype.label);
      if (resulttype.selected) {
        hasSelectedResultTypes.push(resulttype.label);
      }
    }
  });
  
  return (
    <div className="Question">
      <div className={'Question__Choice Question__Choice--' 
        + ((props.selected) ? 'checked' : 'unchecked')}
        onClick={props.onClick}>
        {props.question.label}
        {((hasSelectedResultTypes.length) ? '' : <span className="Question__Choice--no-data-warning" title={'Data available: ' + hasResultTypes.join(', ')}>*N/A for selected result types</span>)}
      </div>
    </div>
  );
}