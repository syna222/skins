import Episode from './Episode';

export default function Season({seasonObj, episodeObjs}){       //{number, image_src, air_start, air_end, num_episodes, runtime_mins_approx, season_summary}

    //jede season sucht sich aus episodeObjs die ihr zugehörigen Episoden raus:
    const season_ep_array = episodeObjs.filter(epObj => epObj.fields.seasonNum === seasonObj.fields.seasonNum);

    //console.log("test aus Season(): Länge des season_ep_arrays: ", season_ep_array.length);

    return (
        <div id={"S-" + seasonObj.fields.seasonNum}className="season">
            <h1>This is Season {seasonObj.fields.seasonNum}</h1>
            <img src={seasonObj.fields.seasonImg.fields.file.url} alt="season-pic" width="300"/>
            <h2>Episodes:</h2>
            <div>
                {season_ep_array.map((episode, i) => <Episode key={i} episode={episode}/>)}
            </div>
            
        </div>
    );
}













