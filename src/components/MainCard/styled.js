import styled from 'styled-components';
import { View, Text } from 'react-native';
import { getFont } from '../../utils';

export const MainWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
`;

export const TempratureWrapper = styled(View)`
  align-items: flex-start;
`;

export const Temperature = styled(Text)`
  color: lightblue;
  ${getFont('Poppins', '700')};
  font-size: 75px;
  text-align: center;
`;

export const IconAndDataSectionWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const DataSectionWrapper = styled(View)`
  flex-direction: column;
  align-items: flex-start;
`;

export const WeatherDataItem = styled(View)`
  flex-direcion: column;
  padding: 20px;
  justify-content: flex-start;
`;

export const DataItemHeader = styled(Text)`
  font-size: 15px;
`;

export const DataItemInfo = styled(Text)`
  font-size: 25px;
`;

