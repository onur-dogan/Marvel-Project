import { Modal } from "@ant-design/react-native";
import { Iitems } from "../API/models/common-model";
import { detailModalAction, detailModalDataAction } from "../store/redux/actions";
import store from "../store/store";

export class ModalSwitcher {
    static ShowErrorModal(title: string, message: string) {
        Modal.alert(title, message, [
            {
                text: 'OK'
            }])
    }

    static showDetailModal(data: Iitems[]) {
        store.dispatch(detailModalDataAction(data))
        store.dispatch(detailModalAction(true))
    }

    static hideDetailModal() {
        store.dispatch(detailModalAction(false))
    }
}