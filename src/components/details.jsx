import React from "react";
import { useLocation } from 'react-router-dom';
import './details.css';
import './style.css';
import Rating from './rating.jsx';

const Details = () => {
  const location = useLocation();
  const { movieTitle, poster, titleOriginal, yearOfRelease, rating} = location.state;

   return <div className="jumbotron jumbotron-fluid">
       <div className="box">
            <div>
           <h1 className="display-4">{movieTitle}</h1>
           <img src={poster} className="PosterDetails" alt="poster"/>
           <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '5vh'}}>
                <Rating rating={rating} />
                <div style={{fontSize: '15px', marginTop: '5vh'}}>
                      <span>Tytuł oryginału: {titleOriginal} </span>
                      <br />
                      <span>Rok wydania: {yearOfRelease}</span>
                </div>
           </div>
           </div>
       </div>
   </div>;
};

export default Details;
