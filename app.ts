

import express, { Application } from 'express'
import morgan from 'morgan'
import apiRouter from "./routes/api";
import router from "./routes/router";
import bodyParser from 'body-parser';

require('dotenv').config();



export class App {
  app: Application;
  constructor(
    private port?: number | string
  ) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  private settings() {
    this.app.set('port', this.port || process.env.PORT || 3000);
  }

  private middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
  }

  private routes() {
    this.app.use("/api/", apiRouter);
    this.app.use(express.json());
    this.app.use(bodyParser.json());
  }

  async listen(): Promise<void> {
    await this.app.listen(this.app.get('port'));
    console.log('Server on port', this.app.get('port'));
  }
}