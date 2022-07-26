import { Router } from 'express'
import createUserController from './useCases/CreateUser/index.js'

const router = Router()

router.get('/', (request, response) => {
    return response.status(200).send({'status': 'ok'})
})

router.post('/users', (request, response) => {
    return createUserController.handle(request, response)
})

export default router