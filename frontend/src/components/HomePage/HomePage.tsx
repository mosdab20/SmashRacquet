// import React from 'react';
import './HomePage.css';
import {useEffect, useState} from "react";
//import {User} from "../../interface/User.tsx";

import {Tournament} from "../../interface/Tournament.tsx";
import {TournamentService} from "../../Service/TournamentService.ts";

const HomePage = () => {
    //const [users, setUsers] = useState<User[]>([]);
    //const [matches , setMatches] = useState<Match[]>([]);
    const [tournaments , setTournaments] = useState<Tournament[]>([]);

    useEffect(() => {
        TournamentService.getTournaments().then(setTournaments)
    },[])
    // const navigate = useNavigate();
    
    
    return (

        <div>
            {tournaments.map((tou: Tournament) => (
                <div>{tou.description}</div>
            ))}
        </div>
    );
};

export default HomePage;
