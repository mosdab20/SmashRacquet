import axios from "axios";
import {Tournament} from "../interface/Tournament.tsx";
import {BASE_URL} from "../serverconfig.ts";

export class TournamentService {
    private static readonly BASE_URL:string = BASE_URL;


    public static async getTournaments(): Promise<Tournament[]> {
        try {
            const response = await axios.get<Tournament[]>(this.BASE_URL+"/Tournaments");
            console.log(response);
            return response.data;
        } catch (error) {
            console.error(error);
            return [];
        }
    }


    // Get tournaments by starting letter
    public static async getTournamentsByLetter(letter: string): Promise<Tournament[]> {
        const response = await axios.get<Tournament[]>(`${this.BASE_URL}/Tournaments/tByLetter`, {
            params: { letter }
        });
        console.log(response);
        return response.data;
    }

    // Get tournaments by prize
    public static async getTournamentsByPrize(prize: number): Promise<Tournament[]> {
        const response = await axios.get<Tournament[]>(`${this.BASE_URL}/Tournaments/tByPrize`, {
            params: { prize }
        });
        console.log(response);
        return response.data;
    }

    // Get tournaments within a prize range
    public static async getTournamentsByPrizeRange(minPrize: number, maxPrize: number): Promise<Tournament[]> {
        const response = await axios.get<Tournament[]>(`${this.BASE_URL}/Tournaments/prize-range`, {
            params: { minPrize, maxPrize }
        });
        console.log(response);
        return response.data;
    }


}