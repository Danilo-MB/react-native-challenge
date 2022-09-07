import axios from 'axios';
import {API_KEY, BASE_URL} from '@env'

const path = (apiUrl, city, forecast = '') =>
  `${BASE_URL}/${apiUrl}?key=${API_KEY}&q=${city}${forecast}`;

export const getCurrentCityInfo = async city => {
  try {
    const response = await axios.get(path('current.json', city));
    return response.data;
  } catch (error) {
    console.log(error.response, 'error en getCurrentCityInfoespon')
    throw error;
  }
};

export const searchCity = async city => {
  try {
    if (!city) return [];
    const response = await axios.get(path('search.json', city));
    return response.data;
  } catch (error) {
    console.log(error.response, 'error en search city')
    throw error;
  }
};

export const getOtherCities = async () => {
  const cityNames = ['Villa Lugano', 'Tokio', 'Boruku', 'Glenover', 'Hoag'];
  const cities = [];
  await Promise.all(
    cityNames.map(city => {
      return getCurrentCityInfo(city).then(res => cities.push(res));
    }),
  );

  return cities;
};

export const getTodayAndTomorrowForecast = async city => {
  try {
    const response = await axios.get(
      path('forecast.json', city, '&days=2&aqi=no&alerts=no'),
    );
    return response.data.forecast.forecastday;
  } catch (error) {
    throw error;
  }
};
