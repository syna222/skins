

export default function Season({number, image_src, air_start, air_end, num_episodes, runtime_mins_approx, season_summary}){


    return (
        <div id={"S-" + number}className="season">
            <img src={image_src} alt={"thumbnail_season" + number} width="300"></img>
            <span className="season_teaser">SEASON {number}: {season_summary}</span>
            {/*<span>Season: <strong>{number}</strong></span><br/>
            <span>First aired: {air_start}</span><br/>
            <span>Last aired: {air_end}</span><br/>
            <span>Number of episodes: {num_episodes}</span><br/>
            <span>Approximated runtime: {runtime_mins_approx} min.</span><br/><br/>*/}
        </div>
    );
}













