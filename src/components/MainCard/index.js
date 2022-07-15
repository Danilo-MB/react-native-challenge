import React from 'react';
import { 
  MainWrapper,
  IconAndDataSectionWrapper,
  DataSectionWrapper,
  WeatherDataItem,
  DataItemHeader,
  DataItemInfo,
  TempratureWrapper,
  Temperature,
} from './styled';

const MainCard = () => {
  
  return (
    <MainWrapper>
      <TempratureWrapper>
        <Temperature>18°C</Temperature>
      </TempratureWrapper>
      <IconAndDataSectionWrapper>
        <DataItemHeader>aca va el icono</DataItemHeader>
        <DataSectionWrapper>
          <WeatherDataItem>
            <DataItemHeader>wind</DataItemHeader>
            <DataItemInfo>342</DataItemInfo>
          </WeatherDataItem>
          <WeatherDataItem>
            <DataItemHeader>wind</DataItemHeader>
            <DataItemInfo>342</DataItemInfo>
          </WeatherDataItem>
        </DataSectionWrapper>
      </IconAndDataSectionWrapper>

    </MainWrapper>

  )

};

export default MainCard;