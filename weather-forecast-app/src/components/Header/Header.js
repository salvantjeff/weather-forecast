import CloudSVG from '../../img/CloudSVG';
import './Header.css';
import { BsSearch } from 'react-icons/bs';

function Header({ 
    toCelsius, 
    toggleUnit, 
    searchContent, 
    onChange,
    handleSearchSubmit
}) {

    return (
        <header className="header">
            <div className="header-top">
                <div className="header-icon">
                    <CloudSVG />
                </div>
                <h1>Weather Forecast</h1>
            </div>
            <div className="header-bottom">
                <div className='search-dropdown'>
                    <form onSubmit={handleSearchSubmit} className="search-form">
                        <input 
                            type="text"
                            className="search-bar"
                            placeholder='Search for location'
                            value={searchContent.search}
                            onChange={onChange}
                        />
                        <div className="search-icon">
                            <BsSearch />
                        </div>
                    </form>
                    <div className='dropdown-error-message'>
                        <p className='error-title'>Location not found.</p>
                        <p>Search must be in the form of <strong>"City"</strong>, <strong>"City, State"</strong> or <strong>"City, Country"</strong>.</p>
                    </div>
                </div>
                <div 
                    onClick={toggleUnit}
                    className="toggle-temp-button"
                >Unit: <strong>{toCelsius ? '°C' : '°F'}</strong></div>
            </div>
        </header>
    );
};

export default Header;