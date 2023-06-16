import { Link } from 'react-router-dom';

export default function Home({seasonObjs}){

    return(
        <>
            <h1>My Skins Guide</h1>
            {seasonObjs.map((seasonObj, i) => 
                <Link key={i} to={`/season-${seasonObj.fields.seasonNum}`}>
                    <div className="season-teaser">
                        <h2>{seasonObj.fields.entryName}</h2>
                        <img src={seasonObj.fields.seasonImg.fields.file.url} alt={`season-${seasonObj.fields.seasonNum}`} width="200"/>
                    </div>
                </Link>
            )}
        </>
    );
}