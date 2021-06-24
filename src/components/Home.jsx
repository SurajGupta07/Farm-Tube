import React from "react";
import { Link } from "react-router-dom";
import { useVideos } from "../contexts/VideoContext";

export function Home(){
    const {videos} = useVideos();
    return(
        <div style={{paddingBottom: '50px'}}>
            <ul className="videos-container">
                {videos.map((video) => {
                return (
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
                    );
                })}
            </ul>
        </div>
    )
}