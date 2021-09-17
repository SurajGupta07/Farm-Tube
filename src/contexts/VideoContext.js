import { createContext, useContext, useEffect, useState } from "react";
import { VIDEO_API } from "../dbConnect/dbConnect";
import axios from "axios";

export const VideoContext = createContext();

export function VideoProvider({children}) {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
      axios 
      .get(`${VIDEO_API}`)
      .then((response) => {
        setVideos(response.data.videos)
      })
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