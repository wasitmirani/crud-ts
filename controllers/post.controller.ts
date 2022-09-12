
import { Request, Response, NextFunction } from 'express';
import {Post} from "../models/Post";
const post = new Post();

class PostController{

  getPosts=async (request:Request,response: Response,next:NextFunction)=>{
       let posts= await post.posts(request,response,next);
       if(posts){
        return response.status(200).json({'posts':posts});
       }
       else {
        return response.status(200).json([{'posts':[]}]);
       }
    }

  storePost= async (request:Request,response: Response,next:NextFunction)=>{
   return await post.store(request,response,next); 
  }

}



export default PostController;