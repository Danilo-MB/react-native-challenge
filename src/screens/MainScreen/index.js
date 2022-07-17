import React, { useState, useEffect } from 'react';
import { Dimensions, View } from 'react-native';
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
import { getCurrentCityInfo, searchCity } from '../../services/api/forecast';
import SliderIcon from '../../components/Icons/Slider';
import LocationIcon from '../../components/Icons/Location';
import GradientBackground from '../../components/GradientBackground';
import Geolocation from '@react-native-community/geolocation';
import Prompt from '../../components/Prompt';
import moment from 'moment';

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
    ).then((cities) => setDefaultCity(cities[0]));
  }, []);

  useEffect(() => {
    getCurrentCityInfo(defaultCity.name).then((city) => setSelectedCity(city));
  }, []);

  const onChangeFilter = filter => {
    setIsSearching(true);
    setFilter(filter);
    searchCity(filter).then((cities) => setSearchResult(cities));
  };

  const onSelectCity = (city) => {
    console.log('entro')
    setIsSearching(false);
    getCurrentCityInfo(city).then((city) => setSelectedCity(city));
  };
  console.log(selectedCity, 'SELECTED CITY')

  if (!selectedCity) return null;

  return (
    <MainWrapper>
    <Prompt
      location={defaultCity ? defaultCity.name : 'No localization'}
    />
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
          onChange={onChangeFilter}
          onPressResult={(result) => onSelectCity(result)}
          leftIcon={<LocationIcon color='gray' width={24} height={24} />}
          rightIcon={<SliderIcon color='gray' width={24} height={24} />}
          showResultsSection={isSearching}
          resultList={searchResult}
        />
      </InputWrapper>
      <MainCard 
        iconUrl={selectedCity.current?.condition.icon}
        temperature={`${selectedCity.current?.temp_c}ºC`}
        wind={selectedCity.current?.wind_kph}
        humidt={`${selectedCity.current?.humidity}%`}
        goToDetail={() => navigation.navigate('DetailScreen')}
      />
      <OtherCitiesHeaderSection>
        <OtherCitiesHeader>Other Cities</OtherCitiesHeader>
      </OtherCitiesHeaderSection>
      <OtherCitiesSection horizontal={true}>
        <OtherCitiesWrapper>
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
        </OtherCitiesWrapper>
      </OtherCitiesSection>

    </MainWrapper>

  )
}

export default MainScreen;