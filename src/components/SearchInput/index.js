import React from 'react';
import {MainWrapper, ResultsSection, ResultWrapper, Result} from './styled';
import {StyledInput} from './styled';
import LocationIcon from '../Icons/Location';

const SearchInput = ({
  leftIcon,
  rightIcon,
  value,
  onChange,
  placeholder,
  showResultsSection = true,
  resultList,
  onPressResult,
}) => {
  return (
    <MainWrapper>
      <StyledInput
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        value={value}
        onChangeText={text => onChange(text)}
        placeholder={placeholder}
      />
      {showResultsSection && (
        <ResultsSection>
          {resultList?.map((result, index) => (
            <ResultWrapper
              key={index}
              onPress={() => onPressResult(result.name)}>
              <LocationIcon color="gray" width={24} height={24} />
              <Result>{result.name}</Result>
            </ResultWrapper>
          ))}
        </ResultsSection>
      )}
    </MainWrapper>
  );
};

export default SearchInput;
