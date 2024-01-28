import React, {createContext, useReducer, useContext} from 'react';

const initialState = {
    scores: [],
    currentPlayer: ''
};

const ScoreContext = createContext(initialState);

const scoreReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_SCORE':
            const newScores = [...state.scores, action.payload];
            newScores.sort((a, b) => b.score - a.score);
            return {
                ...state,
                scores: newScores
            };
        case 'SET_CURRENT_PLAYER':
            return {
                ...state,
                currentPlayer: action.payload
            };
        default:
            return state;
    }
};

export const ScoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(scoreReducer, initialState);

    return (
        <ScoreContext.Provider value={{state, dispatch}}>
            {children}
        </ScoreContext.Provider>
    );
};

export const useScores = () => {
    const context = useContext(ScoreContext);
    if (!context) {
        throw new Error('useScores must be used within a ScoreProvider');
    }
    return context;
};
