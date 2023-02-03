import React, { useState, useEffect} from "react";
import Movie from '.././components/movie.jsx';
import Poster1 from '.././GuardiansOfTheGalaxyvol1poster.jpg';
import Poster2 from '.././GuardiansOfTheGalaxyvol2poster.jpg';
import { Link } from "react-router-dom";
import axios from "axios";
import './movielist.css';
import { isExpired } from "react-jwt";

const MovieList = (params) => {

    const [movies, setMovies] = useState([]);
    const [data, setData] = useState([]);
    let search = localStorage.getItem('search');
    console.log(search);

    useEffect(() => {
            axios.get('https://at.usermd.net/api/movies')
            .then(res => {
                console.log(res.data)
                console.log(search)
                if( search !== "") {
                    let dataRaw = res.data.filter(function( element ) {
                        if(element.title !== undefined || element.image !== undefined || element.content !== undefined) {
                            return element;
                        }
                    });
                    setData(dataRaw.filter(m => m.title.toLowerCase().includes(search.toLowerCase())));
                } else {
                    setData(res.data);
                }
            })
            .catch(err =>{
                console.log(err)
            })
        }, [])

   return (<div>
                  <p>
                    {
                        data.map((movie, i) => {
                        console.log("title: ", movie.title)
                            if(movie.content !== undefined && movie.title !== undefined) {
                            let rating = Math.round((Math.random() * (4) + 1) * 10) / 10;
                                return (
                                    <Link to="/details" state={{ id: movie.id, rating: rating }} className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><Movie poster={movie.image} title={movie.title} description={movie.content} rating={rating}/></Link>
                                )
                            }

                        }
                        )
                    }
                    {
                        !isExpired(localStorage.getItem('token')) ?
                            <Link to="/add" className="nav-link addNew" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Dodaj film</Link>
                            :
                            null
                    }
                  </p>
           </div> )
};

export default MovieList;
