const express = require('express');
const axios = require('axios');
const path = require('path'); 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/weather/:city', async (req, res) => {
  const { city } = req.params;
  try {
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    const response = await axios.get(apiUrl);
    const weatherData = response.data;
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});

app.get('/map', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
