import { ICommonModel } from "./common-model"

export interface CharacterModel {
    id: number,
    name: string,
    resourceURI: string,
    description: string,
    modified: string,
    comics: ICommonModel,
    events: ICommonModel,
    series: ICommonModel,
    stories: ICommonModel,
    thumbnail: {
        path: string,
        extension: string
    }
}