import React, { useState } from 'react';
import './movie.css';
import star from '../icons/star.png';

const Rating = (props) => {
    return <div style={{display: 'flex', justifyContent: 'left', alignItems: 'start', flexDirection: 'row'}}>
                 <div>
                    <img src={star} className="rating-star" />
                 </div>
                 <div className="MovieInfo">
                    {props.rating}
                 </div>
           </div>
}

export default Rating;