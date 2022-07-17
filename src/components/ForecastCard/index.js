import React from 'react';
import { Image } from 'react-native';
import { 
  MainWrapper,
  DayPhase,
  Temperature,
  Humidity,
} from './styled';

const ForecastCard = ({ dayPhase, iconUrl, temp, humidity}) => {

  return (
    <MainWrapper>
      <DayPhase>{dayPhase}</DayPhase>
      <Image 
        source={{uri: iconUrl}}
        style={{width: 30, height: 30}} 
      />
      <Temperature>{`${temp}ºC`}</Temperature>
      <Humidity>{`${humidity}%`}</Humidity>
    </MainWrapper>
  )

};

export default ForecastCard;