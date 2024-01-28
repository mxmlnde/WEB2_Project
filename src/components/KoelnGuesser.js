import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./KoelnGuesser.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import KGnavbar from "./KGnavbar";
import Info from "./Info";
import Home from "./Home";
import Game from "./Game";


const KoelnGuesser = () => {
    return (
        <div>
            <Router>
                <KGnavbar></KGnavbar>
                <Routes>
                    <Route path="/" element={<Home></Home>}/>
                    <Route path="/game" element={<Game></Game>}/>
                    <Route path="/info" element={<Info></Info>}/>
                </Routes>
            </Router>
        </div>
    );
};

export default KoelnGuesser;
