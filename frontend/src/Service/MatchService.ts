import axios from "axios";
import {Match} from "../interface/Match.tsx";
import {BASE_URL} from "../serverconfig.ts";



export class MatchService {
    
    private static readonly BASE_URL:string = BASE_URL;

    public static async getMatches(): Promise<Match[]> {
        console.log(BASE_URL)
        const response = await axios.get<Match[]>(this.BASE_URL+"/matches");
        console.log(response);
        return response.data;
    }
}