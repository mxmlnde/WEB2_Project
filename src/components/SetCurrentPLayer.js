import React, {useState} from 'react';
import {useScores} from "./GameContext";
import {useNavigate} from "react-router-dom";


const SetCurrentPlayer = () => {
    const [playerName, setPlayerName] = useState('');
    const {dispatch} = useScores();
    const navigate = useNavigate();


    const handleSetCurrentPlayer = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SET_CURRENT_PLAYER',
            payload: playerName
        });
        navigate('/game');
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
                <button type="submit" className="btn btn-primary" style={{marginTop: '10px'}}>
                    Spiel starten
                </button>

            </form>
        </div>
    );
};

export default SetCurrentPlayer;
