const axios = require('axios');

// Function to get latitude and longitude from city name
const getCoordinatesFromCity = async (cityName) => {
  const apiKey = process.env.VITE_GOOGLE_GEOCODING_API_KEY;
  const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&key=${apiKey}`;

  try {
    const response = await axios.get(geocodeUrl);
    if (response.data.status === 'OK') {
      const location = response.data.results[0].geometry.location;
      return location;
    } else {
      throw new Error('Unable to fetch coordinates');
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching location data');
  }
};

module.exports = { getCoordinatesFromCity };
