/// Liskov Substitution Principle: Quem extender essa classe deve ser intercambiável
export default class AbstractUserRepository {
    async findByEmail(email) {
        throw new Error('Not implemented')
    }

    async save(user) {
        throw new Error('Not implemented')
    }
}