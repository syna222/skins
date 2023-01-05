

export default function Episode({episode}){


    return (
        <>
            <div className="episode">
                <p>Episode number: <strong>{episode.number}</strong></p>
                <p>Season: <strong>{episode.season}</strong></p>
                <p>Title: <strong>"{episode.title}"</strong></p>
                <p>First aired: <strong>{episode.air_date}</strong></p>
                <p>Summary: {episode.summary}</p>
            </div>
            <br/>
        </>
    );
}










