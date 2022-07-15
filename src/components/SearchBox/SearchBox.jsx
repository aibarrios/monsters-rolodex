import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
      <div className='pa2'>
        <input
          className='pa3 ba b--green bg-lightest-blue'
          placeholder='Search Monsters'
          type='search'
          onChange={this.props.searchFieldChange}
        />
      </div>
    );
  }
}

export default SearchBox;
