import { Repository, FindOptionsWhere } from "typeorm";
import { Agent } from "../entities";
import { BaseRepository } from "../models";
import { AppDataSource } from "../database/data-source";



export class AgentsRepository extends BaseRepository<Agent> {

    protected _repo: Repository<Agent> = AppDataSource.getRepository(Agent);

    async findAgents() {

        try {
            const agents = await this._repo.find();
            return agents;

        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }

            return []
        }

    }

    findOneBy(args: FindOptionsWhere<Agent>): Promise<Agent | null> {
        throw new Error("Method not implemented.");
    }
    create(args: Partial<Agent>): Promise<Agent> {
        throw new Error("Method not implemented.");
    }
    save(args: Agent): Promise<Agent> {
        throw new Error("Method not implemented.");
    }

}