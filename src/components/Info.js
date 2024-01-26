import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Button} from "react-bootstrap";

const Info = () => {
    const [pegelDaten, setPegelDaten] = useState([]);
    const [lade, setLade] = useState(true);
    const [fehler, setFehler] = useState(null);
    const [aktuellerPegel, setAktuellerPegel] = useState(null);
    const [bild, setBild] = useState(null);
    const imgURL = 'https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/a6ee8177-107b-47dd-bcfd-30960ccc6e9c/w/measurements.png';
    const [showJSON, setShowJSON] = useState(false);

    const toggleJSON = () => {
        setShowJSON(!showJSON);
    }

    useEffect(() => {
        fetch('https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/a6ee8177-107b-47dd-bcfd-30960ccc6e9c/w/measurements.json')
            .then(response => response.json())
            .then(data => {
                setPegelDaten(data);
                if (data && data.length > 0) {
                    setAktuellerPegel(data[data.length - 1]);
                }
                setLade(false);
            })
            .catch(error => {
                console.error('Fehler beim Abrufen der Daten', error);
                setFehler(error);
                setLade(false);
            });
    }, []);


    if (lade) {
        return <p>Lade...</p>;
    }

    if (fehler) {
        return <p>Fehler beim Laden der Daten: {fehler.message}</p>;
    }

    const timestampPegel = aktuellerPegel ? new Date(aktuellerPegel.timestamp) : null;
    const MEZPegel = timestampPegel ? timestampPegel.toLocaleTimeString('de-DE', {
        hour: '2-digit',
        minute: '2-digit'
    }) : '';

    return (
        <div className="container-sm">
            <div className="card">
                <div className="card-img-top">
                    <img src={imgURL} alt={"Bild"}/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Pegelstand Rhein: <b>Köln</b> Kilometer 688</h5>
                    {
                        aktuellerPegel.value >= 620 && aktuellerPegel.value < 830 ?
                            <div className="alert alert-warning" role="alert">
                                <b>Hochwassermarke 1: </b>
                                Schiffe dürfen nur noch mit verminderter Geschwindigkeit und im mittleren
                                Stromdrittel fahren.
                            </div>
                            :
                            aktuellerPegel.value >= 830 ?
                                <div className="alert alert-danger" role="alert">
                                    <b>Hochwassermarke 2: </b>
                                    Der Schiffsverkehr ist gesperrt.
                                </div>
                                : null
                    }


                    {aktuellerPegel && <p>Letzte Messung um {MEZPegel} Uhr mit {aktuellerPegel.value / 100} Meter</p>}
                    <p className="card-text">Der Pegel Köln steht in der Kölner Altstadt-Nord am linken Rheinufer und
                        misst den Wasserstand des Rheins am Stromkilometer 688. Er ist einer von 22 Pegeln am Rhein.
                        Betrieben wird er vom Wasserstraßen- und Schifffahrtsamt Rhein. Pegel Köln mit mechanischer
                        Pegeluhr.</p>
                    <Button className="btn btn-primary"
                            onClick={toggleJSON}>{showJSON ? "JSON verbergen" : "JSON anzeigen"}</Button>

                    <div className={showJSON ? "modal fade show" : "modal fade"}
                         style={showJSON ? {display: "block"} : {display: "none"}} tabIndex="-1">
                        <div className="modal-dialog modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">JSON-Daten</h5>
                                    <button type="button" className="btn-close" onClick={toggleJSON}></button>
                                </div>
                                <div className="modal-body">
                                    <pre>{JSON.stringify(pegelDaten, null, 2)}</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                    {showJSON && <div className="modal-backdrop fade show"></div>}
                </div>
            </div>
        </div>
    );
};

export default Info;
