import React, {createContext, useReducer, useContext} from 'react';

// Initialer Zustand mit einem zusätzlichen Feld für den aktuellen Spieler
const initialState = {
    scores: [],
    currentPlayer: '' // Hinzufügen des aktuellen Spielers
};

// Context erstellen
const ScoreContext = createContext(initialState);

// Reducer-Funktion
const scoreReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_SCORE':
            const newScores = [...state.scores, action.payload];
            newScores.sort((a, b) => b.score - a.score); // Absteigende Sortierung
            return {
                ...state,
                scores: newScores
            };
        case 'SET_CURRENT_PLAYER': // Aktion, um den aktuellen Spieler zu setzen
            return {
                ...state,
                currentPlayer: action.payload
            };
        default:
            return state;
    }
};

// Provider-Komponente
export const ScoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(scoreReducer, initialState);

    return (
        <ScoreContext.Provider value={{state, dispatch}}>
            {children}
        </ScoreContext.Provider>
    );
};

// Hook, um Context zu verwenden
export const useScores = () => {
    const context = useContext(ScoreContext);
    if (!context) {
        throw new Error('useScores must be used within a ScoreProvider');
    }
    return context;
};
