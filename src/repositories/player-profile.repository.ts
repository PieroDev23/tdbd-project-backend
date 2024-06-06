import { Repository, FindOptionsWhere, FindOneOptions } from "typeorm";
import { PlayerProfile } from "../entities";
import { BaseRepository } from "../models";
import { AppDataSource } from "../database/data-source";




export class PlayerProfileRepository extends BaseRepository<PlayerProfile> {

    protected _repo: Repository<PlayerProfile> = AppDataSource.getTreeRepository(PlayerProfile);

    async findOneBy(args: FindOptionsWhere<PlayerProfile>): Promise<PlayerProfile | null> {
        try {
            return await this._repo.findOneBy({ ...args });
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }

            return null;
        }
    }


    async findOne(args: FindOneOptions<PlayerProfile>) {
        try {
            return await this._repo.findOne({ ...args })
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }

            return null;
        }
    }

    create(args: Partial<PlayerProfile>): Promise<PlayerProfile> {
        throw new Error("Method not implemented.");
    }

    save(args: PlayerProfile): Promise<PlayerProfile> {
        throw new Error("Method not implemented.");
    }

}