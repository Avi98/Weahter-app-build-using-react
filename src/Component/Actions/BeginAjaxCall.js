import * as types from './types';

export const BeginAjaxCall= () =>({
    type:types.BEGIN_AJAX_CALL
});

export const AjaxCallError=()=>({
    type:types.AJAX_CALL_ERROR
});