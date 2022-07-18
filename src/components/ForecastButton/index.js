import React from 'react';
import { Wrapper, ButtonText } from './styled';

const ForecastButton = ({ handlePress, title }) => {

  return (
    <Wrapper onPress={handlePress}>
      <ButtonText>{title}</ButtonText>
    </Wrapper>
  )
};

export default ForecastButton;