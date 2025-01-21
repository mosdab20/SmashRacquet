import mongoose, { Schema } from "mongoose";
import {UserModel, UserSchema} from "./UserModel";
import {MatchModel, MatchSchema} from "./MatchModel";
import {PlayerModel} from "./PlayerModel";

 export const TournamentSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    prize: { type: Number, required: true },
    users: {type: [UserSchema], required: true},
    matches: {type: [MatchSchema], required: true}
});

export const TournamentModel = mongoose.model('TournamentModel', TournamentSchema);
