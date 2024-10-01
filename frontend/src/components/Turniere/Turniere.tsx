// Turniere.tsx

import  { useState } from 'react';
import {Tournament} from "../../interface/Tournament.tsx";

const Turniere = () => {
    const [turniere, setTurniere] = useState<Tournament[]>([]);
    const [tournamentName, setTournamentName] = useState('');
    const [tournamentDescription, setTournamentDescription] = useState('');
    const [tournamentPrize, setTournamentPrize] = useState<number>(0);

    const addTournament = () => {
        const newTournament: Tournament = {
            id: turniere.length + 1, // Eine einfache ID-Generierung
            name: tournamentName,
            description: tournamentDescription,
            users: [], // Hier könnte eine Liste von Benutzern hinzugefügt werden
            matches: [], // Hier könnte eine Liste von Matches hinzugefügt werden
            prize: tournamentPrize,
        };

        setTurniere([...turniere, newTournament]);
        // Felder zurücksetzen
        setTournamentName('');
        setTournamentDescription('');
        setTournamentPrize(0);
    };

    return (
        <div style={{ paddingTop: '70px' }}>
            <h1>Turniere erstellen</h1>
            <input
                type="text"
                placeholder="Turniername"
                value={tournamentName}
                onChange={(e) => setTournamentName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Beschreibung"
                value={tournamentDescription}
                onChange={(e) => setTournamentDescription(e.target.value)}
            />
            <input
                type="number"
                placeholder="Preisgeld"
                value={tournamentPrize}
                onChange={(e) => setTournamentPrize(Number(e.target.value))}
            />
            <button onClick={addTournament} className="add-button">Turnier hinzufügen</button>

            <h2>Liste der Turniere</h2>
            <ul>
                {turniere.map(tournament => (
                    <li key={tournament.id}>
                        <strong>{tournament.name}</strong>: {tournament.description} - Preis: {tournament.prize}€
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Turniere;
