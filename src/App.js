import './App.css';
import Season from './Season';
import Home from './Home';
//import {seasons} from './seasonData';
//import {episodesS1} from './episodeDataS1';
//import {episodesS2} from './episodeDataS2';
//import {episodesS3} from './episodeDataS3';
//import {episodesS4} from './episodeDataS4';
//import {episodesS5} from './episodeDataS5';
//import {episodesS6} from './episodeDataS6';
//import {episodesS7} from './episodeDataS7';
import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useContentfulSeasons from './useContentfulSeasons';
import useContentfulEpisodes from './useContenfulEpisodes';

//const all_episodes_data = [episodesS1, episodesS2, episodesS3, episodesS4, episodesS5, episodesS6, episodesS7];


function App() {
    const { getSeasons } = useContentfulSeasons();
    const { getEpisodes } = useContentfulEpisodes();
    const [seasonObjs, setSeasonObjs] = useState([]);
    const [episodeObjs, setEpisodeObjs] = useState([]);

    //comparator-func for sorting array of seasonObjs below:
    function compareS (a, b){
        if(a.fields.seasonNum < b.fields.seasonNum){
            return -1;
        }
        if(a.fields.seasonNum > b.fields.seasonNum){
            return 1;
        }
        return 0;
    }

    //comparator-func for sorting array of episodeObjs below:
    function compareE (a, b){
      if(a.fields.orderNum < b.fields.orderNum){
        return -1;
      }
      if(a.fields.orderNum > b.fields.orderNum){
        return 1;
      }
      return 0;
    }

    useEffect(() => {
      getSeasons().then((response) => {
          console.log(response.items);        //items = Array of season-objects
          //sort state array "seasonObjs" by objects' seasonNums via comparator-func "compareS":
          let seasObjs = response.items;
          seasObjs.sort( compareS );
          setSeasonObjs(seasObjs)});  
    }, []);

    useEffect(() => {
      getEpisodes().then((response) => {
        console.log(response.items);            //items = Array of episode-objects
        //sort state array "episodeObjs" by objects' orderNums via comparator-func "compareE":
        let epObjs = response.items;
        epObjs.sort( compareE );
        setEpisodeObjs(epObjs);})
    }, []);


  /*useEffect(() => {
    window.scrollTo(0, 0);    //damit nicht mit alter Scroll-Position auf neue Seite verlinkt (sondern diese ab oben zeigt) FUNKTIONIERT NICHT IMMER?
  }, []);*/

  
  console.log("test, seasons sorted sind: ", seasonObjs);
  console.log("test, episoden sorted sind: ", episodeObjs);

  return (
    <div className="App">
      <nav>
        <NavLink className="nav-elem" to="/">Home</NavLink>
        {seasonObjs.map((seasonObj, i) => <NavLink key={i} className="nav-elem" to={"/season-"+ seasonObj.fields.seasonNum}>{"Season " + seasonObj.fields.seasonNum}</NavLink>)}
      </nav>
      
      <Routes>
        <Route path="/" element={<Home seasonObjs={seasonObjs}/>}/>
        {seasonObjs.map((seasonObj, i) => <Route key={i}path={"/season-"+ seasonObj.fields.seasonNum} element={<Season seasonObj={seasonObj} episodeObjs={episodeObjs}/>}/>)}  {/*jeder Season werden alle Episoden übergeben; diese sucht sich die ihr zugehörigen selbst raus.*/}
      </Routes>


    </div>
  );
}

export default App;
