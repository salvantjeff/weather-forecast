import './Main.css';
import Today from './Today/Today';
import { GoLocation } from 'react-icons/go';
import Weekly from './Weekly/Weekly';

function Main() {
    return (
        <main className='main-section'>
            <div className='location-content'>
                <p>Richmond, VA</p>
                <GoLocation />
            </div>
            <Today />
            <Weekly />
        </main>
    );
};

export default Main;