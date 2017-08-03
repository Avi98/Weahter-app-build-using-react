import axios from 'axios';
import * as types from './types';

export const GetLocation = () =>{
    const url='http://ipinfo.io';
    return (dispatch)=> {
        return axios.get(url)
        .then((res)=>{
            dispatch(GetIpLocation(res.data.city));
        })
    }
}

export const GetIpLocation=(iplocation)=>({
    type: types.GET_IP_LOCATION ,
    iplocation
});