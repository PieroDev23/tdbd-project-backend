import { AppDataSource } from "../../database/data-source";
import { Stadistic } from "../../entities";




export class StatsService {

    async getStats(playerId: string, matchId: string) {
        try {
            const repo = AppDataSource.getRepository(Stadistic);
            return await repo.findOneBy({ player: { playerId }, match: { matchId } });

        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }

            return null;
        }
    }
}