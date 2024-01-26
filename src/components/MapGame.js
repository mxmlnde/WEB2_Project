import React, {useEffect, useState} from 'react';
import ButtonAddScore from "./ButtonAddScore";
import MyMap from "./MyMap";
import locations from '../documents/locations.json';
import NewMyMap from "./NewMyMap";

const MapGame = ({location, updateGameScore, onNextRound}) => {
    const [currentLocation, setCurrentLocation] = useState(locations.places[0]);
    useEffect(() => {
        setCurrentLocation(locations.places[location]);
    }, [location]);


    const [submitState, setSubmitState] = useState(true);
    const toggleSubmitState = () => {
        setSubmitState(!submitState);
    }

    const nextRound = () => {
        updateGameScore(10);
        onNextRound();
        setSubmitState(true);
    }
    const [posUserMarker, setPosUserMarker] = useState(null);
    const handleUserMarkerPositionChange = (newPosition) => {
        setPosUserMarker(newPosition);
    };


    return (
        <div>
            <h5 className="card-title">Wo ist dieser Ort?</h5>
            <p className="card-text">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <h5>{currentLocation.title}</h5>
                            <p>{currentLocation.description}</p>
                            <img src={require(`../documents${currentLocation.img}`)} alt={currentLocation.title}
                                 style={{width: '600px'}}/>
                        </div>
                        <div className="col">
                            {submitState ?
                                <MyMap positionMarker={[50.93897590901401, 6.96552001490885]}></MyMap> :
                                <MyMap positionMarker={[currentLocation.lat, currentLocation.long]}></MyMap>}

                        </div>
                    </div>
                </div>
            </p>
            {submitState ? <span className="btn btn-primary" onClick={toggleSubmitState}>BESTÄTIGEN</span> :
                <span className="btn btn-primary" onClick={nextRound}>Nächste Runde</span>}

        </div>
    );
};

export default MapGame;
