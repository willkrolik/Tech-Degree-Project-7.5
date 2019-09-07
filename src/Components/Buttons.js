import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

const Buttons = props => (
  <BrowserRouter>
    <ul className="course-nav">
    <li><a href="#cats" onClick={ () => {props.searchFunction("cats")}}>Cats</a></li>
    <li><a href="#dogs" onClick={ () => {props.searchFunction("dogs")}}>Dogs</a></li> 
    <li><a href="#birds" onClick={ () => {props.searchFunction("birds")}}>Birds</a></li>
  </ul> 
  </BrowserRouter>
);

export default Buttons;