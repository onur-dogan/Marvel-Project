import { combineReducers, createStore } from '@reduxjs/toolkit'
import { setLoading, setDetailModalShow, setDetailModalData } from './redux/reducer';

const reducers = combineReducers({
  setLoading : setLoading,
  setDetailModalShow: setDetailModalShow,
  setDetailModalData: setDetailModalData
})

const store = createStore(reducers);
export default store;