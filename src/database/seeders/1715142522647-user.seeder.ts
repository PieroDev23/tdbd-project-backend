import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { User } from '../../entities';

export class User1715142522647 implements Seeder {
    track = false;

    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {

        const userFactory = factoryManager.get(User);
        await userFactory.saveMany(14);
    }
}
