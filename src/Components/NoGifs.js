import React from 'react';

const NoGifs = props => (
  <li className='no-gifs'>
    <i className="material-icons icon-gif">sentiment_very_dissatisfied</i>
    <h3>No results found</h3>
    <h4>That search did not return any results, please try again.</h4>
  </li>
);

export default NoGifs;