import axios from 'axios'
import { Token } from '../utils/api-key'
import { ModalSwitcher } from '../utils/modal-switcher'
import { APIURLs } from './APIURL'
import { CharacterModel } from './models/character-model'

export class APIService {
    static getCharacters(limit: number, data = '') {
        const APIKey = Token.generateAPIKey()
        const parameters = data ? `name=${data}&limit=${limit}` : `limit=${limit}`
        return axios.get(APIURLs.HostURL + APIURLs.CHARACTERS + '?' + parameters + '&' +APIKey)
            .then((res) => {
                console.log(parameters)
                const resData: CharacterModel[] = res.data.data.results
                return resData
            }).catch(err => {
                ModalSwitcher.ShowErrorModal('API CALL ERROR', 'Hata Meydana Geldi')
                return []
                // todo
            })
    }

    static getFilmDetail(resourceURI: string) {
        const APIKey = Token.generateAPIKey()
        return axios.get(resourceURI + '?' + APIKey)
            .then((res) => {
                const resData: { path: string, extension: string } = res.data.data.results[0].thumbnail
                return resData
            }).catch(err => {
                ModalSwitcher.ShowErrorModal('API CALL ERROR', 'Hata Meydana Geldi')
                return { path: undefined, extension: undefined }
            })
    }
}