import * as types from '../Actions/types';

const initialState=0;
function actionTypesEndinSucces(type){
    return type.substring(type.length-7 ) === 'SUCCESS';
}
export default function BeginAjaxCall(state=initialState,action){
    if(action.type === types.BEGIN_AJAX_CALL){
        return state + 1;
    }
    else if(actionTypesEndinSucces(action.type)){
        return state - 1;
    }
    return state;
}