import styled from 'styled-components';
import { View, Text } from 'react-native';
import { getFont } from '../../utils';

export const MainWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-color: #ebf1fa;
  border-width: 3px;
  border-radius: 18px;
  height: 70px;
  width: 160px;
  padding: 10px;
  margin-bottom: 20px;
`;

export const ParameterAndValueWrapper = styled(View)`
  flex-direction: column;
`;

export const Parameter = styled(Text)`
  font-size: 16px;
  ${getFont('Poppins', '700')};
  color: black;
`;

export const Value = styled(Text)`
  font-size: 14px;
  ${getFont('Poppins', '600')};
  color: black;
`;