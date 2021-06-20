import React from "react";
import { Link } from "react-router-dom";
import { useVideos } from "../contexts/VideoContext";

export function Home(){
    const {videos, setVideos} = useVideos();
    return(
        <div style={{paddingBottom: '50px'}}>
            <ul className="videos-container">
                {videos.map((item) => {
                return (
                    <>
                        <li className="card">
                            <div className="card-img">
                                <img src={item.image} alt="thumbnail" style={{height: "200px", width: "350px"}}/>
                                <h3 className="card-text">{item.title}</h3>
                            </div>
                        </li>
                    </>
                    );
                })}
            </ul>
        </div>
    )
}