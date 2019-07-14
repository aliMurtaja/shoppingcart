import {combineReducers} from 'redux'
import shelfReducer from './shelf/reducer';
import sortReducer from './sort/reducer';
import filterReducer from './filters/reducer';

export default combineReducers({
    shelf : shelfReducer,
    sort : sortReducer,
    filters :filterReducer
})