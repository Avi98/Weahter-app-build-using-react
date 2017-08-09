import React, { Component } from 'react';
import moment from 'moment';
import ForecastItems from './ForecastItems';
import PropTypes from 'prop-types';
import OverallLookup from '../Overalllook/Overall_look';

class ForecastList extends Component {
  constructor(props){
    super(props);
  this.state = { 
    gridSize:"col-lg-2 col-md-2 col-sm-6 col-xs-12 col-lg-offset-0 col-md-offset-0 col-sm-offset-3 col-xs-offset-0",
    weather_type:[], 
    date:[],
    temp:this.props.data.main.temp,
    temp_high:this.props.data.main.temp_max,
    temp_low:this.props.data.main.temp_min,
    humidity:this.props.data.humidity
  };
  this.getWeathertype=this.getWeathertype.bind(this);
  }

  componentWillMount(){
    this.getWeathertype();
  }

getWeathertype(){
  let wet=[];
this.props.data.weather.forEach((items)=>{
            wet.push(items.main);
          });
let date_text = moment.unix(this.props.data.dt).format('dddd, MMM D');
 this.setState({
      weather_type:wet,
      date:date_text 
    });
  }
  render() {
    let {weather_type,gridSize,date,temp_high,temp,temp_low,humidity}=this.state;
    {console.log("this is getWeather method",this.props)}
    return (
      <ForecastItems date={date} 
                    weather_type={weather_type}
                    temp={temp}
                    temp_high={temp_high}
                    temp_low={temp_low}
                    humidity={humidity}
                    gridSize={gridSize}
                    iconLookup={OverallLookup}
                    temp_option={this.props.temp_option}
                    
      />
    );
  }
}

ForecastList.propTypes={
  data:PropTypes.object.isRequired
};

export default ForecastList;
