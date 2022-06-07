import React from "react";
import axios from 'axios';
// import Loader from "react-loader-spinner";


export default function Weather(props){
    function handleResponse(response){
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`);
    }

    let apiKey = "601404a482223c629a0622a7d06f6491";
    let units = "metric";
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

     axios.get(apiUrl).then(handleResponse);

    return 

        // <Loader
        // type="Puff"
        // color="#00BFFF"
        // height={100}
        // width={100}
        // timeout={3000}
        // />
    
}