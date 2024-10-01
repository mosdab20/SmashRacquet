// import React from 'react';

import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            <nav className="navbar">
                <div className="left-section">
                    <h1>Tennis-Racquet</h1>
                </div>
                <div className="center-section">
                    <a onClick={() => navigate("/HomePage")} className="nav-link">Startseite</a>
                    <a onClick={() => navigate("/Tournaments")} className="nav-link">Turniere</a>
                </div>
                <div className="right-section">
                    <button className="logout-button">Logout</button>
                </div>
            </nav>

            {/* Rest of your homepage content */}
        </div>
    );
};

export default Header;