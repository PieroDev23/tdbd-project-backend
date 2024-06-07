import { Repository, FindOptionsWhere } from "typeorm";
import { Weapon } from "../entities";
import { BaseRepository } from "../models";
import { AppDataSource } from "../database/data-source";





export class WeaponsRepository extends BaseRepository<Weapon> {
    protected _repo: Repository<Weapon> = AppDataSource.getRepository(Weapon);




    async getAll(): Promise<Weapon[]> {
        try {

            return await this._repo.find();

        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }

            return []
        }
    }


    findOneBy(args: FindOptionsWhere<Weapon>): Promise<Weapon | null> {
        throw new Error("Method not implemented.");
    }
    create(args: Partial<Weapon>): Promise<Weapon> {
        throw new Error("Method not implemented.");
    }
    save(args: Weapon): Promise<Weapon> {
        throw new Error("Method not implemented.");
    }

}