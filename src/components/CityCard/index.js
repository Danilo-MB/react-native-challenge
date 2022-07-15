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

const CityCard = () => {

  return (
    <MainWrapper>
      <IconAndCityWrapper>
        <Location>Aca va el icono</Location>
        <CityWrapper>
          <Location>Location</Location>
          <City>Ciudad</City>
        </CityWrapper>
      </IconAndCityWrapper>
      <InformationWrapper>
        <ParameterAndValueWrapper>
          <Parameter>Wind</Parameter>
          <Value>356</Value>
        </ParameterAndValueWrapper>
        <ParameterAndValueWrapper>
          <Parameter>Temp</Parameter>
          <Value>18°C</Value>
        </ParameterAndValueWrapper>
        <ParameterAndValueWrapper>
          <Parameter>Humid</Parameter>
          <Value>33%</Value>
        </ParameterAndValueWrapper>

      </InformationWrapper>
    </MainWrapper>
  )


};

export default CityCard;