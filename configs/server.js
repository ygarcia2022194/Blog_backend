'use strict'

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { dbConnection } from './mongo.js';
import postingRoutes from '../src/posting/posting.routes.js'
import { publicationsPost } from '../src/posting/posting.controller.js'

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.publicationPath = '/blog/v1'
        this.middlewares(); 
        this.conectarDB();
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
        await publicationsPost();
    }

    middlewares(){
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
    }

    routes(){
        this.app.use(this.publicationPath, postingRoutes);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Server running on port ', this.port);
        });
    }
}

export default Server;