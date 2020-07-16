import React from 'react';


const CurrentWeather = (props) => {
    
    const currentTemp = 2 *(props.data.list[0].main.temp - 273.15)
    const feelsLike = 2 *(props.data.list[0].main.feels_like - 273.15)
    const tempInC = currentTemp.toFixed()/2 
    const feelsLikeInC = feelsLike.toFixed()/2 


    
    
    return (
        <div className="currentWeather"> 
            <div className="weatherInfo">Current Temperature: <span>{tempInC}° C</span></div>
            <div className="weatherInfo">Feels Like: <span>{feelsLikeInC}° C</span></div>
            <div className="weatherInfo">Humidity: <span>{props.data.list[0].main.humidity} %</span></div>
        </div>
    ); 
} 

export default CurrentWeather;