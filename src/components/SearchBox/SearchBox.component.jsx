import { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
      <div className='pa2'>
        <input
          className={this.props.className}
          placeholder={this.props.placeholder}
          type='search'
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
