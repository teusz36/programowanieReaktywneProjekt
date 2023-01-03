import React from 'react';
import MovieInfo from './movieinfo.jsx';
import Rating from './rating.jsx';
import './movie.css';

const Movie = (props) => {
    return <div className="Movie">
                 <div>
                    <img src={props.poster} className="Poster" alt="poster"/>
                 </div>
                 <div className="MovieInfo">
                    <MovieInfo title={props.title} titleOriginal={props.titleOriginal} year={props.year}/>
                    &nbsp;
                    <Rating rating={props.rating} />
                 </div>
           </div>
}

export default Movie;