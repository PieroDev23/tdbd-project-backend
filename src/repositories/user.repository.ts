import { Repository, FindOptionsWhere } from "typeorm";
import { AppDataSource } from "../database/data-source";
import { User } from "../entities";
import { BaseRepository } from "../models";


export class UserRepository extends BaseRepository<User> {

    protected _repo: Repository<User> = AppDataSource.getRepository(User);

    async findOneBy(args: FindOptionsWhere<User>): Promise<User | null> {
        const user = await this._repo.findOneBy({ ...args });
        return user;
    }

    async create(args: Partial<User>): Promise<User> {
        const user = this._repo.create(args);
        user.password = user.hashPassword();
        return user;
    }

    async save(args: User): Promise<User> {
        return await this._repo.save(args);
    }
}
