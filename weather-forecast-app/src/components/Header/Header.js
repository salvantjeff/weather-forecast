import CloudSVG from '../../img/CloudSVG';
import './Header.css';
import { BsSearch } from 'react-icons/bs';

function Header() {
    return (
        <header className="header">
            <div className="header-top">
                <div className="header-icon">
                    <CloudSVG />
                </div>
                <h1>Weather Forecast</h1>
            </div>
            <div className="header-bottom">
                <form className="search-form">
                    <input 
                        type="text"
                        className="search-bar"
                        placeholder='Search for location'
                    />
                    <div className="search-icon">
                        <BsSearch />
                    </div>
                </form>
                <div className="toggle-temp-button">toggle</div>
            </div>
        </header>
    );
};

export default Header;