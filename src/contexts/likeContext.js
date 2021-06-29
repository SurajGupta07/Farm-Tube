import { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";
import { likeReducer, initialState } from "../reducers/like-reducer";
import { useEffect } from "react";
import {MAIN_API} from "../dbConnect/dbConnect"

export const LikeContext = createContext({});

export function LikeProvider({children}){
    const [state, dispatch] = useReducer(likeReducer, initialState)
    const [likedVideos, setLikedVideos] = useState([]);
    useEffect(() => {
        axios
        .get(`${MAIN_API}/liked`)
        .then((response) => {
            if(response.data.success) {
                setLikedVideos(response.data.like)
            }
        })
    })

    return (
        <LikeContext.Provider value={{state, dispatch, likedVideos, setLikedVideos}}>
            {children}
        </LikeContext.Provider>
    )
}

export function useLike() {
    return useContext(LikeContext)
} 