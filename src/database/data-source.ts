import 'dotenv/config';
import { DataSource } from 'typeorm';

const { DB_PORT, DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

export const AppDataSource = new DataSource({
    type: 'mysql',
    port: Number(DB_PORT),
    host: DB_HOST,
    username: DB_USER,
    database: DB_NAME,
    password: DB_PASSWORD,
    migrations: ['./src/migrations/*{.ts,.js}'],
    entities: ['./src/entities/*.entity{.ts,.js}'],
    migrationsRun: true,
    synchronize: true,
});