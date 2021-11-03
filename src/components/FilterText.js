import React from 'react';

//a search bar for filtering questions
export default class FilterText extends React.Component {
    
  handleChange = (e) => {
    this.props.onChange(e.target.value);
  }

  handleClear = (e) => {
    e.preventDefault();
    this.props.onChange('');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    return false;
  }
  
  render() {
    return (
      <div className="FilterText">
        <form onSubmit={this.handleSubmit}>
          <p>Or, search across all questions:</p>
          <input
            className="FilterText__Input"
            type="text"
            placeholder="Search for (e.g., school or race)..."
            value={this.props.filterText}
            onChange={this.handleChange}
          />
          <span 
            className="FilterText__Clear"
            onClick={this.handleClear}
            ><svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="FilterText__ClearX"><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg></span>
        </form>
      </div>
    );
  }
}