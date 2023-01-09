import Episode from './Episode';

export default function Season({seasonObj, episodes_data}){       //{number, image_src, air_start, air_end, num_episodes, runtime_mins_approx, season_summary}


    return (
        <div id={"S-" + seasonObj.fields.seasonNum}className="season">
            <h1>This is Season {seasonObj.fields.seasonNum}</h1>
            <img src={seasonObj.fields.seasonImg.fields.file.url} alt="season-pic" width="300"/>
            <h2>Episodes:</h2>
            <div>
                {episodes_data.map((episode, i) => <Episode key={i} episode={episode}/>)}
            </div>
            
        </div>
    );
}













