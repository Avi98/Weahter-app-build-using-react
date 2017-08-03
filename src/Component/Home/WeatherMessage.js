import React from 'react';

 const WeatherMessage=({location, weather, temp_option })=> {
     let tempdata =weather.cityName.mainData.temp;
     console.log("this is child data weather ",weather);

    if (temp_option==='C') {
        tempdata = (tempdata - 32) * (5/9);
        tempdata = tempdata.toFixed(2);
    }

    return(
        <div>  
        <p> its {tempdata} {temp_option} temp in {location} </p>
        </div>
    );
    };

 export default WeatherMessage;