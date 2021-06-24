import { createContext, useContext, useEffect, useState } from "react";
import { VIDEO_API } from "../dbConnect/dbConnect";
import axios from "axios";

export const VideoContext = createContext();

export function VideoProvider({children}) {
    const [videos, setVideos] = useState([]);
    useEffect(() => { 
        (async () => {
          let response = await axios.get(`${VIDEO_API}`)
          if(response.status === 200){
            setVideos(response.data.videos)
          }
        })()
      }, []) 

    return(
        <VideoContext.Provider value={{videos, setVideos}}>
            {children}
        </VideoContext.Provider>
    )
}

export function useVideos() {
    return useContext(VideoContext)
}