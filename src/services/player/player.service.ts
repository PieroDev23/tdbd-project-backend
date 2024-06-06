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


}