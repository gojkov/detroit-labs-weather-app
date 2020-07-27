import React from 'react';
import '../styles/HourlyReading.scss';

const HourlyReading = (props) => {
    const { dateTime, icon, temp } = props;

    return (
        <div className="hourly-unit">
            <h5>{dateTime}</h5>
            <img
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="hourly forecast weather graphic"
            />
            <h3>{temp}&deg;</h3>
        </div>
    );
};

export default HourlyReading;
