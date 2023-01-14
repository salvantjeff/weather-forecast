import CloudSVG from '../../../img/CloudSVG';
import './Weekly.css';
import { BsFillCloudSunFill, BsFillSunFill } from 'react-icons/bs';

function Weekly() {
    return (
        <div className='weekly-section'>
            <div className='weekly-title'>
                <p>Weekly Forecast</p>
            </div>
            <div className='weekday-extra-info-wrapper'>
                {/* create an obj with content and map out to specific section */}
                <div className='weekday-extra-info'>
                    <p className='weekday-date'>Fri 13</p>
                    <div className='weekday-details'>
                        <div className='weekday-weather-icon'><BsFillCloudSunFill size='2rem'/></div>
                        <div className='weekday-extremes'>
                            <div className='weekday-high'>46°</div>
                            <div className='weekday-low'>32°</div>
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
            </div>
        </div>
    );
};

export default Weekly;