import React, { useContext } from 'react';
import { GlobalStoreContext } from '../Store';

import '../styles/Forecast.css';

const Forecast = () => {
    const [globalStore] = useContext(GlobalStoreContext);

    const items = globalStore.JSON.map(item => {
        return (
            
        );
    });

    return (
        <div className="forecast">
            { items }
        </div>
    );
};

export default Forecast;