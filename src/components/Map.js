import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Info.css";


const Map = () => {
    return (
        <div className="container-lg">
            <div id="map"></div>
        </div>
    );
};

export default Map;