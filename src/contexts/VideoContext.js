import { createContext, useContext, useState } from "react";
import {videoData} from "../data/videoData";

export const VideoContext = createContext();

export function VideoProvider({children}) {
    const [videos, setVideos] = useState(videoData);
    return(
        <VideoContext.Provider value={{videos, setVideos}}>
            {children}
        </VideoContext.Provider>
    )
}

export function useVideos() {
    return useContext(VideoContext)
}