import React from 'react';

//a search bar for filtering questions
export default class SearchBar extends React.Component {
    handleChange = (e) => {
      this.props.onChange(e.target.value);
    }
    handleClear = (e) => {
      this.props.onClear();
    }
    handleSubmit = (e) => {
      e.preventDefault();
      return false;
    }
    render() {
      return (
        <form className="databook__search-bar" onSubmit={this.handleSubmit}>
          <p>Or, search to find specific questions:</p>
          <input
            className="databook__search-field"
            type="text"
            placeholder="Search question text..."
            value={this.props.filterText}
            onChange={this.handleChange}
          />
          <span 
            className="databook__search-clear"
            onClick={this.handleClear}
            >X</span>
        </form>
      );
    }
  }