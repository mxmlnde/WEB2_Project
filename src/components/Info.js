import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import RheinChart from "./RheinChart";
import pegelData from '../documents/rheinpegel_demo.json';
import ImageComponent from "./RheinChart";
import "./Info.css";


const Info = () => {
    return (
        <div className="ImageContainer">
            <ImageComponent></ImageComponent>
        </div>
    );
};

export default Info;