import { Repository, FindOptionsWhere } from "typeorm";
import { BlackList } from "../entities";
import { BaseRepository } from "../models";
import { AppDataSource } from "../database/data-source";




export class BlackListRepository extends BaseRepository<BlackList> {
    protected _repo: Repository<BlackList> = AppDataSource.getRepository(BlackList);

    async findOneBy(args: FindOptionsWhere<BlackList>): Promise<BlackList | null> {
        try {

            return await this._repo.findOneBy({ ...args });

        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }

            return null;
        }
    }

    async findBan(playerId: string): Promise<BlackList | null> {
        try {

            return await this._repo.findOne({ where: { player: { playerId } }, relations: ['player'] });
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }

            return null;
        }
    }

    create(args: Partial<BlackList>): Promise<BlackList> {
        throw new Error("Method not implemented.");
    }
    save(args: BlackList): Promise<BlackList> {
        throw new Error("Method not implemented.");
    }

}