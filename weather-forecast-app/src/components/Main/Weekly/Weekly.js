import './Weekly.css';
import { BsFillCloudSunFill, BsFillSunFill } from 'react-icons/bs';
import initWeatherData from '../../../data/initWeatherData';

function Weekly({ weatherData }) {
    let daily = initWeatherData.daily;
    if (weatherData.daily) {
        daily = [...weatherData.daily];
    };
    console.log('DAILY: ', daily);
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
                                <div className='weekday-weather-icon'><BsFillCloudSunFill size='2rem'/></div>
                                <div className='weekday-extremes'>
                                    <div className='weekday-high'>{Math.round(day.temp_high)}°</div>
                                    <div className='weekday-low'>{Math.round(day.temp_low)}°</div>
                                </div>
                            </div>
                        </div>  
                    );
                })}
               
                {/* <div className='weekday-extra-info'>
                    <p className='weekday-date'>Sat 14</p>
                    <div className='weekday-details'>
                        <div className='weekday-weather-icon'><BsFillSunFill size='2rem'/></div>
                        <div className='weekday-extremes'>
                            <div className='weekday-high'>41°</div>
                            <div className='weekday-low'>28°</div>
                        </div>
                    </div>
                </div>       
                <div className='weekday-extra-info'>
                    <p className='weekday-date'>Sat 14</p>
                    <div className='weekday-details'>
                        <div className='weekday-weather-icon'><BsFillSunFill size='2rem'/></div>
                        <div className='weekday-extremes'>
                            <div className='weekday-high'>41°</div>
                            <div className='weekday-low'>28°</div>
                        </div>
                    </div>
                </div>  
                <div className='weekday-extra-info'>
                    <p className='weekday-date'>Sat 14</p>
                    <div className='weekday-details'>
                        <div className='weekday-weather-icon'><BsFillSunFill size='2rem'/></div>
                        <div className='weekday-extremes'>
                            <div className='weekday-high'>41°</div>
                            <div className='weekday-low'>28°</div>
                        </div>
                    </div>
                </div>  
                <div className='weekday-extra-info'>
                    <p className='weekday-date'>Sat 14</p>
                    <div className='weekday-details'>
                        <div className='weekday-weather-icon'><BsFillSunFill size='2rem'/></div>
                        <div className='weekday-extremes'>
                            <div className='weekday-high'>41°</div>
                            <div className='weekday-low'>28°</div>
                        </div>
                    </div>
                </div>       */}
            </div>
        </div>
    );
};

export default Weekly;