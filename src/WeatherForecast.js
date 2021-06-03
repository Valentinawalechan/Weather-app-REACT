import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"

export default function WeatherForecast (){
    return <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="WeatherForecast-day"> Thu </div>
                <WeatherIcon code="01d" size={36} />
                <div className="WeatherForecasr-temperature"><span classname="WeatherForecast-temperature-max">
                    19° </span>
                   <span classname="WeatherForecast-temperature-min"> 10° </span> </div>
            </div>
             <div className="col">
                <div className="WeatherForecast-day"> Thu </div>
                <WeatherIcon code="01d" size={36} />
                <div className="WeatherForecasr-temperature"><span classname="WeatherForecast-temperature-max">
                    19° </span>
                   <span classname="WeatherForecast-temperature-min"> 10° </span> </div>
            </div>
             <div className="col">
                <div className="WeatherForecast-day"> Thu </div>
                <WeatherIcon code="01d" size={36} />
                <div className="WeatherForecasr-temperature"><span classname="WeatherForecast-temperature-max">
                    19° </span>
                   <span classname="WeatherForecast-temperature-min"> 10° </span> </div>
            </div>
             <div className="col">
                <div className="WeatherForecast-day"> Thu </div>
                <WeatherIcon code="01d" size={36} />
                <div className="WeatherForecasr-temperature"><span classname="WeatherForecast-temperature-max">
                    19° </span>
                   <span classname="WeatherForecast-temperature-min"> 10° </span> </div>
            </div>
             <div className="col">
                <div className="WeatherForecast-day"> Thu </div>
                <WeatherIcon code="01d" size={36} />
                <div className="WeatherForecasr-temperature"><span classname="WeatherForecast-temperature-max">
                    19° </span>
                   <span classname="WeatherForecast-temperature-min"> 10° </span> </div>
            </div>
        </div>
    </div>
}