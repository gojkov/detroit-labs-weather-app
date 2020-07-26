import React, { useContext, useEffect } from 'react';
import { GlobalStoreContext } from './Store';
import axios from 'axios';

import './App.css';

export default function App() {
  const API_KEY = `bb10b69a4c319571b3ff6623ff802dea`;
  const [globalStore, setGlobalStore] = useContext(GlobalStoreContext);

  useEffect(() => {
    getLocation();
    // eslint-disable-next-line
  }, [globalStore.latitude]);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {

      },
      err => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        getIP();
      }
    );
  };

  const getIP = async () => {
    const IP_URL_HOME = 'https://ipapi.co/json/';
    const json = await axios.get(IP_URL_HOME);
    setGlobalStore({
      ...globalStore,
      latitude: json.data.latitude,
      longitude: json.data.longitude,
      city: json.data.city
    });
  };

  const getWeatherAndForecast = async (lat, lng) => {
    const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=imperial`;
    const FORECAST_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=imperial`;

    axios.all([axios.get(CURRENT_WEATHER_URL), axios.get(FORECAST_API_URL)])
      .then(([currentWeather, forecast]) => {
        setGlobalStore({
          ...globalStore,
          latitude: lat,
          longitude: lng,
          city: currentWeather.data.name,
          currentTemp: Math.round(currentWeather.data.main.temp),
          icon: currentWeather.data.weather[0].icon,
          JSON: forecast.data.list,
          isAppLoaded: true
        });
        console.log(globalStore);
      });
  };


  return (
    <div className="App">
      
    </div>
  );
};