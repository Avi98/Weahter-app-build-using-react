import * as types from '../Actions/types';

 const FetchForecast = (state=[], action) =>{
    switch(action.type){
        
        case types.FETCH_FORECAST_SUCESS: return [...state, 
            Object.assign({}, state, action.forecast)]
        
        default: return state;
    }
}

export default FetchForecast;