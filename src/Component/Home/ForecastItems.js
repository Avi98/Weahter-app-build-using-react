import React from 'react';
import Rain from '../Weather/rain';

const ForecastItems = (props) => {
  console.log("props",props)
  let tempdata=props.temp;
  if(props.temp_option==='C'){
    tempdata = (tempdata-32) * (5/9);
    tempdata = tempdata.toFixed(2);
  }
    const divStyle = {
  width:'20rem'
 
};
const weatherIconWraper={
  background: 'currentColor'
}
    console.log("this is forcastItems weathertype",props)	
   // console.log("this is forcastItems date",props.date.getDay())	
    return (
//destructture date,weather_type,temp,temp_high,temp_low,humidity,gridSize,iconLookup
       <div className={props.gridSize}>
       <div className="card" style={divStyle}>
           <div className="icon" style={weatherIconWraper}>
            {props.iconLookup[props.weather_type]}
           </div>
           <div className="card-block">
            <h4 className="card-title">{props.date}</h4>
            <ul className="list-group list-group-flash">
              <li className="list-group-item">The temp is {tempdata} * {props.temp_option}</li>
              <li className="list-group-item">Max temp: {props.temp_high}</li>
              <li className="list-group-item">Min temp: {props.temp_low}</li>
              <li className="list-group-item">there will be {props.weather_type}</li>
            </ul>
            
           </div>
       </div> 
       <br/>
       </div>
    );
}

export default ForecastItems;