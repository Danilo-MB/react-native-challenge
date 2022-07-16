import React from 'react';
import { Image } from 'react-native';
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
import DetailButton from '../DetailButton';

const MainCard = ({ iconUrl, temperature, wind, humidt, goToDetail }) => {
  
  return (
    <MainWrapper>
      <TempratureWrapper>
        <Temperature>{temperature}</Temperature>
      </TempratureWrapper>
      <IconAndDataSectionWrapper>
        <Image 
          source={{uri: iconUrl}}
          style={{width: 200, height: 200}} 
        />
        <DataSectionWrapper>
          <WeatherDataItem>
            <DataItemHeader>wind</DataItemHeader>
            <DataItemInfo>{wind}</DataItemInfo>
          </WeatherDataItem>
          <WeatherDataItem>
            <DataItemHeader>Humidt</DataItemHeader>
            <DataItemInfo>{humidt}</DataItemInfo>
          </WeatherDataItem>
          <DetailButton onPress={goToDetail} />
        </DataSectionWrapper>
      </IconAndDataSectionWrapper>
    </MainWrapper>

  )

};

export default MainCard;