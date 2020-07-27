import React, { useContext, useEffect } from 'react'
import { GlobalStoreContext } from './Store'

import CurrentTemp from './components/CurrentTemp'
import Forecast from './components/Forecast'

import axios from 'axios'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

import './App.css'

export default function App() {
    const API_KEY = `bb10b69a4c319571b3ff6623ff802dea`
    const [globalStore, setGlobalStore] = useContext(GlobalStoreContext)

    useEffect(() => {
        getLocation()
        // eslint-disable-next-line
    }, [])

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                getWeatherAndForecast(
                    position.coords.latitude,
                    position.coords.longitude
                )
            },
            (err) => {
                console.warn(`ERROR(${err.code}): ${err.message}`)
                getIP()
            }
        )
    }

    const getIP = async () => {
        const IP_API_KEY = `692425e26661c560e75e3f79adcc1567`
        const IP_URL = `https://api.ipstack.com/check?access_key=${IP_API_KEY}&format=1`
        const json = await axios.get(IP_URL)

        setGlobalStore({
            ...globalStore,
            latitude: json.data.latitude,
            longitude: json.data.longitude,
            city: json.data.city,
        })

        getWeatherAndForecast(json.data.latitude, json.data.longitude)
    }

    const getWeatherAndForecast = async (lat, lng) => {
        const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=imperial`
        const FORECAST_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=imperial`

        await axios
            .all([axios.get(CURRENT_WEATHER_URL), axios.get(FORECAST_API_URL)])
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
                })
            })
    }

    return globalStore.isAppLoaded ? (
        <div className="App">
            <CurrentTemp />
            <SimpleBar style={{ maxHeight: 300 }}>
                <Forecast />
            </SimpleBar>
        </div>
    ) : (
        <h2>Application is loading, please be patient...</h2>
    )
}
