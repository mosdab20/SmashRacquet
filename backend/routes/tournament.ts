import express, { Request, Response} from  "express";
import {mockUsers} from "../mockdata/mockUsers";
import {UserModel} from "../src/db/UserModel";
import {TournamentModel} from "../src/db/TournamentModel";


let router = express.Router();

router.get('/', (req: Request, res:Response)=> {
    TournamentModel.find().then(tournaments => res.send(tournaments));
});


module.exports = router;