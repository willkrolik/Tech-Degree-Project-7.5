import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

const Buttons = props => (
  
    <ul className="course-nav">
    <li><Link to="cats" className={props.buttons.cats && 'selected'}>Cats</Link></li>
    <li><Link to="dogs" className={props.buttons.dogs && 'selected'} >Dogs</Link></li> 
    <li><Link to="birds" className={props.buttons.birds && 'selected'}  
      

    >Birds</Link></li>
  </ul> 
  
);



export default Buttons;