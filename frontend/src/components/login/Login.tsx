import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Zum Navigieren zur Startseite
import '../login/Login.css'; // Pfad zu deiner CSS-Datei anpassen
import backgroundImage from '../../assets/image.png'; // Hintergrundbild importieren
import logoImage from '../../assets/HTL.png'; // Logo importieren

const Login: React.FC = () => {
    const [username, setUsername] = useState(''); // Zustand für den Benutzernamen
    const [password, setPassword] = useState(''); // Zustand für das Passwort
    const navigate = useNavigate(); // Hook zum Navigieren

    // Funktion zur Verarbeitung des Formulars
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Verhindert das Neuladen der Seite

        // Überprüfen, ob Benutzername und Passwort "root" sind
        if (username === 'root' && password === 'root') {
            navigate('/HomePage'); // Navigiere zur Startseite
        } else {
            alert('Ungültiger Benutzername oder Passwort');
        }
    };

    return (
        <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="login-card">
                <img
                    src={logoImage} // Verwende die importierte Logo-Variable
                    alt="Logo"
                    className="login-logo"
                />
                <h1 className="hello">Hallo Sportsfreund:In!</h1>
                <form className="login-form" onSubmit={handleSubmit}> {/* Formular-Submit */}
                    <input
                        type="text"
                        placeholder="Benutzername"
                        className="login-input"
                        value={username} // Bindung an den Zustand
                        onChange={(e) => setUsername(e.target.value)} // Zustand aktualisieren
                    />
                    <input
                        type="password"
                        placeholder="Passwort"
                        className="login-input"
                        value={password} // Bindung an den Zustand
                        onChange={(e) => setPassword(e.target.value)} // Zustand aktualisieren
                    />
                    <button type="submit" className="login-button">
                        LOS GEHT'S!
                    </button>
                </form>
                <a href="#" className="forgot-password">
                    Passwort vergessen
                </a>
            </div>
        </div>
    );
};

export default Login;
