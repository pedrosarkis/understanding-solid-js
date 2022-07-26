import { v4 } from 'uuid'

export default class User {
    constructor(name = '', email = '', password = '', id = v4()) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
    }
}