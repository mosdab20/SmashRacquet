// import React from 'react';
import './HomePage.css';
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    
    const navigate = useNavigate();
    
    
    return (
        <div>
            <nav className="navbar">
                <div className="left-section">
                    <h1>htlblakaindorf Fußballturnier</h1>
                </div>
                <div className="center-section">
                    <a onClick={() => navigate("/HomePage")} className="nav-link">Startseite</a>
                    <a onClick={() => navigate("/Turniere")} className="nav-link">Turniere</a>
                    <a onClick={() => navigate("/Tabelle")} className="nav-link">Tabelle</a>
                </div>
                <div className="right-section">
                    <button className="logout-button">Logout</button>
                </div>
            </nav>
    
            {/* Rest of your homepage content */}
        </div>
    );
};

export default HomePage;
