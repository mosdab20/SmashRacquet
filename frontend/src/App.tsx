// App.tsx

// import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Layout from "./components/Layout/Layout.tsx"; // Importiere die Layout-Komponente
import Login from "./components/login/Login.tsx";
import HomePage from "./components/HomePage/HomePage.tsx";
import Turniere from "./components/Turniere/Turniere.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Login />} />
                    <Route path="HomePage" element={<HomePage />} />
                    <Route path="Tournaments" element={<Turniere />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
