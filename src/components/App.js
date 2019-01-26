
import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { images : [] };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  async onSearchSubmit(inputValue) {
    let response = await unsplash.get('/search/photos', {
      params: {
        query: inputValue
      }
    });

    console.log(response.data);
    this.setState({ images : response.data.results });
  }

  render(){
    return(
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar runMeWhenUserHitsEnter={this.onSearchSubmit}/>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
