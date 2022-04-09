import React from 'react';

export const Movies = (props) =>{ 
    console.log(props);
    return(
        <div id="movies">
           <h2 style={{color:'red', fontSize:40, backgroundColor:'black'}}> {props.movies.name}</h2>
           <h3 style={{backgroundColor:'lightcyan'}}>Date: {props.movies.date}</h3>
           <h3>Genre: {props.movies.genre}</h3>
           <p style={{fontWeight:800}}>Plot: {props.movies.plot}</p>
           <p> <a href={props.movies.imdbLink}>{props.movies.imdbLink}</a></p>
           <img src={props.movies.imgUrl} width='200px'></img>
        </div>
    )
}