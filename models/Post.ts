import { Request, Response, NextFunction } from 'express';
import  * as db from "../database/dbquery";


export class Post {

    posts=async (request:Request,response:Response,next:NextFunction)=>{
        return await db.query("select * from posts").then((rows)=>{
            return rows;
        });
    }

}
