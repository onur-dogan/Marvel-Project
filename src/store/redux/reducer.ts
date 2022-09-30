import { Iitems } from "../../API/models/common-model";
import { Action, ActionType } from "./actionTypes";
import { State } from "./State";

const initialState: State = {
    loading: false,
    isDetailModal: false,
    detailModalData: {} as Iitems
}

const setLoading = (state: boolean = initialState.loading, action: Action) => {
    switch (action.type) {
        case ActionType.LOADING:
            return {
                loading: action.payload
            }
        default:
            return state
    }
}

const setDetailModalShow = (state: boolean = initialState.isDetailModal, action: Action) => {
    switch (action.type) {
        case ActionType.IS_DETAIL_MODAL:
            return {
                isDetailModal: action.payload
            }
        default:
            return state
    }
}

const setDetailModalData = (state: Iitems = initialState.detailModalData, action: Action) => {
    switch (action.type) {
        case ActionType.DETAIL_MODAL_DATA:
            return {
                detailModalData: action.payload
            }
        default:
            return state
    }
}

export {
    setLoading,
    setDetailModalShow,
    setDetailModalData
}