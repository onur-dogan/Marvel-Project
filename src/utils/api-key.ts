import md5 from 'md5'
import { PRIVATE_KEY, PUBLIC_KEY } from '../API/api-key'

export class Token {
    static generateAPIKey() {
        const ts = Number(new Date())
        return '?ts=' + ts + '&apikey=' + PUBLIC_KEY + '&hash=' + md5(ts + PRIVATE_KEY + PUBLIC_KEY)
    }
}