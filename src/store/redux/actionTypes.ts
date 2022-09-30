import { Iitems } from "../../API/models/common-model";

export enum ActionType {
    LOADING = 'LOADING',
    IS_DETAIL_MODAL = 'IS_DETAIL_MODAL',
    DETAIL_MODAL_DATA = 'DETAIL_MODAL_DATA'
}

interface loadingAction {
    type: ActionType.LOADING,
    payload: boolean,
}

interface detailModalAction {
    type: ActionType.IS_DETAIL_MODAL,
    payload: boolean,
}

interface detailModalDataAction {
    type: ActionType.DETAIL_MODAL_DATA,
    payload: Iitems,
}

export type Action =
    loadingAction | detailModalAction | detailModalDataAction
