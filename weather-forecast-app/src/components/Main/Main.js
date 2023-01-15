import './Main.css';
import Today from './Today/Today';
import { GoLocation } from 'react-icons/go';
import Weekly from './Weekly/Weekly';
import Hourly from './Hourly/Hourly';
import initWeatherData from '../../data/initWeatherData';

function Main({ weatherData }) {
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
                <Today weatherData={weatherData} />
                <Weekly weatherData={weatherData}/>
                <Hourly weatherData={weatherData}/>
            </div>
        </main>
    );
};

export default Main;