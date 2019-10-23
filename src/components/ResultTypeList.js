import React from 'react';

import ResultType from './ResultType';

//a resulttype list renders all the resulttypes
export default class ResultTypeList extends React.Component {

  handleSelectAll = (e) => {
    e.preventDefault();
    this.props.onSelectAllResultTypes();
  }

  handleClearAllSelected = (e) => {
    e.preventDefault();
    this.props.onClearSelectedResultTypes();
  }

  /*
  renderResultTypesTitle() {
    let activeResultTypes = 0;
    this.props.resulttypes.forEach(resulttype => {
      if (this.shouldRenderResultType(resulttype)) {
        activeResultTypes = activeResultTypes + 1;
      }
    });
    if (activeResultTypes > 0) {
      return (
        <p>Result types available for your selected question(s): &nbsp;
          <small><em>(your data tables will appear below)</em></small>
        </p>
      );
    }
  }
  */

  shouldRenderResultType(resulttype) {
    /*
    //determine which questions are selected
    let questionsSelected = [];
    for (let i = 0; i < this.props.questions.length; i++) {
      if (this.props.questions[i].selected) {
        questionsSelected.push(this.props.questions[i].value);
      }
    }
    //render if any questions are selected, or is active
    if (questionsSelected.length > 0
      || resulttype.selected) {
      return true;
    } else {
      return false;
    }
    */
    return true;
  }

  renderResultType(i) {
    return (<ResultType
      key={i}
      label={this.props.resulttypes[i].label}
      selected={this.props.resulttypes[i].selected}
      onClick={() => this.props.onClick(i)}
    />);
  }

  render() {
    return (
      <div className="ResultTypeList">
        <p>Start building your tables by selecting the data you want to see.</p>
        <div className="SelectButtons">
          <button type="button" className="SelectButtons_Button" onClick={this.handleSelectAll}>select all</button>
          <button type="button" className="SelectButtons_Button" onClick={this.handleClearAllSelected}>clear</button>
        </div>
        <div className="ResultTypeList__Choices">
          {/* this.renderResultTypesTitle() */}
          {/* show each if shouldRenderResultType(resulttype)  */
            this.props.resulttypes.map((resulttype, index) => {
              return (this.shouldRenderResultType(resulttype))
                ? this.renderResultType(index)
                : null;
            })
          }
        </div>
      </div>
    );
  }
}