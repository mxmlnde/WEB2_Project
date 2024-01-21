import React, {useContext, useState} from "react";
import PlayerContext from "./PlayerContext";

function HomeStartGameForm() {

    const {setName} = useContext(PlayerContext);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setName(inputValue); // Aktualisiert den Namen im Kontext
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="pLayerLabel" className="form-label">Benutzername</label>
                    <input type="text" className="form-control" id="playerName"
                           aria-describedby="playerHelp" placeholder="Dein Name" value={inputValue}
                           onChange={(e) => setInputValue(e.target.value)}/>
                    <div id="emailHelp" className="form-text">Du kannst auch deine alten Benutzernamen
                        nutzen.
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Neues Spiel starten</button>
            </form>
        </div>
    );
}

export default HomeStartGameForm;
