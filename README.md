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

## Handling Ambiguity

-   "How can I demonstrate that I 'go for it'?"
-   "How can I set myself apart in how I approach and complete this project?"
-   "How can I show an exceptional understanding of JavaScript and React?"
-   "How can I at least show great potential if I don't get this perfect?"
-   "How can I exhibit an uncommon drive to get the best out of my ability?"

These were some of the most important, driving questions I asked myself over the course of completing the project. There was a lot of room for interpretation in my outline from Pedro, and whenever a situation arose where I needed to make a decision, I chose to **not** to take the easy way out or 'see what I can get away with'. I do things because they are hard, not because they are easy. I wanted to handle the ambiguity by choosing the harder-but-superior option.

In particular, there was ambiguity around how the user's location was to be determined. Some might have chose an input field for an address, which pulled up a map with their position on it, etc. I chose to leave the user with only 1 decision to make - "Do I grant this site access to my location?" If they allow it, it will autodetect their coordinates from the HTML5 Geolocation API. If they deny it access, it will query IPStock API to determine their coordinates from their IP address. Either path then triggers the OpenWeatherMap API calls. Until that data returns, the user sees a loading spinner. The app switches on when the data returns.

## Time Investment

All JavaScript/React functionality was completed in 8 hours, 42 minutes.

Much more time was taken to refine the CSS and write the README.

In completing, I coded for approximately 20 hours over the course of Friday, July 24 to Tuesday, July 28.
