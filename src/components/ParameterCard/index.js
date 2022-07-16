import React from 'react';
import { 
  MainWrapper,
  ParameterAndValueWrapper,
  Parameter,
  Value
} from './styled';

const ParameterCard = () => {

  return (
    <MainWrapper>
      <Parameter>icono</Parameter>
      <ParameterAndValueWrapper>
        <Parameter>Parametro</Parameter>
        <Value>Valor</Value>
      </ParameterAndValueWrapper>
    </MainWrapper>
  )

};

export default ParameterCard;