import React, { useContext } from 'react';
import HourlyReading from './HourlyReading';
import { GlobalStoreContext } from '../Store';

import '../styles/Forecast.css';

const Forecast = () => {
    const [globalStore] = useContext(GlobalStoreContext);

    const items = globalStore.JSON.map(item => {
        return (
            <HourlyReading 
                key={item.dt}
                temp={Math.round(item.main.temp)}
                icon={item.weather[0].icon}
                dateTime={item.dt_txt}
            />
        );
    });

    return (
        <div className="forecast">
            { items }
        </div>
    );
};

export default Forecast;