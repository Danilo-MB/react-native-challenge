import styled from 'styled-components';
import { View, Text } from 'react-native';
import { getFont } from '../../utils';

export const MainWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-color: gray;
  border-width: 1px;
  border-radius: 15px;
  height: 70px;
  width: 160px;
  padding: 10px;
  margin-bottom: 20px;
`;

export const ParameterAndValueWrapper = styled(View)`
  flex-direction: column;
`;

export const Parameter = styled(Text)`

`;

export const Value = styled(Text)`

`;