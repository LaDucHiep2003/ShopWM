import { combineReducers } from 'redux';
import reloadReducer from './reload'


const allReducer = combineReducers(
    {
        reloadReducer,
    }   
)
export default allReducer;