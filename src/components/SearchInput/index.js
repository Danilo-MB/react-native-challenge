import React from 'react';
import { StyledInput } from './styled';

const SearchInput = props => {
  const {
    leftIcon,
    rightIcon,
    label,
    hideValue,
    errorMessage,
    value,
    onChange,
    placeholder,
  } = props;

  return (
    <StyledInput
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      label={label}
      secureTextEntry={hideValue}
      errorMessage={errorMessage}
      value={value}
      onChangeText={text => onChange(text)}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;