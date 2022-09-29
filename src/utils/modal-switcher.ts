import { Modal } from "@ant-design/react-native";

export class ModalSwitcher {
    static ShowErrorModal(title: string, message: string) {
        Modal.alert(title, message, [
            {
                text: 'OK'
            }])
        }
    }