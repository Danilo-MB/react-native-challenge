import styled from 'styled-components';
import { View, Text } from 'react-native';
import { getFont } from '../../utils';

export const MainWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #8109eb;
  border-color: #8109eb;
  border-radius: 35px;
  padding-left: 20px;
  height: 140px;
  margin-right: 9px;
`;

export const IconAndCityWrapper = styled(View)`
  flex-direction: row;
  margin-bottom: 20px;
  margin-right: 20px;
`;

export const CityWrapper = styled(View)`
  flex-direction: column;
  padding-left: 10px;
`;

export const City = styled(Text)`
  color: white;
  ${getFont('Poppins', '500')};
  font-size: 20px;
`;

export const Location = styled(Text)`
  color: white;
  ${getFont('Poppins', '500')};
  font-size: 12px;
`;

export const InformationWrapper = styled(View)`
  flex-direction: row;
`;

export const ParameterAndValueWrapper = styled(View)`
  flex-direction: column;
  margin-right: 20px;
  justify-content: center;
`;

export const Parameter = styled(Text)`
  color: lightblue;
  ${getFont('Poppins', '500')};
  font-size: 15px;
  text-align: center;
`;

export const Value = styled(Text)`
  color: white;
  ${getFont('Poppins', '400')};
  font-size: 20px;
  text-align: center;
`;