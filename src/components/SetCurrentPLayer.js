import React, {useState} from 'react';
import {useScores} from "./GameContext";
import {Link, useNavigate} from "react-router-dom";


const SetCurrentPlayer = () => {
    const [playerName, setPlayerName] = useState('');
    const {dispatch} = useScores();
    const navigate = useNavigate();


    const handleSetCurrentPlayer = (e) => {
        e.preventDefault(); // Verhindert das Standardverhalten des Formulars
        dispatch({
            type: 'SET_CURRENT_PLAYER',
            payload: playerName
        });
        navigate('/game'); // Navigiert zur Spiel-Seite
    };


    return (
        <div className="mb-3">
            <form onSubmit={handleSetCurrentPlayer}>
                <label htmlFor="pLayerLabel" className="form-label">Benutzername</label>
                <input type="text" className="form-control" id="playerName"
                       aria-describedby="playerHelp" placeholder="Dein Name" value={playerName}
                       onChange={(e) => setPlayerName(e.target.value)} required/>
                <div id="emailHelp" className="form-text">Du kannst auch deine alten Benutzernamen
                    nutzen.
                </div>
                <button type="submit" className="btn btn-primary">
                    Spiel starten
                </button>

            </form>
        </div>
    );
};

export default SetCurrentPlayer;
