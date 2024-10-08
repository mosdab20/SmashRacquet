import express, { Request, Response} from  "express";
import {mockUsers} from "../mockdata/mockUsers";
import {UserModel} from "../src/db/UserModel";

let router = express.Router();

router.get('/', (req: Request, res:Response)=> {
    UserModel.find().then(users => res.send(users));
});

module .exports = router;