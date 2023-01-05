import './App.css';
import Season from './Season';
import Home from './Home';
import {seasons} from './seasonData';
import {episodesS1} from './episodeDataS1';   //there should be a file for each season with all episodes
import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
        {seasons.map((season) => <NavLink to={"/season-"+ season.number}>{"Season" + season.number}</NavLink>)}
      </nav>
      {/*<h1>My Skins Guide</h1>
      {seasons.map((season) => 
        <Season 
        number={season.number}
        image_src={season.image_src}
        air_start={season.air_start}
        air_end={season.air_end}
        num_episodes={season.num_episodes}
        runtime_mins_approx={season.runtime_mins_approx}
        season_summary={season.season_summary}
      />)}*/}
      <Routes>
        <Route path="/" element={<Home seasons={seasons}/>}/>
        {seasons.map((season, i) => <Route path={"/season-"+ season.number} element={<Season season_data={season} episodes_data={episodesS1}/>}/>)}    {/*episodesS1 muss später verallgemeinert werden + season.number!*/}
      </Routes>

    </div>
  );
}

export default App;
