import React, {Component, Fragment} from 'react';

import './App.css';


class WorkingHand extends Component{
  constructor(props){
  super(props);
  this.state = {
  hours:new Date().getHours(),
  minutes:new Date().getMinutes(),
  errorMes:false,
 
  }
  }

 HandleChange = (e) => {
 const name = e.target.name;
 const value = e.target.value;
 let element = parseInt(value);
 typeof element=== "number" && element <=24 ?
 this.setState({
   [name]:value,
   errorMes:false,
  }) : this.setState({errorMes:true})
  


 }

render(){
  return(
    <Fragment>
      {/* Input */}
    <div className = "inputs">
    <input type="text"
     className="input"
     placeholder = "hours"
     name = "hours"
     value = {this.state.hours}
     onChange = {this.HandleChange}
     />
    <input type = "text"
     className = "input"
     placeholder = "minutes"
     name = "minutes"
     value = {this.state.minutes}
     onChange ={this.HandleChange}
      />
    </div>
     {this.state.errorMes && <span className = "errorMes">Number is not valid!</span>}
     {/* Clock */}
     <div className="clockcontainer">
    <img src="https://github.com/AutreAni/cavemangame/blob/main/GameImages/toppng.com-clock-face-without-hands-509x509.png?raw=true"
     alt="clock"
     className="clock"/>
     {/* Hours Hand */}
    <div className="hourHand" style ={{
    transform:`rotateZ(${this.state.hours * 30}deg)`,
    transitionDuration: "5s",
    }}> 
    </div>
    {/* Minutes Hand */}
    <div className="minuteHande" style ={{
    transform:`rotateZ(${this.state.minutes * 6}deg)`,
    transitionDuration: "5s",
    }}> 
    </div>
    </div>
   
   </Fragment >
  )};  
  }
 export default WorkingHand;
