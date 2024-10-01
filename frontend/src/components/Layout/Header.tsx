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
                    <a style={{userSelect: "none"}} onClick={() => navigate("/HomePage")} className="nav-link">Startseite</a>
                    <a style={{userSelect: "none"}} onClick={() => navigate("/Tournaments")} className="nav-link">Alle Turniere</a>
                </div>
                
            </nav>

            {/* Rest of your homepage content */}
        </div>
    );
};

export default Header;