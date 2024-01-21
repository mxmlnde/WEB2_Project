import React, {useState} from 'react';
import {useScores} from "./GameContext";
import Game from "./Game";
import {Link} from "react-router-dom";

const SetCurrentPlayer = () => {
    const [playerName, setPlayerName] = useState('');
    const {dispatch} = useScores();

    const handleSetCurrentPlayer = () => {
        dispatch({
            type: 'SET_CURRENT_PLAYER',
            payload: playerName
        });
    };

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="pLayerLabel" className="form-label">Benutzername</label>
                <input type="text" className="form-control" id="playerName"
                       aria-describedby="playerHelp" placeholder="Dein Name" value={playerName}
                       onChange={(e) => setPlayerName(e.target.value)}/>
                <div id="emailHelp" className="form-text">Du kannst auch deine alten Benutzernamen
                    nutzen.
                </div>
            </div>
            <button onClick={handleSetCurrentPlayer} className="btn btn-danger"><Link to="/game">Spiel starten</Link></button>
        </div>
    );
};

export default SetCurrentPlayer;
