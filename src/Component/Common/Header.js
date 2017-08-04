  import React,{Component} from 'react';

  class Header extends Component{
  constructor(props){
    super(props);
  let title=true;
  this.ipMessage=this.ipMessage.bind(this);
  }

  ipMessage(){
    let temp=this.props.ipData
  let temp2={...temp}
  let mainData={...temp2.mainData}
    if(temp){
    return <h3 className="navbar-text"><center>Your Location is {temp2.name} and temprature is {mainData.temp} F</center> </h3>
    }
  }

  render(){
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
          <div>
            {this.ipMessage()}
          </div>
        </div>
      </nav>      
      );
  }
  }  

  export default Header;
