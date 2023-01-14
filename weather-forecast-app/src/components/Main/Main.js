import './Main.css';
import Today from './Today/Today';
import { GoLocation } from 'react-icons/go';

function Main() {
    return (
        <main className='main-section'>
            <div className='location-content'>
                <p>Richmond, VA</p>
                <GoLocation />
            </div>
            <Today />
        </main>
    );
};

export default Main;