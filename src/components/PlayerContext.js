import React, {createContext, useState} from 'react';

// Erstellen des Kontexts mit einem leeren Objekt, das einen Wert und eine Setter-Funktion enthält
const PlayerContext = createContext({
    name: '...', // der Standardwert für den Namen
    setName: () => {
    } // eine leere Funktion, die später überschrieben wird
});

export const PlayerProvider = ({children}) => {
    const [name, setName] = useState('...');

    return (
        <PlayerContext.Provider value={{name, setName}}>
            {children}
        </PlayerContext.Provider>
    );
};

export default PlayerContext;
