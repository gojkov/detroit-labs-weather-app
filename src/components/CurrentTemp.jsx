import React, { useContext } from 'react';
import { GlobalStoreContext } from '../Store';
import '../styles/CurrentTemp.scss';

const CurrentTemp = () => {
    const [globalStore] = useContext(GlobalStoreContext);
    const testCity = 'Grosse Pointe Farms';

    return (
        <div
            className={
                testCity.length <= 12 ? `current-temp-card` : `long-name-card`
            }
        >
            <h1>{testCity}</h1>
            <img
                src={`http://openweathermap.org/img/wn/${globalStore.icon}@2x.png`}
                alt="weather icon"
            />
            <h1>{globalStore.currentTemp}&deg;</h1>
            <h5>
                It is currently {globalStore.currentTemp}&deg; in {testCity}.
            </h5>
        </div>
    );
};

export default CurrentTemp;
