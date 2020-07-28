import React, { useContext } from 'react';
import { GlobalStoreContext } from '../Store';

import HourlyReading from './HourlyReading';

import '../styles/Forecast.scss';

const Forecast = () => {
    // This component is intended to be a wrapper in which to display each individual reading from 3-hr, 5-day forecast
    // represented by the HourlyReading component
    const [globalStore] = useContext(GlobalStoreContext);

    const items = globalStore.JSON.map((item) => {
        return (
            <HourlyReading
                key={item.dt}
                temp={Math.round(item.main.temp)}
                icon={item.weather[0].icon}
                dateTime={item.dt_txt}
            />
        );
    });

    return <div className="forecast">{items}</div>;
};

export default Forecast;
