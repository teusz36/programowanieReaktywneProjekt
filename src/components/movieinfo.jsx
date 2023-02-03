import React, { useState } from 'react';

const MovieInfo = (props) => {
    return <div style={{display: 'flex', justifyContent: 'left', alignItems: 'start', flexDirection: 'column'}}>
                 <div style={{fontSize: '20px'}}>
                    {props.title}
                 </div>
                 <div style={{fontSize: '15px', marginTop: '15px'}}>
                    <span>{props.description} </span>
                 </div>
           </div>
}

export default MovieInfo;