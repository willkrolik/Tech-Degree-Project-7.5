import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = props => { 
  
  const results = props.data;
  let gifs;
  if (results.photo.length) {
    
    gifs = results.photo.map(p => <Gif url={`https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`} key={p.id} />);    
  } else {
    gifs = <NoGifs />
  }

  return(
    <ul className="gif-list">
      {gifs}
    </ul> 
  );
}

export default GifList;
