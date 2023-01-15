import './Hourly.css';
import { BsFillCloudSnowFill, BsWind } from 'react-icons/bs';
import { WiHumidity } from 'react-icons/wi';
import initWeatherData from '../../../data/initWeatherData';

function Hourly({ weatherData }) {
    let hourly = initWeatherData.hourly;
    if (weatherData.hourly) {
        hourly = [...weatherData.hourly];
    };
    console.log('HOURLY: ', hourly);

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
                                <div className='hourly-weather-icon'><BsFillCloudSnowFill size='2rem'/></div>
                                <div className='hourly-temp'>5°</div>
                                <div className='hourly-temp-description'>Cloudy</div>
                            </div>
                            <div className='hourly-extra-info-secondary'>
                                <div className='hourly-humidity'>
                                    <WiHumidity />
                                    <p>64%</p>
                                </div>
                                <div className='hourly-wind'>
                                    <BsWind/>
                                    <p>12 km/h</p>
                                </div>
                            </div>
                            <div className='hourly-time'>9 PM</div>
                        </div>  
                    );
                })}
                {/* <div className='hourly-extra-info'>
                    <div className='hourly-extra-info-primary'>
                        <div className='hourly-weather-icon'><BsFillCloudSnowFill size='2rem'/></div>
                        <div className='hourly-temp'>5°</div>
                        <div className='hourly-temp-description'>Cloudy</div>
                    </div>
                    <div className='hourly-extra-info-secondary'>
                        <div className='hourly-humidity'>
                            <WiHumidity />
                            <p>64%</p>
                        </div>
                        <div className='hourly-wind'>
                            <BsWind/>
                            <p>12 km/h</p>
                        </div>
                    </div>
                    <div className='hourly-time'>9 PM</div>
                </div>  
                <div className='hourly-extra-info'>
                    <div className='hourly-extra-info-primary'>
                        <div className='hourly-weather-icon'><BsFillCloudSnowFill size='2rem'/></div>
                        <div className='hourly-temp'>5°</div>
                        <div className='hourly-temp-description'>Cloudy</div>
                    </div>
                    <div className='hourly-extra-info-secondary'>
                        <div className='hourly-humidity'>
                            <WiHumidity />
                            <p>64%</p>
                        </div>
                        <div className='hourly-wind'>
                            <BsWind/>
                            <p>12 km/h</p>
                        </div>
                    </div>
                    <div className='hourly-time'>9 PM</div>
                </div> 
                <div className='hourly-extra-info'>
                    <div className='hourly-extra-info-primary'>
                        <div className='hourly-weather-icon'><BsFillCloudSnowFill size='2rem'/></div>
                        <div className='hourly-temp'>5°</div>
                        <div className='hourly-temp-description'>Cloudy</div>
                    </div>
                    <div className='hourly-extra-info-secondary'>
                        <div className='hourly-humidity'>
                            <WiHumidity />
                            <p>64%</p>
                        </div>
                        <div className='hourly-wind'>
                            <BsWind/>
                            <p>12 km/h</p>
                        </div>
                    </div>
                    <div className='hourly-time'>9 PM</div>
                </div> 
                <div className='hourly-extra-info'>
                    <div className='hourly-extra-info-primary'>
                        <div className='hourly-weather-icon'><BsFillCloudSnowFill size='2rem'/></div>
                        <div className='hourly-temp'>5°</div>
                        <div className='hourly-temp-description'>Cloudy</div>
                    </div>
                    <div className='hourly-extra-info-secondary'>
                        <div className='hourly-humidity'>
                            <WiHumidity />
                            <p>64%</p>
                        </div>
                        <div className='hourly-wind'>
                            <BsWind/>
                            <p>12 km/h</p>
                        </div>
                    </div>
                    <div className='hourly-time'>9 PM</div>
                </div> 
                <div className='hourly-extra-info'>
                    <div className='hourly-extra-info-primary'>
                        <div className='hourly-weather-icon'><BsFillCloudSnowFill size='2rem'/></div>
                        <div className='hourly-temp'>5°</div>
                        <div className='hourly-temp-description'>Cloudy</div>
                    </div>
                    <div className='hourly-extra-info-secondary'>
                        <div className='hourly-humidity'>
                            <WiHumidity />
                            <p>64%</p>
                        </div>
                        <div className='hourly-wind'>
                            <BsWind/>
                            <p>12 km/h</p>
                        </div>
                    </div>
                    <div className='hourly-time'>9 PM</div>
                </div> 
                <div className='hourly-extra-info'>
                    <div className='hourly-extra-info-primary'>
                        <div className='hourly-weather-icon'><BsFillCloudSnowFill size='2rem'/></div>
                        <div className='hourly-temp'>5°</div>
                        <div className='hourly-temp-description'>Cloudy</div>
                    </div>
                    <div className='hourly-extra-info-secondary'>
                        <div className='hourly-humidity'>
                            <WiHumidity />
                            <p>64%</p>
                        </div>
                        <div className='hourly-wind'>
                            <BsWind/>
                            <p>12 km/h</p>
                        </div>
                    </div>
                    <div className='hourly-time'>9 PM</div>
                </div>  */}
            </div>
        </div>
    );
};

export default Hourly;