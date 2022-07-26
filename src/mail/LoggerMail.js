import AbstractMail from "./AbstractMail.js";

const err = () => {
    throw new Error;
}
export default class LoggerMail extends AbstractMail {
    async send({ to, from, subject, body }) {
        console.log(`LoggerMail: Enviando e-mail: from=${JSON.stringify(from)}, to=${JSON.stringify(to)}, subject=${subject}, body=${body}`)
    }
}