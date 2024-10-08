import { useNavigate } from "react-router-dom";
import { useTennisContext } from "../../context/context.tsx";

const Header = () => {
    const navigate = useNavigate();
    const TennisContext = useTennisContext(); // Verwende den TennisContext für Authentifizierungsstatus

    const handleLogout = () => {
        // Setze den Authentifizierungsstatus auf false (Logout)
        TennisContext.setIsAuthenticated(false);
        // Navigiere zur Login-Seite
        navigate("");
    };

    return (
        <div>
            <nav className="navbar">
                <div className="left-section">
                    <h1>Tennis-Racquet</h1>
                </div>
                <div className="center-section">
                    <a style={{ userSelect: "none" }} onClick={() => navigate("/HomePage")} className="nav-link">Startseite</a>
                    <a style={{ userSelect: "none" }} onClick={() => navigate("/Tournaments")} className="nav-link">Alle Turniere</a>
                </div>
                <div className="right-section">
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                </div>
            </nav>

            {/* Rest of your homepage content */}
        </div>
    );
};

export default Header;
