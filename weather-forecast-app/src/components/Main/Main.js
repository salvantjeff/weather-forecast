import './Main.css';
import Today from './Today/Today';
import { GoLocation } from 'react-icons/go';
import Weekly from './Weekly/Weekly';
import Hourly from './Hourly/Hourly';
import initWeatherData from '../../data/initWeatherData';

function Main({ weatherData, toCelsius }) {
    let today = initWeatherData.today;
    if (weatherData.today) {
        today = {...weatherData.today};
    };

    return (
        <main className='main-section'>
            <div className='location-content'>
                <p>{today.city}, {today.country}</p>
                <GoLocation />
            </div>
            <div className='main-content'>
                <Today 
                    weatherData={weatherData} 
                    toCelsius={toCelsius} 
                />
                <Weekly 
                    weatherData={weatherData}
                    toCelsius={toCelsius} 
                />
                <Hourly 
                    weatherData={weatherData}
                    toCelsius={toCelsius} 
                />
            </div>
        </main>
    );
};

export default Main;