import React from 'react';
import {useScores} from "./GameContext";

const ScoreList = () => {
    const { state } = useScores();

    if (state.scores.length === 0) {
        return <p>Noch keine Punktestände verfügbar.</p>;
    }

    return (
        <div>
            <ul>
                {state.scores.map((score, index) => (
                    <li key={index}>
                        {score.name}: {score.score} Punkte
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ScoreList;
