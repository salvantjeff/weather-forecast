import './Today.css';
import CloudSVG from '../../../img/CloudSVG';
import removeSeconds from '../../../helper/removeSeconds';
import { kelvinToCelsius, kelvinToFahrenheit } from '../../../helper/convert';
import initWeatherData from '../../../data/initWeatherData';

function Today({ weatherData }) {
    let today = initWeatherData.today;
    if (weatherData.today) {
        today = {...weatherData.today};
    };

    //if toCelsius is true then use celsius formula
    // const todayTemp = toCelsius ? kelvinToCelsius(today.temp) : kelvinToFahrenheit(today.temp);
    // const todayTempUnit = toCelsius ? 'C' : 'F';
    const todayTemp = kelvinToFahrenheit(today.temp);
    const todayTempUnit = 'F';
    // const conversionFunc = toCelsius ? kelvinToCelsius : kelvinToFahrenheit;
    const conversionFunc = kelvinToFahrenheit;
    // console.log('====>', weatherData.today);
    return (
        <div className='today-section'>
            <div className='today-heading'>
                <p className='today-heading-title'>Current Weather</p>
                <p className='today-heading-time'>{removeSeconds(new Date().toLocaleTimeString())}</p>
            </div>
            <div className='today-main-details'>
                <div className='today-main-temp'>
                    <div className='today-weather-icon'><CloudSVG /></div>
                    <div className='today-main-temp__details'>
                        <p className='today-main-temp-value'>{conversionFunc(today.temp)}</p>
                        <span className="today-temp-unit">°{todayTempUnit}</span>
                    </div>
                </div>
                <div className='today-main-description'>
                    <p className='today-main-description-heading'>{today.description}</p>
                    <p className='today-main-description-sub-heading'>Feels like {conversionFunc(today.feels_like)}°</p>
                </div>
            </div>
            <div className='today-main-summary'>
                <p>There will be <span className='main-des'>{today.main_weather}</span> skies. The high will be {conversionFunc(today.temp_max)}°.</p>
            </div>
            <div className='today-extra-info-wrapper'>
                <div className='today-extra-info'>
                    <p className='today-extra-info-title'>Sunrise</p>
                    <p className='today-extra-info-value'>{today.sunrise}</p>
                </div>
                <div className='today-extra-info'>
                    <p className='today-extra-info-title'>Sunset</p>
                    <p className='today-extra-info-value'>{today.sunset}</p>
                </div>
                <div className='today-extra-info'>
                    <p className='today-extra-info-title'>Wind</p>
                    <p className='today-extra-info-value'>{(today.wind * 2.23694).toFixed(2)} mph</p>
                </div>
                <div className='today-extra-info'>
                    <p className='today-extra-info-title'>Humidity</p>
                    <p className='today-extra-info-value'>{today.humidity}%</p>
                </div>
                <div className='today-extra-info'>
                    <p className='today-extra-info-title'>Visibility</p>
                    <p className='today-extra-info-value'>{(today.visibility * 0.00062137).toFixed(2)} mi</p>
                </div>
                <div className='today-extra-info'>
                    <p className='today-extra-info-title'>Pressure</p>
                    <p className='today-extra-info-value'>{(today.pressure * 0.0145).toFixed(2)} in</p>
                </div>
            </div>
        </div>
    );
};

export default Today;