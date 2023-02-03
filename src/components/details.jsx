import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import './details.css';
import './style.css';
import Rating from './rating.jsx';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { isExpired } from "react-jwt";


const Details = () => {
  const location = useLocation();
  const { id, rating } = location.state;
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const deleteMovie = () => {
        axios.delete('https://at.usermd.net/api/movie/' + id)
            .then(res => {
                console.log(res.data)
                navigate("/")
            })
            .catch(err =>{
                console.log(err)
            })

          }

  useEffect(() => {
              axios.get('https://at.usermd.net/api/movies/' + id)
              .then(res => {
                  console.log(res.data)
                  setData(res.data);
              })
              .catch(err =>{
                  console.log(err)
              })
          }, [])

   return <div className="jumbotron jumbotron-fluid Details" style={{display: 'flex', flexDirection: 'column'}}>
       <div className="boxDetails">
            <div>
                <h1 className="display-4">{data.title}</h1>
                <img src={data.image} className="PosterDetails" alt="poster"/>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '5vh'}}>
                    <div style={{fontSize: '15px', marginTop: '5vh'}}>
                        <span>{data.content} </span>
                    </div>
                    <Rating rating={rating} />
                </div>
           </div>
       </div>
       {
        !isExpired(localStorage.getItem('token')) ?
       <div onClick={deleteMovie} style={{cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid #2e2e36', backgroundColor: '#2e2e36', borderRadius: '15px', padding: '15px', margin: '20px'}}>
            Usuń film
       </div> : null
       }
   </div>;
};

export default Details;
