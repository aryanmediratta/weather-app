import React, {Component} from 'react'

import 'materialize-css/dist/css/materialize.min.css';

export default class Weather extends Component {
	constructor(props){ 
        super(props);  
        this.state={

          newMessage:'',
          temperature:"",
          pressure:"",
          humidity:"",
          main:"",
          description:""

        }
    }

    async getData(){

      var cityname= this.state.newMessage;
      var url='https://api.openweathermap.org/data/2.5/weather?q=';
      var appid="a208d988160c6afaa8b3129f621af215"
      var resP =  fetch(url+cityname+"&units=metric&appid="+appid);

      var res=await resP
      var json= await res.json();

      this.setState({
        temperature:json.main.temp,
        pressure:json.main.pressure,
        humidity:json.main.humidity,
        main:json.weather[0].main,
        description:json.weather[0].description

      })
      return json;}


	render() {
    return (
      <div>
      	<nav>
           <div class="nav-wrapper">
              <a href="#" class="brand-logo">Weather App</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
              </ul>
           </div>
         </nav>
         <br/>
     	<div class="row">
    		<form class="col s12 m6 l3">
     	 	<div class="row">
        	<div class="input-field col s12">
          	<input placeholder="Enter City" value={this.state.newMessage}
      		onChange={function(e){
        	this.setState({
          	newMessage:e.target.value
        	})
      		}.bind(this)}/><label for="email"></label>
      	</div>
    	</div>
  		</form>
		</div>
      <h5> Enter City Name</h5>
      <br/>
      <ul>
      <li>

          <div>
          <button onClick={this.getData.bind(this)}> Submit</button>

          </div>

      </li>
      </ul>

      <div>
    <p>  Temperature:  {this.state.temperature} </p>
    <p>  Pressure:  {this.state.pressure}</p>
    <p>  Humidity:  {this.state.humidity}</p>
    <p>  Main:  {this.state.main}</p>
    <p>  Description:  {this.state.description}</p>
    </div>



      </div>
    );
  }

}























