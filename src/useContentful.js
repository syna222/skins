import { createClient } from 'contentful';


export default function useContentful(){

    const client = createClient({
        space: "9py7flakzbxq",
        accessToken: "pV5iXkKvU0r4nsWiLxF3rsfhRuGKBIK6IB8DtxVNbEk",     //hide in .env! never upload!
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

    //console.log("test aus useContentful(): ", getSeasons());
    
    return { getSeasons };

}









