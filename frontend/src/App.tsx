import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import './App.css';
import Layout from "./components/Layout/Layout.tsx";
import Login from "./components/login/Login.tsx";
import HomePage from "./components/HomePage/HomePage.tsx";
import Turniere from "./components/Turniere/Turniere.tsx";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Zustand für Authentifizierung

    const handleLogin = () => {
        setIsAuthenticated(true); // Authentifizierung erfolgreich
    };

    return (
        <BrowserRouter>
            <Routes>
                {/* Zeige die Login-Seite, wenn der Benutzer nicht authentifiziert ist */}
                <Route path="/" element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/HomePage" />} />

                {/* Das Layout wird nur angezeigt, wenn der Benutzer authentifiziert ist */}
                <Route path="/" element={isAuthenticated ? <Layout /> : <Navigate to="/" />}>
                    <Route path="HomePage" element={<HomePage />} />
                    <Route path="Tournaments" element={<Turniere />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
