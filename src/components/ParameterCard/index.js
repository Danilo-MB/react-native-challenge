import React from 'react';
import { Image } from 'react-native';
import { 
  MainWrapper,
  ParameterAndValueWrapper,
  Parameter,
  Value
} from './styled';

const ParameterCard = ({ iconUrl, parameter, value}) => {

  return (
    <MainWrapper>
    <Image 
        source={{uri: iconUrl}}
        style={{width: 40, height: 40}} 
      />
      <ParameterAndValueWrapper>
        <Parameter>{parameter}</Parameter>
        <Value>{value}</Value>
      </ParameterAndValueWrapper>
    </MainWrapper>
  )

};

export default ParameterCard;