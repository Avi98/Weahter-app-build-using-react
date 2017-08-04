import React,{Component} from 'react';
import WeatherFrom from './weatherForm';
import { connect } from 'react-redux';
import './jumbotron.css';
 class Home extends Component {   
            
            render(){
                return(
                   <div >
                    <div className="jumbotron text-center ">
                            <h1 className="header">Enter city state name</h1>
                        <WeatherFrom />
                       {/*{this.renderMessage} */}
                        </div>
                    </div>    
                );
            }
 }

function mapStateToProps(state){
    return {
        userInput:state.GetUserInput,
        weatherData:state.FetchWeather,
        tempTypes:state.TempType

    }
}

export default connect (mapStateToProps)(Home);

