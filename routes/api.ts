import express, { Request, Response, NextFunction } from 'express';
import * as db from "../database/dbquery";
import  { getUsers} from "../controllers/user.controller";
import PostController from "../controllers/post.controller";
const post_controller = new PostController();

let route = express.Router();

// mount express paths, any addition middleware can be added as well.
// ex. router.use('/pathway', middleware_function, sub-router);


// Home page route.
route.get('/', function (req, res) {
    res.send('Wiki home page');
  })
  
  // About page route.
  route.get('/about', function (req, res) {
    res.send('About this wiki');
  })

route.get('/users',getUsers);
route.get('/posts',post_controller.getPosts);
route.post('/post',post_controller.storePost);
// Export the router
export = route;


