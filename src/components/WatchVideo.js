import { useEffect } from "react";
import axios from "axios";
import {useVideos} from "../contexts/VideoContext";
import {useParams, Link} from "react-router-dom";
import { useVideoData } from "../hooks/useVideoData";
import Like from "../assets/like.png"
import Dislike from "../assets/dislike.png"
import { MAIN_API } from "../dbConnect/dbConnect";

export function WatchVideo() {
    const {videoId} = useParams();
    const {videos} = useVideos();
    const {likeVideo} = useVideoData();
    const video = videos.find((video) => video.id === videoId);
    useEffect(() => {
        (async() => {
            try{
                const response = await axios.post(`${MAIN_API}/history`, video)
                return response.data;
            } catch(err) {
                console.log(err)
            }
        })() // eslint-disable-next-line
    }, [])

    return (
        <div key={videoId} className="watch-video">
            <iframe width="1200" height="700" title="Farm-Easy" src={video?.url} frameBorder="0" allowFullScreen></iframe>
            <p style={{color:"#fff"}}>{video?.title}</p>
            <p style={{display:"inline", color:"#E5E7EB"}}>301,264 views, Jan 10, 2020</p>
            <button className="like-video-button" onClick={() => likeVideo(video)}>
                <img className="like-video" src={Like} alt="Like" />
            </button>
            <button className="dislike-video-button">
                <img className="dislike-video" src={Dislike} alt="Dislike" />
            </button>
            <hr className="divder"/>
            <Link to="/">Back to Home</Link>
        </div>
    );
}
