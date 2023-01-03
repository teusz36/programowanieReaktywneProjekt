import React from "react";
import Movie from '.././components/movie.jsx';
import Poster1 from '.././GuardiansOfTheGalaxyvol1poster.jpg';
import Poster2 from '.././GuardiansOfTheGalaxyvol2poster.jpg';
import { Link } from "react-router-dom";

const MovieList = () => {
   return <div>
                  <p>
                      <Link to="/details" state={{ movieTitle: "Strażnicy galaktyki vol.1", poster: Poster1, titleOriginal: "Guardians Of The Galaxy vol. 1", yearOfRelease: "2014", rating: "5.0"}} className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><Movie poster={Poster1} title="Strażnicy galaktyki vol.1" titleOriginal="Guardians Of The Galaxy vol. 1" year="2014" rating="5.0"/></Link>
                      <Link to="/details" state={{ movieTitle: "Strażnicy galaktyki vol.2", poster: Poster2, titleOriginal: "Guardians Of The Galaxy vol. 2", yearOfRelease: "2017", rating: "4.6"}} className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><Movie poster={Poster2} title="Strażnicy galaktyki vol.2" titleOriginal="Guardians Of The Galaxy vol. 2" year="2017" rating="4.6"/></Link>
                      <Link to="/details" state={{ movieTitle: "Strażnicy galaktyki vol.2", poster: Poster2, titleOriginal: "Guardians Of The Galaxy vol. 2", yearOfRelease: "2017", rating: "4.2"}} className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><Movie poster={Poster2} title="Strażnicy galaktyki vol.2" titleOriginal="Guardians Of The Galaxy vol. 2" year="2017" rating="4.2"/></Link>
                      <Link to="/details" state={{ movieTitle: "Strażnicy galaktyki vol.2", poster: Poster2, titleOriginal: "Guardians Of The Galaxy vol. 2", yearOfRelease: "2017", rating: "3.2"}} className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><Movie poster={Poster2} title="Strażnicy galaktyki vol.2" titleOriginal="Guardians Of The Galaxy vol. 2" year="2017" rating="3.2"/></Link>
                  </p>
                </div>
};

export default MovieList;
