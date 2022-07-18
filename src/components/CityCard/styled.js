import styled from 'styled-components';
import {View, Text} from 'react-native';
import {getFont, colors} from '../../utils';

export const MainWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.purple};
  border-color: ${colors.purple};
  border-radius: 35px;
  padding-left: 20px;
  height: 140px;
  width: 200px;
  margin-right: 9px;
`;

export const IconAndCityWrapper = styled(View)`
  flex-direction: row;
  margin-bottom: 20px;
  margin-right: 20px;
  justify-content: space-between;
`;

export const CityWrapper = styled(View)`
  flex-direction: column;
  padding-left: 10px;
  width: 120px;
`;

export const City = styled(Text)`
  color: ${colors.white};
  ${getFont('Poppins', '500')};
  font-size: 20px;
`;

export const Location = styled(Text)`
  color: ${colors.white};
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
  color: ${colors.lightBlue};
  ${getFont('Poppins', '700')};
  font-size: 10px;
  text-align: center;
`;

export const Value = styled(Text)`
  color: ${colors.white};
  ${getFont('Poppins', '400')};
  font-size: 20px;
  text-align: center;
`;
