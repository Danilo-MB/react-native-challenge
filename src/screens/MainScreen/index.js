import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { 
  MainWrapper,
  DateWrapper,
  Date,
  InputWrapper,
  OtherCitiesSection,
  OtherCitiesWrapper,
} from './styled';
import SearchInput from '../../components/SearchInput';
import MainCard from '../../components/MainCard';
import CityCard from '../../components/CityCard';
import { getCurrentCityInfo, searchCity } from '../../services/api/forecast';
import SliderIcon from '../../components/Icons/Slider';
import LocationIcon from '../../components/Icons/Location';
import GradientBackground from '../../components/GradientBackground';

const MainScreen = ({ navigation }) => {

  const height = Dimensions.get('window').height;
  
  const [selectedCity, setSelectedCity] = useState({});
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setSelectedCity(getCurrentCityInfo('London'))
  }, [])

  const onChangeFilter = filter => {
    // setFilter(filter);
    // setSelectedCity(searchCity(filter));
  };

  console.log(selectedCity, 'CIUDAD')

  return (
    <MainWrapper>
      <GradientBackground
        colorFrom='#5c3ac2'
        colorTo='#7762f0'
        id='top-card'
        borderRadius={20}
        orientation={'vertical'}
        height={height}
      />
      <DateWrapper>
        <Date>fecha</Date>
      </DateWrapper>
      <InputWrapper>
        <SearchInput
          onChange={onChangeFilter}
          leftIcon={<LocationIcon color='gray' width={24} height={24} />}
          rightIcon={<SliderIcon color='gray' width={24} height={24} />}
        />
      </InputWrapper>
      <MainCard 
        iconUrl='cdn.weatherapi.com/weather/64x64/night/113.png'
        temperature={`${19}ºC`}
        wind={342}
        humidt={`${19}%`}
        goToDetail={() => navigation.navigate('DetailScreen')}
      />
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