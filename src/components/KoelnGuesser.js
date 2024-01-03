import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./KoelnGuesser.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import KGnavbar from "./KGnavbar";
import Info from "./Info";


const KoelnGuesser = () => {
    return (
        <div>
            <Router>
                <KGnavbar></KGnavbar>
                <Routes>
                    <Route path="/" element={<h1>Home</h1>}/>
                    <Route path="/game" element={<h1>Game</h1>}/>
                    <Route path="/info" element={<Info></Info>}/>
                </Routes>
            </Router>
        </div>
    );
};

export default KoelnGuesser;
