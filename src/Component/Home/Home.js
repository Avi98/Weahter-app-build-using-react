import React,{Component} from 'react';
import WeatherFrom from './weatherForm';
import { connect } from 'react-redux';
import './jumbotron.css';
import moment from 'moment';

 class Home extends Component {   
            constructor(props){
                super(props);
            }
          
            render(){
                return(
                   <div >
                    
                        <WeatherFrom />
                        </div>
                    
                );
            }
 }

function mapStateToProps(state){
    return {
        userInput:state.GetUserInput,
        weatherData:state.FetchWeather,
        tempTypes:state.TempType,
        weatherForecast: state.FetchForecast.filterlist
    }
}

export default connect (mapStateToProps)(Home);

