import React from 'react';
import {useScores} from "./GameContext";

const ScoreList = () => {
    const {state} = useScores();

    if (state.scores.length === 0) {
        return <p>Noch keine Punktestände verfügbar.</p>;
    }

    return (
        <div>
            <ol>
                {state.scores.map((score, index) => (
                    <li key={index}>
                <span className={`badge ${index === 0 ? 'bg-warning' : 'bg-secondary'}`}>
                    {score.name}
                </span>: {score.score} Punkte
                    </li>
                ))}
            </ol>
        </div>

    );
};

export default ScoreList;
