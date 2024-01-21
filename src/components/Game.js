import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ButtonAddScore from "./ButtonAddScore";

const Game = () => {
    return (
        <div>
            <div className="modal modal-sheet position-static d-block" tabIndex="-1"
                 role="dialog" id="modalSheet">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-header border-bottom-0">
                            <h1 className="modal-title fs-5">Runde 1 von 2</h1>
                        </div>
                        <div className="modal-body py-0">
                            <p>Wo ist dieser Ort?</p>

                            {/*<img src={imgs} alt={'logo'}/>*/}
                        </div>
                        <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                            <button type="button" className="btn btn-lg btn-primary">BESTÄTIGEN</button>
                            <ButtonAddScore>
                                
                            </ButtonAddScore>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;