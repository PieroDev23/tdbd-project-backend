import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

const { DB_PORT, DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;


const options: DataSourceOptions & SeederOptions = {
    type: 'mysql',
    port: Number(DB_PORT),
    host: DB_HOST,
    username: DB_USER,
    database: DB_NAME,
    password: DB_PASSWORD,
    migrationsRun: true,
    synchronize: true,
    migrations: ['./src/database/migrations/*{.ts,.js}'],
    entities: ['./src/database/entities/*.entity{.ts,.js}'],
    seeds: ['./src/database/seeders/*.seeder{.ts,.js}'],
    factories: ['/src/database/factories/*.factory{.ts,.js}']
}


export const AppDataSource = new DataSource(options);