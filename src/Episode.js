

export default function Episode({episode}){


    return (
        <>
            <div className="episode">
                <p><strong>Episode: <span className="coloured">{episode.number}</span></strong></p>
                <p><strong>Season: <span className="coloured">{episode.season}</span></strong></p>
                <p><strong>Title: <span className="coloured">"{episode.title}"</span></strong></p>
                <p><strong>First aired: <span className="coloured">{episode.air_date}</span></strong></p>
                <p className="ep-summary"><strong>Summary: </strong>{episode.summary}</p>
            </div>
            <br/>
        </>
    );
}










