import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: "" }
  }

  render() {
    return(
      <div>
        <input
          value={this.state.term}
          onChange={(e) => this.onInputChange(e.target.value)}
          type="text"
          className="form-control"
          />
      <h1>{this.state.term}</h1>
      </div>
      )
  }
  
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;