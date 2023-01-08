

export default function Home({seasons}){

    return(
        <>
            <h1>My Skins Guide</h1>
            {seasons.map((season, i) => 
                <div key={i} className="season-teaser" style={{border: "2px solid black"}}>   
                    <h2>Season {season.number}</h2>
                    <img src={season.image_src} alt={"season-" + season.number} width="200"/> 


                </div>
            )}
        </>
    );
}