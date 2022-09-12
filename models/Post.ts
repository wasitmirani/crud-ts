import { Request, Response, NextFunction } from 'express';
import  * as db from "../database/dbquery";


export class Post {

    posts=async (request:Request,response:Response,next:NextFunction)=>{
        return await db.query("select * from posts").then((rows)=>{
            return rows;
        });
    }
    store=async (request:Request,response:Response,next:NextFunction)=>{

        let body=request.body;
        
        return await db.query(`insert into posts('id','title','body') values(?,${body.title},${body.body})`).then((row)=>{
            return row;
        });
    }

}
