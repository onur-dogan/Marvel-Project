import { Iitems } from "../../API/models/common-model";

export interface State {
    loading: boolean,
    isDetailModal: boolean,
    detailModalData: Iitems[]
}
