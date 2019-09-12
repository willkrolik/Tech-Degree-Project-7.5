import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './Components/Search';
import './App.css';

const App = () => (
    <BrowserRouter>
    <Route exact path="/:query" component={Search} />
    <Route exact path="/" component={Search} />
    </BrowserRouter>
  );
  
export default App;
