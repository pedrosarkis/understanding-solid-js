import AbstractUserRepository from './AbstractUserRepository'

export default class InMemoryUserRepository extends AbstractUserRepository {
    constructor() {
        this.users = {}
    }

    async findByEmail(email) {
        return this.users[email]
    }

    async save(user) {
        this.users[user.id] = user
    }
}