import 'reflect-metadata';
import 'dotenv/config';

import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { APIRoutes } from './routes/api.routes';
import { AppDataSource } from './database/data-source';

export class ValorantTrackerApp {

    private _app: Express;
    private _port: string | number
    private _apiVersion = 'v1';

    constructor() {
        const { APP_EXPRESS_PORT } = process.env;

        this._app = express();
        this._port = APP_EXPRESS_PORT || 5001;

        this.middlewares();
        this.routes();
        this.dbConnection();
    }

    routes(): void {
        const routes = APIRoutes.routes();
        for (const { name, router } of routes) {
            this._app.use(`api/${this._apiVersion}/${name}`, router!);
        }
    }

    middlewares() {
        this._app.use(cors());
        this._app.use(morgan('dev'));
        this._app.use(express.json());
        this._app.use(express.static('/public'));
    }

    async dbConnection() {
        try {
            await AppDataSource.initialize();
            console.log(`✅ Succesfully connected to the database`);
        } catch (error) {
            if (error instanceof Error) {
                console.log(`[Error while connecting to the database ${error.name}]: ${error.message}`);
            }
        }
    }

    listen() {
        this._app.listen(this._port, () => {
            console.log(`🚀 Express App running on port ${this._port}`);
        });
    }
}