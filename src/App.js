import React, { useContext, useEffect } from 'react';
import { GlobalStoreContext } from './Store';

import CurrentTemp from './components/CurrentTemp';
import Forecast from './components/Forecast';

import axios from 'axios';
import Loader from 'react-loader-spinner';
import SimpleBar from 'simplebar-react';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'simplebar/dist/simplebar.min.css';
import './App.css';

export default function App() {
    const API_KEY = `bb10b69a4c319571b3ff6623ff802dea`;
    const [globalStore, setGlobalStore] = useContext(GlobalStoreContext);

    // Call getLocation() function upon app successfully mounting
    useEffect(() => {
        getLocation();
        // eslint-disable-next-line
    }, []);

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(
            // If use of location is allowed, retrieve from HTML5 Geolocation API
            (position) => {
                getWeatherAndForecast(
                    position.coords.latitude,
                    position.coords.longitude
                );
            },
            // If use of location is refused, retrieve coordinates via IP address
            (err) => {
                console.warn(`ERROR(${err.code}): ${err.message}`);
                getIP();
            }
        );
    };

    const getIP = async () => {
        const IP_API_KEY = `692425e26661c560e75e3f79adcc1567`;
        const IP_URL = `https://api.ipstack.com/check?access_key=${IP_API_KEY}&format=1`;
        const json = await axios.get(IP_URL);

        setGlobalStore({
            ...globalStore,
            latitude: json.data.latitude,
            longitude: json.data.longitude,
            city: json.data.city,
        });

        // Once IP API has retrieved location data, call function retrieving current temp data and 5-day forecast
        // based on the coordinates passed to it
        getWeatherAndForecast(json.data.latitude, json.data.longitude);
    };

    const getWeatherAndForecast = async (lat, lng) => {
        // OpenWeatherMap API requires separate calls on free plan
        const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=imperial`;
        const FORECAST_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=imperial`;

        await axios
            // call both APIs
            .all([axios.get(CURRENT_WEATHER_URL), axios.get(FORECAST_API_URL)])
            // when data for BOTH comes back, set the data as new state
            .then(([currentWeather, forecast]) => {
                setGlobalStore({
                    ...globalStore,
                    latitude: lat,
                    longitude: lng,
                    city: currentWeather.data.name,
                    currentTemp: Math.round(currentWeather.data.main.temp),
                    icon: currentWeather.data.weather[0].icon,
                    JSON: forecast.data.list,
                    isAppLoaded: true,
                });
            });
    };

    return globalStore.isAppLoaded ? (
        // If API calls return completed, render app
        <div className="App">
            <CurrentTemp />
            <SimpleBar style={{ maxHeight: 300 }}>
                <Forecast />
            </SimpleBar>
        </div>
    ) : (
        // Until the API calls return our data, display loading spinner
        <div className="spinner-container">
            <Loader
                className="spinner"
                type="Grid"
                color="ivory"
                height={80}
                width={80}
            />
        </div>
    );
}
