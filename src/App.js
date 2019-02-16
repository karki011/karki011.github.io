import React from 'react';

import Title from  './compontents/Title';
import Form from './compontents/Form';
import Weather from './compontents/Weather';

const API_KEY ="a0ec243ccb6b309add0147128106b914";

class App extends React.Component{
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather =  async(e) => {
    e.preventDefault(); //prevent full refresh
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);

    //convert response to JSON format
    const data = await api_call.json();
    if(city && country) {
      console.log(data);
    this.setState({
      temperature:data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error:""
    });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  }
  render(){
    return(
      <div>
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather 
        temperature={this.state.temperature}
        city={this.state.city}
        country= {this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error= {this.state.error}/>

      </div>
    );
  }
};

export default App;