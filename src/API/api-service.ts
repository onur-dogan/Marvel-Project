import axios from 'axios'
import { Token } from '../utils/api-key'
import { APIURLs } from './APIURL'
import { CharacterModel } from './models/character-model'

export class APIService {
    static getCharacters() {
        const APIKey = Token.generateAPIKey()
        return axios.get(APIURLs.HostURL + APIURLs.CHARACTERS + APIKey)
            .then((res) => {
                const resData: CharacterModel[] = res.data.data.results
                return resData
            }).catch(err => {
                return []
                // todo
            })
    }

    static getFilmDetail(resourceURI: string) {
        const APIKey = Token.generateAPIKey()
        return axios.get(resourceURI + APIKey)
            .then((res) => {
                const resData: { path: string, extension: string } = res.data.data.results[0].thumbnail
                return resData
            }).catch(err => {
                return { path: undefined, extension: undefined }
            })
    }
}