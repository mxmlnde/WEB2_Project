import React, {useState} from 'react';
import {useScores} from "./GameContext";

const AddScoreButton = () => {
    const {state, dispatch} = useScores();
    const [playerName, setPlayerName] = useState('');
    const [score, setScore] = useState(0);


    const handleAddScore = () => {
        // Hier fügen Sie die Logik ein, um den neuen Score hinzuzufügen
        dispatch({
            type: 'ADD_SCORE',
            payload: {name: state.currentPlayer, score: score}
        });
    };


    return (
        <div>
            <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Spielername"
            />
            <input
                type="number"
                value={score}
                onChange={(e) => setScore(parseInt(e.target.value))}
                placeholder="Punktestand"
            />
            <button onClick={handleAddScore}>Neuen Score hinzufügen</button>
        </div>
    );
};

export default AddScoreButton;
