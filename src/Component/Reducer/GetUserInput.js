import * as types from '../Actions/types';

export default function GetUserInput(state=[],action){
    switch(action.type){
        case types.TYPED_USER_INPUT: 
        return Object.assign({},state,{location:action.city});
        default: return state;
    }

}
