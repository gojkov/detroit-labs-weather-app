## Detroit Labs Weather App - Steve Gojkov - July 2020

## Instructions

First, clone this repo

### `git clone https://github.com/gojkov/detroit-labs-weather-app.git`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Technologies used

-   [Create React App](https://create-react-app.dev/)
-   [React Hooks](https://reactjs.org/docs/hooks-overview.html)
-   [Context API](https://reactjs.org/docs/context.html#when-to-use-context)
-   [Sass](https://sass-lang.com/)
-   [Prettier](https://prettier.io/)

#### NPM libraries

-   [Axios](https://www.npmjs.com/package/axios)
-   [React Loader Spinner](https://www.npmjs.com/package/react-loader-spinner)
-   [SimpleBar](https://www.npmjs.com/package/simplebar-react)

#### APIs

-   [HTML5 Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
-   [IPStack](https://ipstack.com/)
-   [OpenWeatherMap](https://openweathermap.org/)

## Requirements Given

To build a simple weather forecast application based on the OpenWeatherMap API.

1. Create a “Current Temperature” page that fetches and displays the current temperature
   at the user’s current location.

2. Add a “5 Day Temperatures” page to your application that fetches and displays the 5 day
   forecast for the user’s current location. Display all of the 3-hourly forecasts within this 5
   day period.

The user should be able to access this "5 Day Forecast" page from the "Current
Temperature" page. You may choose the navigation pattern used. For example, both
pages could be top-level tabs within your application.

Each row in the list should display:
● The forecast date and time
● The forecast temperature in Fahrenheit
● The OpenWeatherMap icon that represents the forecast weather conditions.
