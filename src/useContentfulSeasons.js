import { createClient } from 'contentful';

export default function useContentfulSeasons(){

    const client = createClient({
        space: process.env.REACT_APP_SPACE_ID,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
        host: "cdn.contentful.com"
        });

    async function getSeasons(){
        try {
            const season_entries = await client.getEntries({content_type: "season"});
            return season_entries;
        } catch (error){
            console.log("Error fetching seasons: ", error);
        }
    }

    //console.log("test aus useContentfulSeasons(): ", getSeasons());
    
    return { getSeasons };

}









