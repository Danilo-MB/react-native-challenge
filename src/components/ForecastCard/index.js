import React from 'react';
import { 
  MainWrapper,
  DayPhase,
  Temperature,
} from './styled';

const ForecastCard = () => {

  return (
    <MainWrapper>
      <DayPhase>Tarde</DayPhase>
      <Temperature>Aca va el icono</Temperature>
      <Temperature>19</Temperature>
    </MainWrapper>
  )

};

export default ForecastCard;