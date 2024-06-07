import { PlayerRepository } from "../../repositories";
import { PlayerProfileRepository } from "../../repositories/player-profile.repository";




export class PlayerService {

    async getPlayerByNickname(nickname: string) {
        const playerRepo = new PlayerRepository();
        return await playerRepo.findOneBy({ nickname });
    }

    async getPlayerProfile(playerId: string) {
        const playerProfileRepo = new PlayerProfileRepository();
        const profile = await playerProfileRepo.findOneProfileByPlayerId(playerId);
        return profile;
    }


    async getPlayerMatchesHistory(playerId: string) {
        const playerRepo = new PlayerRepository();
        const history = await playerRepo.findPlayerMatches(playerId);
        return history;
    }
}