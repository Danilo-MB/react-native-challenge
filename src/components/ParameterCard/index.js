import React from 'react';
import {Image} from 'react-native';
import {
  MainWrapper,
  ParameterAndValueWrapper,
  Parameter,
  Value,
} from './styled';

const ParameterCard = ({source, parameter, value}) => {
  return (
    <MainWrapper>
      <Image
        source={source}
        style={{width: 40, height: 40}}
        resizeMode="contain"
      />
      <ParameterAndValueWrapper>
        <Parameter>{parameter}</Parameter>
        <Value>{value}</Value>
      </ParameterAndValueWrapper>
    </MainWrapper>
  );
};

export default ParameterCard;
