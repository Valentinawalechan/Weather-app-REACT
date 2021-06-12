import React from "react";
import FormattedDate from"./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature"



export default function WeatherInfo (props) {
    return (
        <div className = "WeatherInfo">
        <p> <FormattedDate date={props.data.date} /></p>
        <h1>{props.data.city}</h1>
        <ul>
            <li> 
                <div className="clearfix">
                    <div className="temp"><WeatherTemperature celsius={props.data.temperature} /> </div>
            <div className="emoji">
            <WeatherIcon code={props.data.icon} size={62} /> 
            </div>
            </div> 
            </li>
            <li className="text-capitalize"> {props.data.description}</li>
            <li className="conditions">
                    Humidity: {props.data.humidity}%
                </li>
                <li className="conditions">
                    Wind: {Math.round(props.data.wind)}km/h
                </li>
        </ul>
        <hr />
        <h2>5 Days Weather Forecast</h2>
    
    </div>
    )
}