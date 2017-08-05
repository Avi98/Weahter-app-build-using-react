import * as types from './types';
import axios from 'axios';
import { BeginAjaxCall, AjaxCallError } from './BeginAjaxCall';

export const GetLocation = () => {
    const url = 'http://ipinfo.io';
    return (dispatch) => {
        return axios.get(url)
            .then((res) => {
                Weather(res.data.city);
            });
    };
};

export const Weather = (location,key) => {

    let zipCode = /^\d{5}$/.test(location);
    let Default_units = "imperial";
    let apiKey = "dec9418cc405ebba43dacfdc87713161";
    const encodedLocation = encodeURIComponent(location);
    const url = "http://api.openweathermap.org/data/2.5/";
    let requestUrl = `${url}${key}?appid=${apiKey}&units=${Default_units}`;
    requestUrl += zipCode ? `zip=${encodedLocation}` : `&q=${encodedLocation}`;
   
    if(key==="weather"){ 
        return (dispatch) => {
        dispatch(BeginAjaxCall());
        return axios.get(requestUrl)
            .then(response => {
                if (response.data.cod !== 200 && response.data.message) {
                    dispatch(ErrorHandel(response.data.message));
                }
                else {
                    dispatch(fetchWeatherSucess(response.data));
                }
            }).catch(error => {
                dispatch(AjaxCallError());
                throw (error);
            });
    };
}
    else{
        //dispatch new thunk over here in which new action 
        // will be there and action will be call  NEW reducer which will //
        //set new state for FORECASTE 

        return (dispatch) => {
        dispatch(BeginAjaxCall());
        return axios.get(requestUrl)
            .then(response => {
               
                    dispatch(fetchForecastSucess(response.data));
                
            }).catch(error => {
                dispatch(AjaxCallError());
                throw (error);
            });
    };
    }
};

export const fetchForecastSucess=(forecast) =>({
    type:types.FETCH_FORECAST_SUCESS,
    forecast
})

export const fetchWeatherSucess = (main) => ({
    type: types.FETCH_WEATHER_SUCESS,
    main: {
        cordinate: main.coord,
        mainData: main.main,
        name: main.name,
        country: main.sys.country,
        weather: main.weather
    }

});

export const ErrorHandel = (err) => ({
    type: types.FETCH_WEATHER_ERROR,
    err

});
