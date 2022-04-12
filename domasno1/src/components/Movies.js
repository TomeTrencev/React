
import React from 'react';
import PropTypes from 'prop-types';

export const Movies = (props) => {
    console.log(props);
    return (
        <div id="movies">
            <ol>
                {props.movies.map((film, i) => {
                    return (
                        <li key={i}>
                           <h1>{film.name} </h1>
                            <h3 style={{ backgroundColor: 'red' }}>Released in  :{film.date}</h3>
                            <p style={{ color: 'blue' }}>Plot : {film.plot}</p>
                            <br></br>
                            IMBD:<a href='{film.imdbLink}'>{film.imdbLink}</a> <br></br> <img src={film.imgUrl} width='200px'></img>
                        </li>
                    )
                })}
            </ol>

        </div>
    )
}

Movies.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired
}

{/* < ol> {props.movies.map((film,i) => (<h1 key={i}>
    <h1>{film.name} </h1>
    <h3 style={{backgroundColor:'red'}}>Released in  :{film.date}</h3>
    <p style={{ color: 'blue' }}>Plot : {film.plot}</p>
    <br></br>
    IMBD:<a href='{film.imdbLink}'>{film.imdbLink}</a> <br></br> <img src={film.imgUrl} width='200px'></img> </h1>))}

</ol> */}