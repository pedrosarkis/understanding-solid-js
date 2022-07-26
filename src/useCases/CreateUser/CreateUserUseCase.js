import User from '../../entities/User.js'

/// Single Responsibility Principle: Responsável apenas por salvar usuários
export default class CreateUserUseCase {
    /// Dependency Inversion Principle: classes de alto nível (use cases) não acoplam classes de baixo nível
    /// Open-Closed Principle: Alterar regras de repositório não muda como o Use Case funciona
    constructor(userRepository, mail) {
        this.userRepository = userRepository
        this.mail = mail
    }

    /// Interface Segregation Principle: Se implementa e-mail pode usar este UseCase, não precisa amarrar a mais coisas
    async execute({email}) {
        const userAlreadyExists = await this.userRepository.findByEmail(email)
        console.log(userAlreadyExists);
        if(userAlreadyExists != null) {
            throw new Error('User already exists')
        }

        const user = new User()
        await this.userRepository.save(user)

        await this.mail.send({
            to: {
              name: 'To name',
              email: 'to@mail.com'
            },
            from: {
              name: 'From name',
              email: 'from@mail.com'
            },
            subject: 'Subject',
            body: 'Body'
        })
    }
}