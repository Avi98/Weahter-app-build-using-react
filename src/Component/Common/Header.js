import React,{Component} from 'react';
import me from './me.jpg';

class Header extends Component{

constructor(props){
  super(props);
}


  render(){
console.log("this is ip data in header",this.props.ipData);
let temp=this.props.ipData
let temp2={...temp}
let mainData={...temp2.mainData}
    return(
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <ul className="navbar-brand">
           <li>
           <img src={me} className="img-circle" alt="me" width="40" height="43" />
           <a> Avinash</a>
           </li>
           </ul>
        </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="/weather">weather</a></li>
          </ul>
           <h3 className="navbar-text">Your Location is {temp2.name} and temprature is {mainData.temp} F </h3>
      </div>
    </nav>      
    );
}
}  
export default Header;
