import { useEffect, useState } from "react";
import { Tournament } from "../../interface/Tournament";
import { TournamentService } from "../../Service/TournamentService";
import './Turniere.css';

const Turniere = () => {
    const [tournaments, setTournaments] = useState<Tournament[]>([]);
    const [filteredTournaments, setFilteredTournaments] = useState<Tournament[]>([]);
    const [minPrize, setMinPrize] = useState<number | undefined>(undefined);
    const [maxPrize, setMaxPrize] = useState<number | undefined>(undefined);
    const [sortCriteria, setSortCriteria] = useState<string>("name");
    const [sortOrder, setSortOrder] = useState<boolean>(true); // true for ascending, false for descending

    useEffect(() => {
        TournamentService.getTournaments().then(data => {
            setTournaments(data);
            setFilteredTournaments(data);
        });
    }, []);

    // Filter tournaments by prize range whenever minPrize or maxPrize changes
    useEffect(() => {
        let result = tournaments;

        if (minPrize !== undefined && maxPrize !== undefined) {
            result = tournaments.filter(
                tournament => tournament.prize >= minPrize && tournament.prize <= maxPrize
            );
        }

        setFilteredTournaments(result);
    }, [minPrize, maxPrize, tournaments]);

    // Sort tournaments based on selected criteria and order
    const handleSortChange = (criteria: string) => {
        setSortCriteria(criteria);
        sortTournaments(criteria, sortOrder);
    };

    const handleSortOrderToggle = () => {
        const newOrder = !sortOrder;
        setSortOrder(newOrder);
        sortTournaments(sortCriteria, newOrder);
    };

    const sortTournaments = (criteria: string, ascending: boolean) => {
        const sortedTournaments = [...filteredTournaments].sort((a, b) => {
            let comparison = 0;
            if (criteria === "name") {
                comparison = a.name.localeCompare(b.name);
            } else if (criteria === "prize") {
                comparison = a.prize - b.prize;
            }
            return ascending ? comparison : -comparison;
        });

        setFilteredTournaments(sortedTournaments);
    };

    return (
        <div id="tournament-form-container">
            <h2 id="tournament-list-title">Liste der Turniere</h2>

            <div className="filter-sort-controls">
                <div>
                    <label>Min Preis:</label>
                    <input
                        type="number"
                        value={minPrize || ""}
                        onChange={(e) => setMinPrize(Number(e.target.value))}
                    />
                </div>
                <div>
                    <label>Max Preis:</label>
                    <input
                        type="number"
                        value={maxPrize || ""}
                        onChange={(e) => setMaxPrize(Number(e.target.value))}
                    />
                </div>

                <div>
                    <label>Sortieren nach:</label>
                    <select
                        value={sortCriteria}
                        onChange={(e) => handleSortChange(e.target.value)}
                    >
                        <option value="name">Name</option>
                        <option value="prize">Preis</option>
                    </select>
                </div>

                <div>
                    <label>Reihenfolge:</label>
                    <button onClick={handleSortOrderToggle}>
                        {sortOrder ? "Aufsteigend" : "Absteigend"}
                    </button>
                </div>
            </div>

            <ul id="tournament-list">
                {filteredTournaments.map((tournament) => (
                    <li id="tournament-list-item" key={tournament.id}>
                        <strong>{tournament.name}</strong>: {tournament.description} - Preis: {tournament.prize}€
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Turniere;
