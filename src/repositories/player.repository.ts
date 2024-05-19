import { Repository, FindOptionsWhere, DataSource } from "typeorm";
import { Player } from "../entities";
import { BaseRepository } from "../models";
import { AppDataSource } from "../database/data-source";



export class PlayerRepository extends BaseRepository<Player> {

    protected _repo: Repository<Player> = AppDataSource.getRepository(Player);

    async findOneBy(args: FindOptionsWhere<Player>): Promise<Player | null> {
        try {
            return await this._repo.findOneBy({ ...args });
        } catch (error) {
            return null;
        }
    }

    create(args: Partial<Player>): Promise<Player> {
        throw new Error("Method not implemented.");
    }
    save(args: Player): Promise<Player> {
        throw new Error("Method not implemented.");
    }

}