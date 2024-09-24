import {User} from "./User";

export interface Tournament {
    id: number,

    name: string,
    description: string,
    users: User[],
    //matches: Match [],
    prize: number
}