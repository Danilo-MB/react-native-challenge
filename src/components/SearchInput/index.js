import React from 'react';
import { StyledInput } from './styled';

const SearchInput = ({ leftIcon, rightIcon, value, onChange, placeholder }) => {

  return (
    <StyledInput
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      value={value}
      onChangeText={text => onChange(text)}
      placeholder={placeholder}
    />
  );
  
};

export default SearchInput;