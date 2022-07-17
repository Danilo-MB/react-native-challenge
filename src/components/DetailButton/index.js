import React from 'react';
import { Wrapper, ButtonText } from './styled';
import DetailIcon from '../Icons/Detail';

const DetailButton = ({ onPress }) => {

  return (
    <Wrapper onPress={onPress} >
      <ButtonText>Detailed</ButtonText>
      <DetailIcon color='lightblue' width={24} height={24} />
    </Wrapper>
  )
};

export default DetailButton;