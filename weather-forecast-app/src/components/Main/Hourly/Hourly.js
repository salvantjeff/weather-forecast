import './Hourly.css';
import { BsFillCloudSnowFill, BsWind } from 'react-icons/bs';
import { WiHumidity } from 'react-icons/wi';
import initWeatherData from '../../../data/initWeatherData';
import { kelvinToFahrenheit, kelvinToCelsius } from '../../../helper/convert';
import WeatherIcons from '../../../data/WeatherIcons';

function Hourly({ weatherData, toCelsius }) {
    let hourly = initWeatherData.hourly;
    if (weatherData.hourly) {
        hourly = [...weatherData.hourly];
    };

    const conversionFunc = toCelsius ? kelvinToCelsius : kelvinToFahrenheit;

    return (
        <div className='hourly-section'>
            <div className='hourly-title'>
                <p>Hourly summary</p>
            </div>
            <div className='hourly-extra-info-wrapper'>
                {hourly.map(hour => {
                    return (
                        <div key={hour.id} className='hourly-extra-info'>
                            <div className='hourly-extra-info-primary'>
                                <div className='hourly-weather-icon'>
                                    <img src={WeatherIcons[hour.description]} alt="weather icon" />
                                </div>
                                <div className='hourly-temp'>{Math.round(conversionFunc(hour.temp))}°</div>
                                <div className='hourly-temp-description'>{hour.description}</div>
                            </div>
                            <div className='hourly-extra-info-secondary'>
                                <div className='hourly-humidity'>
                                    <WiHumidity />
                                    <p>{hour.humidity}%</p>
                                </div>
                                <div className='hourly-wind'>
                                    <BsWind/>
                                    <p>{(hour.wind * 2.23694).toFixed(2)} mph</p>
                                </div>
                            </div>
                            <div className='hourly-time'>{hour.time}</div>
                        </div>  
                    );
                })}
            </div>
        </div>
    );
};

export default Hourly;