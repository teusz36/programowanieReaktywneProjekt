import React from 'react';
import './App.css';
import Logo from './components/logo.jsx';
import Search from './components/search.jsx';
import LogIn from './components/login.jsx';
import Movie from './components/movie.jsx';
import Poster1 from './GuardiansOfTheGalaxyvol1poster.jpg';
import Poster2 from './GuardiansOfTheGalaxyvol2poster.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Search />
        <LogIn />
      </header>
      <div className="body">
        <p>
            <Movie poster={Poster1} title="Strażnicy galaktyki vol.1" titleOriginal="Guardians Of The Galaxy vol. 1" year="2014"/>
            <Movie poster={Poster2} title="Strażnicy galaktyki vol.2" titleOriginal="Guardians Of The Galaxy vol. 2" year="2017"/>
            <Movie poster={Poster2} title="Strażnicy galaktyki vol.2" titleOriginal="Guardians Of The Galaxy vol. 2" year="2017"/>
            <Movie poster={Poster2} title="Strażnicy galaktyki vol.2" titleOriginal="Guardians Of The Galaxy vol. 2" year="2017"/>
        </p>
      </div>
    </div>
  );
}

export default App;
