import React, {useEffect, useState} from 'react';
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
        updateGameScore(calculatePoints(userGuess, [currentLocation.lat, currentLocation.long]));
        onNextRound();
        setSubmitState(true);
    }

    const [userGuess, setUserGuess] = useState([0, 0])

    function calculateDistance(pos1, pos2) {
        const R = 6371; // Erdradius in km
        const dLat = (pos2[0] - pos1[0]) * Math.PI / 180;
        const dLon = (pos2[1] - pos1[1]) * Math.PI / 180;
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(pos1[0] * Math.PI / 180) * Math.cos(pos2[0] * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }

    function calculatePoints(pos1, pos2) {
        const maxDistance = 1; // Maximale Distanz für Punkte in km
        const maxPoints = 100; // Maximale Punkteanzahl

        const distance = calculateDistance(pos1, pos2);
        if (distance >= maxDistance) return 0;

        const points = (1 - distance / maxDistance) * maxPoints;
        return Math.round(points);
    }

    return (
        <div>
            <h5 className="card-title">Wo ist dieser Ort?</h5>
            <p className="card-text">
                <div className="container text-center">
                    <div className={"row"}>
                        <div className={"col"}>
                            <h5>{currentLocation.title}</h5>
                            <p>{currentLocation.description}</p>
                        </div>
                        <div className={"col"}>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">

                            <img src={require(`../documents${currentLocation.img}`)} alt={currentLocation.title}
                                 style={{width: '600px'}}/>
                        </div>
                        <div className="col">
                            {submitState ?
                                <NewMyMap zoomFactor={15} onUserMarkerPositionChange={setUserGuess}
                                          centerPos={[50.93897590901401, 6.96552001490885]}></NewMyMap>
                                :
                                <NewMyMap zoomFactor={15}
                                          positionMarker={[currentLocation.lat, currentLocation.long]}
                                          centerPos={[userGuess[0] - currentLocation.lat, userGuess[1] - currentLocation.long]}></NewMyMap>}

                            {!submitState ? <p>
                                    <div className="alert alert-success" role="alert">
                                        Du
                                        lagst {calculateDistance(userGuess, [currentLocation.lat, currentLocation.long]).toFixed(2)} Kilometer
                                        daneben und
                                        hast
                                        damit {(calculatePoints(userGuess, [currentLocation.lat, currentLocation.long]))} Punkte
                                        erreicht!
                                    </div>
                                </p>
                                : null}
                        </div>
                    </div>
                </div>
            </p>
            {
                submitState ? <span className="btn btn-primary" onClick={toggleSubmitState}>BESTÄTIGEN</span> :
                    <span className="btn btn-primary" onClick={nextRound}>{}Nächste Runde</span>
            }
        </div>
    )
        ;
};

export default MapGame;
