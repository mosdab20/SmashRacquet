import express, { Request, Response} from  "express";
import {mockUsers} from "../mockdata/mockUsers";
import {UserModel} from "../src/db/UserModel";
import {TournamentModel} from "../src/db/TournamentModel";


let router = express.Router();

router.get('/', (req: Request, res:Response)=> {
    console.log("im get");
    TournamentModel.find().then(tournaments => res.send(tournaments));
});


router.get('/tByLetter', (req: Request, res: Response) => {
    const letter = req.query.letter?.toString();
    console.log(letter);

    if (!letter || letter.length !== 1) {
        return res.status(400).send("Bitte gib einen einzigen Buchstaben als 'letter' an.");
    }

    TournamentModel.find({ name: { $regex: new RegExp(`^${letter}`, "i") } })
        .then(tournaments => {
            res.send(tournaments);})


});


router.get('/tByPrize/', (req: Request, res: Response) => {
    const prize = Number(req.query.prize);

    if (isNaN(prize)) {
        return res.status(400).send("Bitte gib eine gültige Zahl als 'prize' an.");
    }

    TournamentModel.find({ prize: prize })
        .then(tournaments => {
            if (tournaments.length === 0) {
                return res.status(404).send("Keine Turniere mit diesem Prize gefunden.");
            }
            res.send(tournaments);
        })
        .catch(err => res.status(500).send("Fehler beim Abrufen der Turniere: " + err.message));
});

router.get('/prize-range', (req: Request, res: Response) => {
    const minPrize = Number(req.query.minPrize);
    const maxPrize = Number(req.query.maxPrize);


    if (isNaN(minPrize) || isNaN(maxPrize)) {
        return res.status(400).send("Bitte gib gültige Zahlen als 'minPrize' und 'maxPrize' an.");
    }


    TournamentModel.find({ prize: { $gte: minPrize, $lte: maxPrize } })
        .then(tournaments => {
            res.send(tournaments);
        })
        .catch(err => res.status(500).send("Fehler beim Abrufen der Turniere: " + err.message));
});



module.exports = router;