import axios from 'axios';

const API_KEY = '6be8c28794924ed8a2a184922222905';

const path = (apiUrl, city, forecast = '') => `http://api.weatherapi.com/v1/${apiUrl}?key=${API_KEY}&q=${city}${forecast}`;

export const getCurrentCityInfo = async (city) => {
  try {
    const response = await axios.get(path('current.json', city));
    return response.data;
  } catch (error) {
      throw error;
  }
};

export const searchCity = async (city) => {
  try {
    if (!city) return [];
    const response = await axios.get(path('search.json', city));
    return response.data;
  } catch (error) {
      throw error;
  }
};

export const getOtherCities = async () => {
  const cityNames = ['Villa Lugano', 'Tokio', 'Boruku', 'Glenover', 'Hoag'];
  const cities = [];
  await Promise.all(cityNames.map((city) => {
    return getCurrentCityInfo(city).then((res => cities.push(res)))
  }))

  return cities;
};

export const getTodayAndTomorrowForecast = async (city) => {
  try {
    const response = await axios.get(path('forecast.json', city, '&days=2&aqi=no&alerts=no' ));
    return response.data.forecast.forecastday;
  } catch (error) {
      throw error;
  }
};


