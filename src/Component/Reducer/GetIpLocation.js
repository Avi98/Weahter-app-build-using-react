import * as types from '../Actions/types';

export default function GetIpLocation(state=[],action){
    switch(action.types){
        case types.GET_IP_LOCATION: 
        return action.iplocation

        default: return state;
    }
}