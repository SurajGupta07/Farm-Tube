import axios from "axios";
import { useLike } from "../contexts/likeContext"
import {ADD_TO_LIKED_VIDEOS} from "../reducers/like-reducer"
import {MAIN_API} from "../dbConnect/dbConnect"
import { useAuth } from "../contexts/authContext";

export const useVideoData = () => {
    let {dispatch} = useLike();
    let {token} = useAuth();

    const likeVideo = async ({id, image, title, url}) => {
        const {status} = await axios.post(`${MAIN_API}/liked`, {
            id, image, title, url
          },
          {
            headers: {
                'Content-Type': 'application/json',  
                'Authorization': token,
            },
          });
        if(status === 200) {
            dispatch({
                type: ADD_TO_LIKED_VIDEOS,
                payload: {
                    id, image, title, url
                }
            })
        }
        return
    }

    return{
        likeVideo
    }
}