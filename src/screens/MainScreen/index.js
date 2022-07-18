import React, { useState, useEffect } from 'react';
import { Dimensions, View, Keyboard } from 'react-native';
import { 
  MainWrapper,
  DateWrapper,
  Date,
  InputWrapper,
  OtherCitiesSection,
  OtherCitiesWrapper,
  OtherCitiesHeaderSection,
  OtherCitiesHeader,
} from './styled';
import SearchInput from '../../components/SearchInput';
import MainCard from '../../components/MainCard';
import CityCard from '../../components/CityCard';
import { getCurrentCityInfo, searchCity, getOtherCities } from '../../services/api/forecast';
import SliderIcon from '../../components/Icons/Slider';
import LocationIcon from '../../components/Icons/Location';
import GradientBackground from '../../components/GradientBackground';
import Geolocation from '@react-native-community/geolocation';
import Prompt from '../../components/Prompt';
import moment from 'moment';
import Loading from '../../components/Loading';

const MainScreen = ({ navigation }) => {

  const height = Dimensions.get('window').height;
  const currentDate = `${
    moment().calendar(null, {sameDay: '[Today]'}).toString()
    } ${moment().format('DD MMM')}
  `;
  
  const [selectedCity, setSelectedCity] = useState({});
  const [filter, setFilter] = useState('');
  const [currentLocationCoords, setCurrentLocationCoords] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [defaultCity, setDefaultCity] = useState(null);
  const [isSearching, setIsSearching] = useState(false)
  const [searchResult, setSearchResult] = useState([]);
  const [otherCitiesList, setOtherCitiesList] = useState([]);

  // Geolocation.getCurrentPosition(info => console.log(info, 'geolocal'));

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setCurrentLocationCoords({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      })
    });
    searchCity(
      `${currentLocationCoords.latitude} ${currentLocationCoords.longitude}`
    ).then((cities) => setDefaultCity(cities[0].name));
    getCurrentCityInfo(defaultCity).then((city) => setSelectedCity(city));
    getOtherCities().then((cities) => setOtherCitiesList(cities));
  }, []);

  const onChangeFilter = (filter) => {
    setIsSearching(true);
    setFilter(filter);
    searchCity(filter).then((cities) => setSearchResult(cities));
  };

  const onSelectCity = (city) => {
    setIsSearching(false);
    getCurrentCityInfo(city).then((city) => setSelectedCity(city));
    Keyboard.dismiss();
    setFilter(null);
  };
  // console.log(selectedCity, 'SELECTED CITY')
  // console.log(defaultCity, 'default city')

  // if (!selectedCity) return <Loading />;

  return (
    <>
    <Prompt
      location={!defaultCity ? 'No localization' : defaultCity }
    />
    {!defaultCity ?
    <Loading />
    :
    <MainWrapper>
      <GradientBackground
        colorFrom='#5c3ac2'
        colorTo='#677be0'
        id='top-card'
        borderRadius={20}
        orientation={'vertical'}
        height={height}
      />
      <DateWrapper>
        <Date>{currentDate}</Date>
      </DateWrapper>
      <InputWrapper>
        <SearchInput
          value={filter}
          placeholder={selectedCity.location?.name}
          onChange={onChangeFilter}
          onPressResult={(result) => onSelectCity(result)}
          leftIcon={<LocationIcon color='gray' width={24} height={24} />}
          rightIcon={<SliderIcon color='gray' width={24} height={24} />}
          showResultsSection={isSearching}
          resultList={searchResult}
        />
      </InputWrapper>
      <MainCard 
        iconUrl={'http://cdn.weatherapi.com/weather/64x64/day/113.png'}
        temperature={selectedCity.current?.temp_c}
        wind={selectedCity.current?.wind_kph}
        humidt={selectedCity.current?.humidity}
        goToDetail={() => navigation.navigate('DetailScreen', { city: selectedCity})}
      />
      <OtherCitiesHeaderSection>
        <OtherCitiesHeader>Other Cities</OtherCitiesHeader>
      </OtherCitiesHeaderSection>
      <OtherCitiesSection horizontal={true}>
        <OtherCitiesWrapper>
          {otherCitiesList?.map((city, index) => (
          <CityCard 
            key={index}
            iconUrl={city.current?.condition.icon}
            city={city.location?.name}
            wind={city.current?.wind_kph}
            temp={city.current?.temp_c}
            humidt={city.current?.humidity}
          />))}
        </OtherCitiesWrapper>
      </OtherCitiesSection>
    </MainWrapper>}
    </>
  )
}

export default MainScreen;