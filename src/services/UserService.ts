import {getCustomRepository, Repository} from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import {User} from "../entities/User";


class UserService {

    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string) {

        // Verificar se Usuário Existe
        const userExists = await this.usersRepository.findOne({
            email
        });

        // Se existir, retorna User
        if (userExists) {
            return userExists;
        }

        // Se NÃO existir, Salva no Banco de Dados
        const user = this.usersRepository.create({
            email
        });

        await this.usersRepository.save(user);

        return user;
    }

    async findByEmail(email: string) {
        const user = await this.usersRepository.findOne({
            email
        });

        return user;
    }
}

export { UserService };