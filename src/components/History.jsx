import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MAIN_API } from "../dbConnect/dbConnect";

export const History = () => {

    let[historyVideo, setHistoryVideo] = useState()

    useEffect(() => {
        (async() => {
            try{
                const response = await axios.get(`${MAIN_API}/history`)
                setHistoryVideo(response.data.history);
            } catch(err) {
                console.log(err)
            }
        })()
    }, [historyVideo])

    return(
        <div style={{paddingBottom: '50px'}}>
            <ul className="videos-container">
                {historyVideo?.map((video) => {
                    return(
                        <>
                            <li className="card">
                            <Link to={`/watch/${video.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                                <div className="card-img">
                                    <img src={video?.image} alt="thumbnail" style={{height: "200px", width: "350px"}}/>
                                    <h3 className="card-text">{video?.title}</h3>
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