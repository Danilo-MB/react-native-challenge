import styled from 'styled-components';
import { View, Text, ScrollView } from 'react-native';

export const MainWrapper = styled(View)`
  display: flex;
  flex-direcion: column;
  background-color: #7146e8;
  flex: 1;
`;

export const DateWrapper = styled(View)`
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 10px;
`;

export const Date = styled(Text)`

`;

export const InputWrapper = styled(View)`
  padding-left: 20px;
  padding-right: 20px;
`;

export const OtherCitiesSection = styled(ScrollView)`
  padding-left: 20px;
`;

export const OtherCitiesWrapper = styled(View)`
  flex-direction: row;
  padding-right: 35px;
  padding-bottom: 50px;
  align-items: flex-end;
`;