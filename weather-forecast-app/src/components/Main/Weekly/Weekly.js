import './Weekly.css';
import initWeatherData from '../../../data/initWeatherData';
import { kelvinToCelsius, kelvinToFahrenheit } from '../../../helper/convert';
import WeatherIcons from '../../../data/WeatherIcons';

function Weekly({ weatherData, toCelsius }) {
    let daily = initWeatherData.daily;
    if (weatherData.daily) {
        daily = [...weatherData.daily];
    };

    const conversionFunc = toCelsius ? kelvinToCelsius : kelvinToFahrenheit;

    return (
        <div className='weekly-section'>
            <div className='weekly-title'>
                <p>Weekly Forecast</p>
            </div>
            <div className='weekday-extra-info-wrapper'>
                {daily.map(day => {
                    return (
                        <div key={day.id} className='weekday-extra-info'>
                            <p className='weekday-date'>{day.date}</p>
                            <div className='weekday-details'>
                                <div className='weekday-weather-icon'>
                                    <img src={WeatherIcons[day.description]} alt="weather icon" />
                                </div>
                                <div className='weekday-extremes'>
                                    <div className='weekday-high'>{Math.round(conversionFunc(day.temp_high))}°</div>
                                    <div className='weekday-low'>{Math.round(conversionFunc(day.temp_low))}°</div>
                                </div>
                            </div>
                        </div>  
                    );
                })}
            </div>
        </div>
    );
};

export default Weekly;