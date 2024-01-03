import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./KoelnGuesser.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const KGnavbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <span className="navbar-brand">KölnGuesser</span>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/game" className="nav-link">Spielen</Link>
                            <Link to="/info" className="nav-link">Info</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default KGnavbar;
