import { Request, Response, NextFunction } from 'express';
import * as db from "../database/dbquery";
export class  User {
    
       getAllUsers = (request: Request, response: Response, next: NextFunction) => {
        return db.query('SELECT id,name,email FROM users').then((rows) => {
         return   response.status(200).json(rows);
        });
        
      };
}