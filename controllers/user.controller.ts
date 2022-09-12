import { Request, Response, NextFunction } from 'express';
import {User} from "../models/User";
const user = new User();
export async function getUsers (request: Request, response: Response, next: NextFunction) : Promise<Response | void>  {
    try {
        return user.getAllUsers(request, response, next);
    }
    catch (e) {
        console.log(e)
    }
}