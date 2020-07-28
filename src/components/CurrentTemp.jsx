import React, { useContext } from 'react';
import { GlobalStoreContext } from '../Store';
import '../styles/CurrentTemp.scss';

const CurrentTemp = () => {
    const [globalStore] = useContext(GlobalStoreContext);

    return (
        <div
            className={
                globalStore.city.length <= 12
                    ? `current-temp-card`
                    : `long-name-card`
            }
        >
            <h1>{globalStore.city}</h1>
            <img
                src={`http://openweathermap.org/img/wn/${globalStore.icon}@2x.png`}
                alt="weather icon"
            />
            <h1>{globalStore.currentTemp}&deg;</h1>
            <h5>
                It is currently {globalStore.currentTemp}&deg; in{' '}
                {globalStore.city}.
            </h5>
        </div>
    );
};

export default CurrentTemp;
