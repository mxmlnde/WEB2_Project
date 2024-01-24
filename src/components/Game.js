import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ButtonAddScore from "./ButtonAddScore";
import MyMap from "./MyMap";
import Bild from '/Users/max/Documents/GitHub/projektweb2/src/documents/imgs/dom.jpg';
import MapGame from "./MapGame";

const Game = () => {
    return (
        <div className="container">
            <MapGame></MapGame>
        </div>
    );
};

export default Game;