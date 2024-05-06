import { ObjectLiteral, Repository } from "typeorm";


export abstract class BaseRepository<T extends ObjectLiteral> {

    protected abstract _repo: Repository<T>;
    abstract findOneBy(args: Partial<T>): Promise<T | null>;
    abstract create(args: Partial<T>): Promise<T>;
    abstract save(args: T): Promise<T>
}