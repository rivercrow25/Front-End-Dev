import React from "react";
import '../App.css'

export const SuggestedSongs = props => {
  console.log(props);
  const songList = props.suggestedSongs.map((song, i) => {
    return (
      <div className='rec' key={i}>
        <h2>{song.track_name}</h2>
        <p>{song.artist_name}</p>
      </div>
    )
  });

  return (
    <div className="suggestions">
        <h1>Suggested Songs</h1>
        <h2>{props.title}</h2>
        <div>
        {songList}  
        </div>
    </div>
  );
};


export default SuggestedSongs;