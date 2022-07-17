import React from 'react';
import { 
  MainWrapper,
  IconAndCityWrapper,
  InformationWrapper,
  CityWrapper,
  Location,
  City,
  ParameterAndValueWrapper,
  Parameter,
  Value
} from './styled';
import { Image } from 'react-native';

const CityCard = ({ iconUrl, city, wind, temp, humidt }) => {

  return (
    <MainWrapper>
      <IconAndCityWrapper>
        <Image 
          source={{uri: iconUrl}}
          style={{width: 20, height: 20}} 
        />
        <CityWrapper>
          <Location>Location</Location>
          <City numberOfLines={1}>{city}</City>
        </CityWrapper>
      </IconAndCityWrapper>
      <InformationWrapper>
        <ParameterAndValueWrapper>
          <Parameter>Wind</Parameter>
          <Value>{wind}</Value>
        </ParameterAndValueWrapper>
        <ParameterAndValueWrapper>
          <Parameter>Temp</Parameter>
          <Value>{`${temp}ºC`}</Value>
        </ParameterAndValueWrapper>
        <ParameterAndValueWrapper>
          <Parameter>Humid</Parameter>
          <Value>{`${humidt}%`}</Value>
        </ParameterAndValueWrapper>

      </InformationWrapper>
    </MainWrapper>
  )

};

export default CityCard;