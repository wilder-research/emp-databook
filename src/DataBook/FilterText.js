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
          <p>Or, search all questions</p>
          <input
            className="FilterText__Input"
            type="text"
            placeholder="Enter any text..."
            value={this.props.filterText}
            onChange={this.handleChange}
          />
          <span 
            className="FilterText__Clear"
            onClick={this.handleClear}
            >X</span>
        </form>
      </div>
    );
  }
}