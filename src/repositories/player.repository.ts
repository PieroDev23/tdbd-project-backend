import { FindOneOptions, FindOptionsWhere, Repository } from "typeorm";
import { AppDataSource } from "../database/data-source";
import { Player } from "../entities";
import { BaseRepository } from "../models";



export class PlayerRepository extends BaseRepository<Player> {

    protected _repo: Repository<Player> = AppDataSource.getRepository(Player);

    async findOneBy(args: FindOptionsWhere<Player>): Promise<Player | null> {
        try {
            return await this._repo.findOneBy({ ...args });
        } catch (error) {
            return null;
        }
    }


    async findPlayerMatches(playerId: string): Promise<Player | null> {
        try {
            return await this._repo.findOne({ where: { playerId }, relations: ['playersByTeam', 'teamPlayerplayersByTeam.team', 'teamPlayerplayersByTeam.team.match', 'teamPlayerplayersByTeam.agent'] })
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }

            return null
        }
    }

    create(args: Partial<Player>): Promise<Player> {
        throw new Error("Method not implemented.");
    }
    save(args: Player): Promise<Player> {
        throw new Error("Method not implemented.");
    }

}