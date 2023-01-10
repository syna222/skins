

export default function Episode({episode}){


    return (
        <>
            <div className="episode">
                <p><strong>Episode: <span className="coloured">{episode.fields.episodeNum}</span></strong></p>
                <p><strong>Season: <span className="coloured">{episode.fields.seasonNum}</span></strong></p>
                <p><strong>Title: <span className="coloured">"{episode.fields.title}"</span></strong></p>
                <p><strong>First aired: <span className="coloured">{episode.fields.airDate.substring(0, 10)}</span></strong></p> {/*substring(0,10) to only show date without time*/}
                <p className="ep-summary"><strong>Summary: </strong>{episode.fields.summary}</p>
            </div>
            <br/>
        </>
    );
}










