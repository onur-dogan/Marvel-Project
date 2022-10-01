import axios from 'axios'
import { Token } from '../utils/api-key'
import { ModalSwitcher } from '../utils/modal-switcher'
import { APIURLs } from './APIURL'
import { CharacterModel } from './models/character-model'
import { LoadingComponentSwitcher } from '../utils/loading.switcher'

export class APIService {
    static getCharacters(limit?: number, data = '') {
        LoadingComponentSwitcher.ShowLoadingComponent()
        const APIKey = Token.generateAPIKey()
        const parameters = data ? `name=${data}&limit=${limit}` : `limit=${limit}`
        return axios.get(APIURLs.HostURL + APIURLs.CHARACTERS + '?' + parameters + '&' + APIKey)
            .then((res) => {
                LoadingComponentSwitcher.HideLoadingComponent()
                const resData: CharacterModel[] = res.data.data.results
                return resData
            }).catch(err => {
                LoadingComponentSwitcher.HideLoadingComponent()
                ModalSwitcher.ShowErrorModal('API CALL ERROR', 'Hata Meydana Geldi')
                console.log(err)
                return []
                // todo
            })
    }

    static getFilmDetail(resourceURI: string) {
        LoadingComponentSwitcher.ShowLoadingComponent()
        const APIKey = Token.generateAPIKey()
        return axios.get(resourceURI + '?' + APIKey)
            .then((res) => {
                LoadingComponentSwitcher.HideLoadingComponent()
                const resData: { path: string, extension: string } = res.data.data.results[0].thumbnail
                return resData
            }).catch(err => {
                LoadingComponentSwitcher.HideLoadingComponent()
                ModalSwitcher.ShowErrorModal('API CALL ERROR', 'Hata Meydana Geldi')
                return { path: undefined, extension: undefined }
            })
    }
}