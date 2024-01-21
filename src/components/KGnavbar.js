import React, {useContext} from "react";
import {Link} from "react-router-dom";
import PlayerContext from "./PlayerContext";
import {useScores} from "./GameContext";

const KGnavbar = () => {

    const {state} = useScores();

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <span className="navbar-brand">KölnGuesser</span>
                    <span className="navbar-brand"> Hey
                                {state.currentPlayer ? (
                                    <span> {state.currentPlayer}</span>
                                ) : (
                                    <span> XXX</span>
                                )}
                    </span>
                    <div className="collapse navbar-collapse" id="navbarNav">
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
