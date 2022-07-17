import React from 'react';
import { Wrapper, ButtonText } from './styled';

const ForecastButton = ({ onPress }) => {

  return (
    <Wrapper onPress={onPress}>
      <ButtonText>Tomorrow</ButtonText>
    </Wrapper>
  )
};

export default ForecastButton;