

import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = { inputValue: ''};
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.runMeWhenUserHitsEnter(this.state.inputValue);
  }

  render(){
    return(
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              onChange={(event) => {
              this.setState({inputValue: event.target.value});
              }}
              value={this.state.inputValue}>
            </input>  {/*The reason why we don't call onInputChange with () is because onInputChange will get called whenever the SearchBar gets rendered on screen, we only want to call onInputChange at some point during the functioning of the app */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
