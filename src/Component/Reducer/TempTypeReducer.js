import * as types from '../Actions/types';

export default function TempType(state=[],action){
    switch(action.type){
        case types.TEMP_TYPE: return action.tempType;
        default : return state
    }
}