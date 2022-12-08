import React, { useState } from 'react';

const MovieInfo = (props) => {
    return <div style={{display: 'flex', justifyContent: 'left', alignItems: 'start', flexDirection: 'column'}}>
                 <div style={{fontSize: '20px'}}>
                    {props.title}
                 </div>
                 <div style={{fontSize: '15px'}}>
                    <span>{props.titleOriginal} </span>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <span>{props.year}</span>
                 </div>
           </div>
}

export default MovieInfo;