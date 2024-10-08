import {Match} from '../src/models/Match'
import {Tournament} from "../src/models/Tournament";
import {User} from "../src/models/User";

// Mock Matches
export const mockMatches: Match[] = [
    {
        id: 1,
        player: "mosdab20",
        player2: "bogbeb19",
        score1: 3,
        score2: 2,
        date: "2023-09-15",
        finished: true
    },
    {
        id: 2,
        player: "jakleb20",
        player2: "makac30",
        score1: 1,
        score2: 4,
        date: "2023-09-16",
        finished: true
    },
    {
        id: 3,
        player: "mosdab20",
        player2: "user9",
        score1: 2,
        score2: 2,
        date: "2023-09-17",
        finished: false
    },
    {
        id: 4,
        player: "user7",
        player2: "user10",
        score1: 0,
        score2: 5,
        date: "2023-09-18",
        finished: true
    }
];

// Mock Users
export const mockUsers: User[] = [
    {
        id: 1,
        username: "mosdab20",
        password: "20",
        age: 19,
        name: "David Mosi",
        role: "admin",
        tournaments: [],
        matches: []
    },
    {
        id: 2,
        username: "bogbeb19",
        password: "19",
        age: 24,
        name: "Benjamin Bogdan",
        role: "spieler",
        tournaments: [],
        matches: []
    },
    {
        id: 3,
        username: "jakleb20",
        password: "20",
        age: 22,
        name: "Leon Edlinger",
        role: "halbadmin",
        tournaments: [],
        matches: []
    }
];

// Mock Tournaments
export const mockTournaments: Tournament[] = [
    {
        id: 1,
        name: "Champion's League",
        description: "Annual championship tournament",
        users: [],
        matches: [],
        prize: 10000
    },
    {
        id: 2,
        name: "Beginner's Cup",
        description: "Tournament for beginners",
        users: [],
        matches: [],
        prize: 5000
    }
];


