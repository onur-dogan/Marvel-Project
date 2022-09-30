import { loadingAction } from '../store/redux/actions';
import store from '../store/store';

export class LoadingComponentSwitcher {
    static HideLoadingComponent = () => {
        store.dispatch(loadingAction(false))
        return false
    };

    static ShowLoadingComponent = () => {
        store.dispatch(loadingAction(true))
        return true
    };
}