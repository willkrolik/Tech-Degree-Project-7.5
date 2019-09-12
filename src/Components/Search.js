import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import GifList from './GifList';
import Buttons from './Buttons';



export default class Search extends Component {

  constructor() {
    super();
    this.performSearch = this.performSearch.bind(this);
    this.state = {
      gifs: [],
      loading: true,
      buttons: { dogs: false, cats: false, birds: false }
    };
  }

  componentDidUpdate (prevProps) {
    if (this.props.match.params.query !== prevProps.match.params.query) {
      this.performSearch();
      }
  }

  componentDidMount () {
    this.performSearch()
  }


  performSearch = () => { 
    const query = this.props.match.params.query || "weddings";
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=120f3ea66ea5e0d848bd2fc27ea62df8&tags=${query}&per_page=&format=json&nojsoncallback=1`)
      .then(response => {
        let buttons = { dogs: false, cats: false, birds: false }
        if (query === 'cats') {
          buttons = { dogs: false, cats: true, birds: false }
        } else if (query === 'dogs') { buttons = { dogs: true, cats: false, birds: false } }
      else if (query === 'birds') { buttons = { dogs: false, cats: false, birds: true } } 
        this.setState({
          gifs: response.data.photos,
          loading: false,
          buttons
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
history = query => {
  const location = {
    pathname: `/${query}`
    
  }
  this.props.history.push(location);
  

}

  render() {
    
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Photo Search</h1>

            <SearchForm onSearch={this.history} />
            <Buttons
              
              buttons={this.state.buttons}
            />
            
          </div>
        </div>



        <div className="photo-container">
          {
            (this.state.loading)
              ? <p>Loading...</p>
              : <GifList data={this.state.gifs} />
          }
        </div>
      </div>

    );
  }
}
