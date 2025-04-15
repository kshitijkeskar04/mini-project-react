import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {

    const [WeatherInfo, setWeatherInfo] = useState({
        city: "Mumbai",
        temp: 25,
        humidity: 60,
        wind: 10,
        tempmin: 20,
        tempmax: 30,
        feelslike: 27,
        weather: "Sunny",
    });
  
    let updateInfo = (NewInfo) => {
        setWeatherInfo(NewInfo);
    }

    return (
        <div style={{ textAlign: "center"}}>
            <h2 className="heading">Weather App created by kshitij</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo} />
        </div>
    );
}