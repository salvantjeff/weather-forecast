import './Today.css';
import CloudSVG from '../../../img/CloudSVG';

function Today() {
    return (
        <div className='today-section'>
            <div className='today-heading'>
                <p className='today-heading-title'>Current Weather</p>
                <p className='today-heading-time'>2:10 PM</p>
            </div>
            <div className='today-main-details'>
                <div className='today-main-temp'>
                    <div className='today-weather-icon'><CloudSVG /></div>
                    <div className='today-main-temp__details'>
                        <p className='today-main-temp-value'>55</p>
                        <span className="today-temp-unit">°F</span>
                    </div>
                </div>
                <div className='today-main-description'>
                    <p className='today-main-description-heading'>Mostly Sunny</p>
                    <p className='today-main-description-sub-heading'>Feels like 52°</p>
                </div>
            </div>
            <div className='today-main-summary'>
                <p>There will be mostly sunny skies. The high will be 55°.</p>
            </div>
            <div className='today-extra-info-wrapper'>
                {/* create an obj with content and map out to specific section */}
                <div className='today-extra-info'>
                    <p className='today-extra-info-title'>Air Quality</p>
                    <p className='today-extra-info-value'>21</p>
                </div>
                <div className='today-extra-info'>
                    <p className='today-extra-info-title'>Wind</p>
                    <p className='today-extra-info-value'>6 mph</p>
                </div>
                <div className='today-extra-info'>
                    <p className='today-extra-info-title'>Humidity</p>
                    <p className='today-extra-info-value'>54%</p>
                </div>
                <div className='today-extra-info'>
                    <p className='today-extra-info-title'>Visibility</p>
                    <p className='today-extra-info-value'>9.9 mi</p>
                </div>
                <div className='today-extra-info'>
                    <p className='today-extra-info-title'>Pressure</p>
                    <p className='today-extra-info-value'>89.76 in</p>
                </div>
                <div className='today-extra-info'>
                    <p className='today-extra-info-title'>Dew Point</p>
                    <p className='today-extra-info-value'>36°</p>
                </div>
            </div>
        </div>
    );
};

export default Today;