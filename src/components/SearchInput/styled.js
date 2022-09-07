import styled from 'styled-components';
import {View, Text, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import {getFont, colors} from '../../utils';

export const MainWrapper = styled(View)`
  
`;

export const StyledInput = styled(Input).attrs({
  textAlign: 'left',
  color: colors.gray,
  fontSize: 15,
  lineSpacing: 23,
  containerStyle: {
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.white,
    backgroundColor: colors.white,
    paddingLeft: 18,
    paddingRight: 10,
  },
})``;

export const ResultsSection = styled(View)`
  display: flex;
  flex-direcition: column;
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 46px;
  background-color: ${colors.white};
  border-width: 1px;
  border-color: ${colors.white};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const ResultWrapper = styled(TouchableOpacity)`
  flex-direction: row;
  padding-left: 18px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  width: 100%;
`;

export const Result = styled(Text)`
  margin-left: 10px;
  font-size: 16px;
  ${getFont('Poppins', '600')};
  color: ${colors.gray};
`;
