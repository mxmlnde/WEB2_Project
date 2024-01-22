import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ButtonAddScore from "./ButtonAddScore";
import MyMap from "./MyMap";

const Game = () => {
    return (
        <div className="container">
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="true">Runde 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">Runde 2</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">Runde 3</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">Runde 4</Link>
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
                                    <ButtonAddScore></ButtonAddScore>
                                </div>
                                <div className="col">
                                    <MyMap></MyMap>
                                </div>
                            </div>
                        </div>




                    </p>
                    <Link href="#" className="btn btn-primary">BESTÄTIGEN</Link>
                </div>
            </div>
        </div>
    );
};

export default Game;