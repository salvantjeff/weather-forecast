import './Main.css';
import Today from './Today/Today';
import { GoLocation } from 'react-icons/go';
import Weekly from './Weekly/Weekly';
import Hourly from './Hourly/Hourly';

function Main() {
    return (
        <main className='main-section'>
            <div className='location-content'>
                <p>Richmond, VA</p>
                <GoLocation />
            </div>
            <div className='main-content'>
                <Today />
                <Weekly />
                <Hourly />
            </div>
        </main>
    );
};

export default Main;