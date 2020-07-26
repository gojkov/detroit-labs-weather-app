import React, { useContext } from 'react';
import { GlobalStoreContext } from './Store';

import './App.css';

export default function App() {
  const API_KEY = `bb10b69a4c319571b3ff6623ff802dea`;
  const [globalStore, setGlobalStore] = useContext(GlobalStoreContext);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {

      },
      err => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
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
}