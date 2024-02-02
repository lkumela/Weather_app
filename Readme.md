# Weather App
Welcome to our Node.js-based Weather App! This application allows you to access real-time weather data for any city of your choice, right at your fingertips.

## Features
- Retrieve current weather data by simply entering the city name.
- Detailed weather information including temperature, wind speed, pressure, humidity, ‘feels like’ temperature, cloud cover, and visibility.
- Interactive map display of the selected city.

## Installation
1. Clone the repository to your local machine.
2. Install node.js if not already installed.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm install axios` to install axios.
5. Run `npm install leaflet` to install leaflet.
6. Update your API key: Replace `<YOUR_API_KEY>` in `server.js` with your actual weatherstack API key (https://weatherstack.com/ you can take it from here for free).
7. Run `npm start` to run the server.
8. Open your web browser and navigate to `http://localhost:3000`to access the application.

## Usage
- Enter the name of a city in the provided input field and click “Get Weather” to fetch the current weather data.
- Use the interactive map on the page to explore the selected city.

## Technologies Used
- Node.js
- Express.js
- Axios
- Leaflet (for map display)

## Author
Łukasz Kumela