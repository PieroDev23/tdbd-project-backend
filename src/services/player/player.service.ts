import { PlayerRepository } from "../../repositories";




export class PlayerService {
    async getProfile(nickname: string) {
        const playerRepo = new PlayerRepository();
        return await playerRepo.findOneBy({ nickname });
    }
}