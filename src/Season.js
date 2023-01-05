import Episode from './Episode';

export default function Season({season_data, episodes_data}){       //{number, image_src, air_start, air_end, num_episodes, runtime_mins_approx, season_summary}


    return (
        <div id={"S-" + season_data.number}className="season">
            <h1>This is Season {season_data.number}</h1>
            <img src={season_data.image_src} alt="season-pic" width="300"/>
            <h2>Episodes:</h2>
            <div>
                {episodes_data.map((episode, i) => <Episode key={i} episode={episode}/>)}
            </div>
            
        </div>
    );
}













