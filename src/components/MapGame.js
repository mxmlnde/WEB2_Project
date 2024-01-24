import React, {useEffect, useState} from 'react';
// import img0 from "./imgs/dom.jpg";

import ButtonAddScore from "./ButtonAddScore";
import MyMap from "./MyMap";
import {Link} from "react-router-dom";
import locations from '../documents/locations.json';

const MapGame = () => {
    const [randomPlace, setRandomPlace] = useState(locations.places[0]);
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * locations.places.length);
        setRandomPlace(locations.places[randomIndex]);
    }, []);


    const [submitState, setSubmitState] = useState(true);
    const toggleSubmitState = () => {
        setSubmitState(!submitState);
    }

    return (
        <div>
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <span className="nav-link active" aria-current="true">Runde 1</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link ">Runde 2</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link disabled" aria-disabled="true">0 Punkte</span>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Wo ist dieser Ort?</h5>
                    <p className="card-text">
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                    <h5>{randomPlace.title}</h5>
                                    <p>{randomPlace.description}</p>
                                    <img src={require(`../documents${randomPlace.img}`)} alt={randomPlace.title}
                                         style={{width: '600px'}}/>
                                    <ButtonAddScore></ButtonAddScore>
                                </div>
                                <div className="col">
                                    {submitState ?
                                        <MyMap positionMarker={[50.93897590901401, 6.96552001490885]}></MyMap> :
                                        <MyMap positionMarker={[randomPlace.lat, randomPlace.long]}></MyMap>}

                                </div>
                            </div>
                        </div>
                    </p>
                    <Link href="#" className="btn btn-primary" onClick={toggleSubmitState}>BESTÄTIGEN</Link>
                </div>
            </div>
        </div>
    );
};

export default MapGame;
