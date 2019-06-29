import React from 'react';

import Resulttype from './Resulttype';

//a resulttype list renders all the resulttypes
export default class ResulttypeList extends React.Component {
    renderResulttypesTitle() {
      let activeResulttypes = 0;
      this.props.resulttypes.forEach(resulttype => {
        if (this.shouldRenderResulttype(resulttype)) {
          activeResulttypes = activeResulttypes + 1;
        }
      });
      if (activeResulttypes > 0) {
        return (
          <p>Result types available for your selected question(s): &nbsp;
          <small><em>{'('}your data tables will appear below{')'}</em></small>
          </p>
        );
      }
    }
  
    shouldRenderResulttype(resulttype) {
      //determine which questions are selected
      let questionsSelected = [];
      for (let i = 0; i < this.props.questions.length; i++) {
        if (this.props.questions[i].active) {
          questionsSelected.push(this.props.questions[i].value);
        }
      }
      //render if any questions are selected, or is active
      if (questionsSelected.length > 0
        || resulttype.active) {
        return true;
      } else {
        return false;
      }
    }
  
    renderResulttype(i) {
      return (<Resulttype
        key={i}
        label={this.props.resulttypes[i].label}
        active={this.props.resulttypes[i].active}
        onClick={() => this.props.onClick(i)}
      />);
    }
  
    render() {
      return (
        <div className="databook__resulttype-list">
          {this.renderResulttypesTitle()}
          {/* show each if shouldRenderResulttype(resulttype)  */
            this.props.resulttypes.map((resulttype, index) => {
              return (this.shouldRenderResulttype(resulttype))
                ? this.renderResulttype(index)
                : null;
            })
          }
        </div>
      );
    }
  }