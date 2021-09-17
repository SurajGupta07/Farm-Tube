import React from "react";
import {useLike} from "../contexts/likeContext";
import { Link } from "react-router-dom";

export const Liked = () => {
    let {likedVideos} = useLike();
    return(
        <div style={{paddingBottom: '50px'}}>
            <ul className="videos-container">
                {likedVideos.map((video) => {
                    return(
                        <>
                            <li className="card">
                            <Link to={`/watch/${video.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                                <div className="card-img">
                                    <img src={video.image} alt="thumbnail" style={{height: "200px", width: "350px"}}/>
                                    <h3 className="card-text">{video.title}</h3>
                                </div>
                            </Link>
                        </li>
                        </>
                    )
                })}
            </ul>
        </div>
    )
}