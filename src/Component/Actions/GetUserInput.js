import * as types from './types';

export function GetUserInput(city){
    return { type:types.TYPED_USER_INPUT, city};
}
