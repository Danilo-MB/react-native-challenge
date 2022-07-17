import axios from 'axios';

const API_KEY = '6be8c28794924ed8a2a184922222905';

const path = (apiUrl, city) => `http://api.weatherapi.com/v1/${apiUrl}?key=${API_KEY}&q=${city}`;

export const getCurrentCityInfo = async (city) => {
  try {
    const response = await axios.get(path('current.json', city));
    // /console.log(response.data, 'response')
    return response.data;
  } catch (error) {
    if (error.reponse) {
      return error.response;
    }
    return ({message: error.message});
  }
};

export const searchCity = async (city) => {
  try {
    const response = await axios.get(path('search.json', city));
    //console.log(response.data, 'response.data')
    return response.data;
  } catch (error) {
    if (error.reponse) {
      return error.response;
    }
    return ({message: error.message});
  }
};

// export const getOtherCities = async () => {
//   const cityNames = ['Villa Lugano', 'Monoto', 'Boruku', 'Glenover', 'Hoag'];
//   const cities = [];
//   cityNames.map((city, index) => {
//     cities[index] = await getCurrentCityInfo(city);
//   })
//   return cities;
// };

export const getOtherCities = async () => {
  const cityNames = ['Villa Lugano', 'Monoto', 'Boruku', 'Glenover', 'Hoag'];
  let cities = [];
  for (let city of cityNames) {
    getCurrentCityInfo(city).then((res => cities.push(res)))
  }
  // console.log(cities, 'array de ciudades')
  return cities;
};