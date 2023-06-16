import { createClient } from 'contentful';

export default function useContentfulEpisodes(){

    const client = createClient({
        space: process.env.REACT_APP_SPACE_ID,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
        host: "cdn.contentful.com"
        });

    async function getEpisodes(){
        try {
            const episode_entries = await client.getEntries({content_type: "episode"});
            return episode_entries;
        } catch (error){
            console.log("Error fetching episodes: ", error);
        }
    }
    
    return { getEpisodes };
}