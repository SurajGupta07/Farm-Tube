import { createContext, useContext, useReducer } from "react";
import { likeReducer, initialState } from "../reducers/like-reducer";

export const LikeContext = createContext({});

export function LikeProvider({children}){
    const [state, dispatch] = useReducer(likeReducer, initialState)

    return (
        <LikeContext.Provider value={{state, dispatch}}>
            {children}
        </LikeContext.Provider>
    )
}

export function useLike() {
    return useContext(LikeContext)
} 