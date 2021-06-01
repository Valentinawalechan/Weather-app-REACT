import React, {useState} from "react";
import axios from "axios";
import "./Weather.css"
import WeatherInfo from "./WeatherInfo";


export default function Weather (props) {

    const [weatherData, setWeatherData]= useState({ready : false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response){
        setWeatherData({
            ready:true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000),
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        });
       

    }
    function search() {
       const apiKey="e0694654dc1e3a75a3a366bd93b182e4";
       let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
       axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit (event) {
        event.preventDefault();
        search(city) 

    }

    function handleCityChange (event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) { 
        return (
        <div className="Weather">
        <form onSubmit= {handleSubmit} > 
            <div className="row">
            <div className="col-9">
            <input type="search" placeholder="Type a city..." className="form-control" autoFocus="on" onChange={handleCityChange} />
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className=" btn btn-primary w-100"/>
            </div>
            </div>
        </form>
        <WeatherInfo data={weatherData} />
        
    </div>
    ); 
} else {
    search();
    return "Loading...";
}
}