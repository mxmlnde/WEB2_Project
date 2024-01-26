import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MapGame from "./MapGame";
import {useScores} from "./GameContext";
import {Link} from "react-router-dom";


const Game = () => {
    const rounds = 3;
    const [currentRound, setCurrentRound] = useState(1);
    const [currentLocation, setCurrentLocation] = useState(1);
    const [localGameScore, setLocalGameScore] = useState(0);


    const handleNextRound = () => {
        if (currentRound < rounds + 1) {
            setCurrentRound(currentRound + 1);
            setCurrentLocation(currentLocation + 1)
        }
    };

    const addNewRoundScore = (newScore) => {
        setLocalGameScore(localGameScore + newScore);
    };
    const {state, dispatch} = useScores();

    const storeScore = () => {
        dispatch({
            type: 'ADD_SCORE',
            payload: {name: state.currentPlayer, score: localGameScore}
        });
    }


    return (
        <div className="container" style={{margin: 'auto', marginTop: '25px'}}>
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <span
                                className={currentRound === 1 ? "nav-link active" : currentRound > 1 ? "nav-link disabled" : "nav-link"}
                                aria-current="true">Runde 1</span>
                        </li>
                        <li className="nav-item">
                            <span
                                className={currentRound === 2 ? "nav-link active" : currentRound > 2 ? "nav-link disabled" : "nav-link"}>Runde 2</span>
                        </li>
                        <li className="nav-item">
                            <span
                                className={currentRound === 3 ? "nav-link active" : currentRound > 3 ? "nav-link disabled" : "nav-link"}>Runde 3</span>
                        </li>
                        <li className="nav-item">
                            <span className={currentRound === 4 ? "nav-link active" : "nav-link disabled"}
                                  aria-disabled="true">{localGameScore} Punkte</span>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    {currentRound === 4 ?
                        <div>
                            <p> Es wurden {localGameScore} Punte erreicht</p>
                            <p><Link to="/" className="btn btn-primary" onClick={storeScore}>Zurück zum Anfang</Link>
                            </p>
                        </div> :
                        <MapGame location={currentLocation} updateGameScore={addNewRoundScore}
                                 onNextRound={handleNextRound}></MapGame>}

                </div>
            </div>
        </div>
    );
};

export default Game;