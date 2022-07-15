import React, { useState, useEffect } from 'react';
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

const MainScreen = () => {
  
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
      <DateWrapper>
        <Date>fecha</Date>
      </DateWrapper>
      <InputWrapper>
        <SearchInput
          placeholder='input'
          onChange={onChangeFilter}
        />
      </InputWrapper>
      <MainCard />
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