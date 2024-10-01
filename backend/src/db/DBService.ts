import {UserModel} from "./UserModel";
import {mockdata} from "../../mockdata/mockdata";


export const initDB = async () => {
    try{

        await UserModel.deleteMany();
        await UserModel.insertMany(mockdata);

        console.log("### inserted data")
    } catch (error){
        console.log("### error on inserting: ", error);
    }

}