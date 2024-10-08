// import React from 'react';
import './HomePage.css';
import {useEffect, useState} from "react";
import {User} from "../../interface/User.tsx";
import {UserService} from "../../Service/UserService.ts";

const HomePage = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        UserService.getUsers().then(setUsers)
    },[])
    // const navigate = useNavigate();
    
    
    return (

        <div>
            {users.map((user: User) => (
                <div>{user.name}</div>
            ))}
        </div>
    );
};

export default HomePage;
