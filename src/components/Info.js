import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import RheinChart from "./RheinChart";
import pegelData from '../documents/rheinpegel_demo.json';
import ImageComponent from "./RheinChart";


const Info = () => {
    return (
        <div className="container-fluid">
            <div className="card">
                <div className="card-img-top">
                </div>
                <div className="card-body">
                    <h5 className="card-title">Pegelstand Rhein: Kilometer 600</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <a className="btn btn-primary">JSON anzeigen</a>
                </div>
            </div>
        </div>
    );
};

export default Info;