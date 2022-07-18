import React from 'react';
import {Image} from 'react-native';
import {MainWrapper, DayPhase, Temperature, Humidity} from './styled';

const ForecastCard = ({dayPhase, iconUrl, temp, humidity, isCurrent}) => {
  return (
    <MainWrapper>
      <DayPhase isCurrent={isCurrent}>{dayPhase}</DayPhase>
      <Image
        source={{uri: iconUrl}}
        style={{width: 30, height: 30}}
        resizeMode="contain"
      />
      <Temperature>{`${temp}ºC`}</Temperature>
      <Humidity>{`${humidity}%`}</Humidity>
    </MainWrapper>
  );
};

export default ForecastCard;
