import styled from 'styled-components';
import { View, Text, ScrollView } from 'react-native';
import { getFont } from '../../utils';

export const MainWrapper = styled(View)`
  display: flex;
  flex-direcion: column;
  flex: 1;
`;

export const DateWrapper = styled(View)`
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 0px;
`;

export const Date = styled(Text)`
  font-size: 16px;
  ${getFont('Poppins', '600')};
  color: lightblue;
`;

export const InputWrapper = styled(View)`
  padding-left: 20px;
  padding-right: 20px;
`;

export const OtherCitiesSection = styled(ScrollView)`
  padding-left: 20px;
`;

export const OtherCitiesHeaderSection = styled(View)`
  padding-left: 20px;
`;

export const OtherCitiesHeader = styled(Text)`
  font-size: 16px;
  ${getFont('Poppins', '600')};
  color: lightblue;
`;

export const OtherCitiesWrapper = styled(View)`
  flex-direction: row;
  padding-right: 35px;
  align-items: center;
`;