import React, { Component } from 'react';
import './App.css';
import Header from './Component/Common/Header';
import { connect } from 'react-redux';
import axios from 'axios';
import  { Weather } from '../src/Component/Actions/Weather';


class App extends Component {
componentDidMount(){
axios.get('http://ipinfo.io')
        .then((res)=>{
            this.props.dispatch(Weather(res.data.city));
        });
  
}
  render() {
    return (
      <div>
        <Header ipData={this.props.ipTemp}/>
      <div className="App">
       {this.props.children}       
      </div>
      </div>
    );
  }
}
const mapStateToProps=(state)=>({
 ipTemp:state.FetchWeather.cityName
});


export default connect(mapStateToProps)(App);
