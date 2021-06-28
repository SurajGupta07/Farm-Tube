import axios from "axios";
import { useLike } from "../contexts/likeContext"
import {ADD_TO_LIKED_VIDEOS} from "../reducers/like-reducer"
import {MAIN_API} from "../dbConnect/dbConnect"

export const useVideoData = () => {
    let {dispatch} = useLike();

    const likeVideo = async (id) => {
        console.log(id)
        const {status} = await axios.post(`${MAIN_API}/liked`, {
            id
        });
        if(status === 200) {
            dispatch({
                type: ADD_TO_LIKED_VIDEOS,
                payload: {
                    id
                }
            })
        }
        return
    }

    return{
        likeVideo
    }
}