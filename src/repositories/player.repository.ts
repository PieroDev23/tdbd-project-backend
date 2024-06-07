import { FindOneOptions, FindOptionsWhere, Repository } from "typeorm";
import { AppDataSource } from "../database/data-source";
import { Match, Player, Team } from "../entities";
import { BaseRepository } from "../models";
import { TeamPlayer } from "../entities/teamPlayers.entity";



export class PlayerRepository extends BaseRepository<Player> {

    protected _repo: Repository<Player> = AppDataSource.getRepository(Player);

    async findOneBy(args: FindOptionsWhere<Player>): Promise<Player | null> {
        try {
            return await this._repo.findOneBy({ ...args });
        } catch (error) {
            return null;
        }
    }


    async getMatchesWithTeamsAndAgents(playerId: string) {
        const matchRepository = AppDataSource.getRepository(Match);

        const matches = await matchRepository.createQueryBuilder('match')
            .leftJoinAndSelect('match.map', 'map')
            .leftJoinAndSelect('match.teams', 'teams')
            .leftJoinAndSelect('teams.teamPlayers', 'teamPlayer')
            .leftJoinAndSelect('teamPlayer.player', 'player')
            .leftJoinAndSelect('teamPlayer.agent', 'agent')
            .andWhere((qb) => {
                const subQuery = qb.subQuery()
                    .select('1')
                    .from(Team, 't')
                    .leftJoin('t.teamPlayers', 'tp')
                    .where('tp.player = :playerId')
                    .andWhere('t.match = match.matchId')
                    .getQuery();

                return `EXISTS(${subQuery})`;
            })
            .setParameter('playerId', playerId)
            .getMany();

        return matches;
    }



    create(args: Partial<Player>): Promise<Player> {
        throw new Error("Method not implemented.");
    }
    save(args: Player): Promise<Player> {
        throw new Error("Method not implemented.");
    }

}