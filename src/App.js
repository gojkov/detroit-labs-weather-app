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


  return (
    <div className="App">
      
    </div>
  );
};