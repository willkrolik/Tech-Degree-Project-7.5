import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';
import Buttons from './Components/Buttons';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

export default class App extends Component {
  
  constructor() {
    super();
    this.performSearch = this.performSearch.bind(this);
    this.state = {
      gifs: [],
      loading: true
    };
  } 

  componentDidMount() {
    this.performSearch();
  }
  
  performSearch = (query = 'wedding') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=120f3ea66ea5e0d848bd2fc27ea62df8&tags=${query}&per_page=&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          gifs: response.data.photos,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }
  
  render() { 
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Photo Search</h1>
            
            <SearchForm onSearch={this.performSearch} />    
            <Buttons searchFunction={this.performSearch}/>
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
