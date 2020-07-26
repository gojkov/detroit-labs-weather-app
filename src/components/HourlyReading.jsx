import React from 'react';
import '../styles/HourlyReading.css';

const HourlyReading = (props) => {
    const { dateTime, icon, temp } = props;

    return (
        <div className="hourly-unit">
            <h6>{dateTime}</h6>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="hourly forecast weather graphic" />
            <h4>{temp}&deg;</h4>
        </div>
    );
};

export default HourlyReading;