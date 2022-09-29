import { CharacterModel } from "../API/models/character-model";

export type appNavigationParamList = {
    Index : undefined;
    Detail : {
        data: CharacterModel
    }
}