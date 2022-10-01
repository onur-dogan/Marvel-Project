import { Iitems } from "../../API/models/common-model";
import { ActionType, Action } from "./actionTypes";

export const loadingAction = (loading: boolean) => {
    return ({
        type: ActionType.LOADING,
        payload: loading,
    }) as Action
}
export const detailModalAction = (isDetailModal: boolean) => {
    return ({
        type: ActionType.IS_DETAIL_MODAL,
        payload: isDetailModal,
    }) as Action
}
export const detailModalDataAction = (detailModalData: Iitems[]) => {
    return ({
        type: ActionType.DETAIL_MODAL_DATA,
        payload: detailModalData,
    }) as Action
}