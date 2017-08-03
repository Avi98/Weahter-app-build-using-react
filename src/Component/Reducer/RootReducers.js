import { combineReducers } from 'redux';
import GetUserInput from './GetUserInput';
import FetchWeather from './FetchWeather';
import TempType from './TempTypeReducer';
import BeginAjaxCallReducer from './BeginAjaxCallReducer';
import GetIpLocation from './GetIpLocation';

const rootReducer=combineReducers({
    GetUserInput,
    FetchWeather,
    TempType,
    BeginAjaxCallReducer,
    GetIpLocation
});
export default rootReducer;
