import './App.css';
import Season from './Season';
import Home from './Home';
import {seasons} from './seasonData';
import {episodesS1} from './episodeDataS1';
import {episodesS2} from './episodeDataS2';
import {episodesS3} from './episodeDataS3';
import {episodesS4} from './episodeDataS4';
import {episodesS5} from './episodeDataS5';
import {episodesS6} from './episodeDataS6';
import {episodesS7} from './episodeDataS7';
import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

const all_episodes_data = [episodesS1, episodesS2, episodesS3, episodesS4, episodesS5, episodesS6, episodesS7];
console.log("test for all_episodes_data: ", all_episodes_data[0]);

function App() {

  /*useEffect(() => {
    window.scrollTo(0, 0);    //damit nicht mit alter Scroll-Position auf neue Seite verlinkt (sondern diese ab oben zeigt) FUNKTIONIERT NICHT IMMER?
  }, []);*/

  return (
    <div className="App">
      <nav>
        <NavLink className="nav-elem" to="/">Home</NavLink>
        {seasons.map((season) => <NavLink className="nav-elem" to={"/season-"+ season.number}>{"Season " + season.number}</NavLink>)}
      </nav>
      
      <Routes>
        <Route path="/" element={<Home seasons={seasons}/>}/>
        {seasons.map((season, i) => <Route path={"/season-"+ season.number} element={<Season season_data={season} episodes_data={all_episodes_data[i]}/>}/>)}    {/*episodesS1 muss später verallgemeinert werden!*/}
      </Routes>

    </div>
  );
}

export default App;
