import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [error, seterror] = useState(false);
  const API_URL= "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY= "b5ab5489b4be414990f38e9adb12619f";

  let getWeatherInfo = async ()=> {
    let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
      
    let jsonResponse= await response.json();
    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      humidity: jsonResponse.main.humidity,
      wind: jsonResponse.wind.speed,
      tempmin: jsonResponse.main.temp_min,
      tempmax: jsonResponse.main.temp_max,
      feelslike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result
  }

    

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      let NewInfo = await getWeatherInfo();
      updateInfo(NewInfo);
      setCity("");
    } catch {
      seterror(true);
    } 
  }
    
  return (
   <div className="search-box">
     <form onSubmit={handleSubmit}>
       <TextField
       id="City" 
       label="City Name" 
       variant="outlined"  
       required 
       value={city}
       onChange={handleChange}
       />
       <br/><br/>
       <Button variant="contained" type='submit'>Search</Button>
        <br/><br/>
      {error && <p style={{color: "red"}}>NO such place exists!</p>}
      </form>
   </div>
  );
}
