import { Link } from 'react-router-dom';

export default function Home({seasonObjs}){

    return(
        <>
            <h1>My Skins Guide</h1>
            {seasonObjs.map((seasonObj, i) => 
                <Link to={`/season-${seasonObj.fields.seasonNum}`}>
                    <div key={i} className="season-teaser">
                        <h2>{seasonObj.fields.entryName}</h2>
                        <img src={seasonObj.fields.seasonImg.fields.file.url} alt={`season-${seasonObj.fields.seasonNum}`} width="200"/>
                    </div>
                </Link>
            )}

            {/*seasons.map((season, i) => 
                <Link to={`/season-${season.number}`}>        {/*via useParams?}
                    <div key={i} className="season-teaser" style={{border: "2px solid black"}}>   
                        <h2>Season {season.number}</h2>
                        <img src={season.image_src} alt={"season-" + season.number} width="200"/> 
                    </div>
                </Link>
            )*/}
        </>
    );
}