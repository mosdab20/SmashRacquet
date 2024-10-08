import axios from "axios";
import {Tournament} from "../interface/Tournament.tsx";

export class TournamentService {
    private static readonly BASE_URL:string = "http://localhost:3005";


    public static async getTournaments(): Promise<Tournament[]> {
        const response = await axios.get<Tournament[]>(this.BASE_URL+"/tournaments");
        console.log(response);
        return response.data;
    }
}