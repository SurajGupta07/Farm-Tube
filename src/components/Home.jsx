import React from "react";
import { Link } from "react-router-dom";
import { useVideos } from "../contexts/VideoContext";

export function Home(){
    const {videos} = useVideos();
    return(
        <div style={{paddingBottom: '50px'}}>
            <ul className="videos-container">
                {videos.map((item) => {
                return (
                    <>
                        <li className="card">
                            <Link to={`/watch/${item.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                                <div className="card-img">
                                    <img src={item.image} alt="thumbnail" style={{height: "200px", width: "350px"}}/>
                                    <h3 className="card-text">{item.title}</h3>
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