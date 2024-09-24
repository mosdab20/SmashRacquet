import express, { Request, Response} from  "express";
import {mockdata} from "../mockdata/mockdata";

let router = express.Router();

router.get('/', (req: Request, res:Response)=> {
    res.send(mockdata);
});

module .exports = router;