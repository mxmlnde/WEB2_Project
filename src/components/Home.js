import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ScoreList from "./ScoreList";
import SetCurrentPLayer from "./SetCurrentPLayer";

const Home = () => {
    return (
        <div className="container-sm">
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card" style={{margin: '25px'}}>
                        <div className="card-body">
                            <h5 className="card-title">Neues Spiel</h5>
                            <SetCurrentPLayer></SetCurrentPLayer>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card" style={{margin: '25px'}}>
                        <div className="card-body">
                            <h5 className="card-title">Highscore</h5>
                            <ScoreList></ScoreList>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;