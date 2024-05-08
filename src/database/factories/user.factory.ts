import { setSeederFactory } from "typeorm-extension";
import { User } from "../../entities";

setSeederFactory(User, (faker) => {
    const user = new User();

    user.username = faker.internet.userName();
    user.email = faker.internet.email();
    user.password = faker.internet.password({ length: 12 });

    // hashing password
    user.hashPassword();

    return user;
});


export const setUserSeederFactory = setSeederFactory;
