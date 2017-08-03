import * as types from '../Actions/types';

export default function FetchWeatherReducer(state = [], action){
    switch(action.type){
        case types.FETCH_WEATHER_SUCESS: 
             return {cityName:action.main}
        
        case types.FETCH_WEATHER_ERROR: 
             return state.concat([action.error]);

        default : return state;

    }
}
