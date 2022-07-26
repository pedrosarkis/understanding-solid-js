export default class AbstractMail {
    async send({ to, from, subject, body }) {
        throw new Error('Not implemented')
    }
}