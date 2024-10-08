import { useState } from 'react';
import { Tournament } from "../../interface/Tournament.tsx";
import './Turniere.css';  // assuming external CSS for styling
import { useNavigate } from 'react-router-dom'; // Importiere useNavigate für die Navigation

const Turniere = () => {
    const [turniere, setTurniere] = useState<Tournament[]>([]);
    const [tournamentName, setTournamentName] = useState('');
    const [tournamentDescription, setTournamentDescription] = useState('');
    const [tournamentPrize, setTournamentPrize] = useState<number>(0);
    const navigate = useNavigate(); // Hook für die Navigation

    const addTournament = () => {
        const newTournament: Tournament = {
            id: turniere.length + 1,
            name: tournamentName,
            description: tournamentDescription,
            users: [],
            matches: [],
            prize: tournamentPrize,
        };

        setTurniere([...turniere, newTournament]);
        setTournamentName('');
        setTournamentDescription('');
        setTournamentPrize(0);
    };

    const handleLogout = () => {
        // Hier kannst du den Logout-Logik implementieren, z.B. Token löschen
        navigate('/Login'); // Navigiere zur Login-Seite nach dem Logout
    };

    return (
        <div id="tournament-form-container">
            <h1 id="tournament-title">Turniere erstellen</h1>
            <button onClick={handleLogout} id="logout-button">Logout</button> {/* Logout-Button hinzufügen */}
            <form className="tournament-form">
                <div className="form-group">
                    <label htmlFor="tournament-name-input">Turniername</label>
                    <input
                        type="text"
                        id="tournament-name-input"
                        placeholder="Turniername"
                        value={tournamentName}
                        onChange={(e) => setTournamentName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tournament-description-input">Beschreibung</label>
                    <input
                        type="text"
                        id="tournament-description-input"
                        placeholder="Beschreibung"
                        value={tournamentDescription}
                        onChange={(e) => setTournamentDescription(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tournament-prize-input">Preisgeld</label>
                    <input
                        type="number"
                        id="tournament-prize-input"
                        placeholder="Preisgeld"
                        value={tournamentPrize}
                        onChange={(e) => setTournamentPrize(Number(e.target.value))}
                    />
                </div>
                <button type="button" id="add-tournament-button" onClick={addTournament}>
                    Turnier hinzufügen
                </button>
            </form>

            <h2 id="tournament-list-title">Liste der Turniere</h2>
            <ul id="tournament-list">
                {turniere.map(tournament => (
                    <li id="tournament-list-item" key={tournament.id}>
                        <strong>{tournament.name}</strong>: {tournament.description} - Preis: {tournament.prize}€
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Turniere;
