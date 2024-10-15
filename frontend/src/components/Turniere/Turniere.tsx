import { useState } from 'react';
import { Tournament } from "../../interface/Tournament.tsx";
import './Turniere.css';  // assuming external CSS for styling

const Turniere = () => {
    const [turniere] = useState<Tournament[]>([]);

    return (
        <div id="tournament-form-container">

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
