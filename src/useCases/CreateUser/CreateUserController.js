export default class createUserController {
    constructor(createUseCase) {
        this.createUseCase = createUseCase
    }

    async handle(request, response) {
        const { name, email, password } = request.body

        try {
            await this.createUseCase.execute({ name, email, password })
            return response.status(201).send()
        } catch (e) {
            return response.status(400).json({ message: e.message || 'Unexpected error' })
        }
        
    }
}