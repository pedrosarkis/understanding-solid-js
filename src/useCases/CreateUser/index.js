import createUserController from "./CreateUserController.js";
import CreateUserUseCase from "./CreateUserUseCase.js";
import LoggerUserRepository from "../../repositories/LoggerUserRepository.js";
import LoggerMail from "../../mail/LoggerMail.js";

export default new createUserController(
    new CreateUserUseCase(
        new LoggerUserRepository(),
        new LoggerMail()
    )
)