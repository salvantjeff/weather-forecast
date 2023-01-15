import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import OpenWeatherData from '../../data/OpenWeatherData';

function App() {
  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    async function getWeatherData(searchValue) {
      const key = 'cfd17070df640abcbe367fe0946f9bb4';
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${key}`;
      try {
        const res = await fetch(url, { mode: 'cors' });
        const data = await res.json();
        console.log(data);
        const coord = {
          lat: data.coord.lat,
          lon: data.coord.lon,
        };
        // const url_complete = `https://api.openweathermap.org/data/3.0/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=${key}`; 
        // const completeRes = await fetch(url_complete, { mode: 'cors' });
        // const OpenWeatherData = await completeRes.json();
        // Note to self: currently using an earlier copy of OpenWeatherData to save api calls
        // just swap them when ready to make calls;
        const dataProcessed = {
          today: {
            wind: data.wind.speed,
            description: data.weather[0].description,
            main_weather: data.weather[0].main,
            visibility: data.visibility,
            country: data.sys.country,
            feels_like: data.main.feels_like,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            temp: data.main.temp,
            temp_max: data.main.temp_max,
            temp_min: data.main.temp_min,
            city: data.name,
            date: new Date(data.dt * 1000).toDateString(),
          },
          daily: OpenWeatherData.daily.map(currDay => {
            return {
              date: (new Date(currDay.dt * 1000).toDateString()).slice(0, -5),
              temp_high: currDay.temp.max,
              temp_low: currDay.temp.min,
              description: currDay.weather[0].description,
              main_weather: currDay.weather[0].main,
            };
          }),
          hourly: OpenWeatherData.hourly.map(currHour => {
            return {
              time: formatAMPM(new Date(currHour.dt * 1000).getHours()),
              temp: currHour.temp,
              humidity: currHour.humidity,
              wind: currHour.wind_speed,
              description: currHour.weather[0].description,
              main_weather: currHour.weather[0].main,
            };
          })
        };
          
        function formatAMPM(hours) {
          var ampm = hours >= 12 ? 'PM' : 'AM';
          hours = hours % 12;
          // the hour '0' should be '12'
          hours = hours ? hours : 12; 
          var strTime = `${hours} ${ampm}`;
          return strTime;
        };
      
        console.log('Filtered data: ', dataProcessed);
        setWeatherData(dataProcessed);
      } catch (error) {
        console.log(error);
      };
    };
    getWeatherData('richmond')
  }, []);
  console.log('Data to use: ',weatherData);

  return (
    <div className="App">
      <div className="content-wrapper">
        <Header />
        <Main weatherData={weatherData} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
