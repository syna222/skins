import './App.css';
import Season from './Season';
import Episode from './Episode';
import NavBar from './NavBar';
import S1 from './season1.png';
import S2 from './season2.png';
import S3 from './season3.png';
import S4 from './season4.png';
import S5 from './season5.png';
import S6 from './season6.png';
import S7 from './season7.png';

function App() {

  const seasons = [
    {number: 1,
    image_src: S1,
    air_start: "25-01-2007",
    air_end: "22-03-2007",
    num_episodes: 9,
    runtime_mins_approx: "400",
    season_summary: "Lorem ipsum dolor sit amet ..."
    }, 
    {number: 2,
    image_src: S2,
    air_start: "11-02-2008",
    air_end: "14-04-2008",
    num_episodes: 10,
    runtime_mins_approx: "460",
    season_summary: "Lorem ipsum dolor sit amet ..."
    }, 
    {number: 3,
    image_src: S3,
    air_start: "22-01-2009",
    air_end: "26-03-2009",
    num_episodes: 10,
    runtime_mins_approx: "458",
    season_summary: "Lorem ipsum dolor sit amet ..."
    }, 
    {number: 4,
    image_src: S4,
    air_start: "28-01-2010",
    air_end: "18-03-2010",
    num_episodes: 8,
    runtime_mins_approx: "376",
    season_summary: "Lorem ipsum dolor sit amet ..."
    }, 
    {number: 5,
    image_src: S5,
    air_start: "27-01-2011",
    air_end: "17-03-2011",
    num_episodes: 8,
    runtime_mins_approx: "368",
    season_summary: "Lorem ipsum dolor sit amet ..."
    },
    {number: 6,
    image_src: S6,
    air_start: "23-01-2012",
    air_end: "26-03-2012",
    num_episodes: 10,
    runtime_mins_approx: "462",
    season_summary: "Lorem ipsum dolor sit amet ..."
    },
    {number: 7,
    image_src: S7,
    air_start: "01-07-2013",
    air_end: "05-08-2013",
    num_episodes: 6,
    runtime_mins_approx: "285",
    season_summary: "Lorem ipsum dolor sit amet ..."
    }
  ];


  return (
    <div className="App">
      <NavBar seasons={seasons}/>
      <h1>My Skins Guide</h1>
      {seasons.map((season) => 
        <Season 
        number={season.number}
        image_src={season.image_src}
        air_start={season.air_start}
        air_end={season.air_end}
        num_episodes={season.num_episodes}
        runtime_mins_approx={season.runtime_mins_approx}
        season_summary={season.season_summary}
        />)}

    </div>
  );
}

export default App;
