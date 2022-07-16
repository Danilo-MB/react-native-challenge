import styled from 'styled-components';
import { View, Text } from 'react-native';
import { getFont } from '../../utils';

export const MainWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: lightblue;
  border-color: #8109eb;
  border-radius: 5px;
  height: 140px;
  width: 90px;
  margin-right: 9px;
  padding: 10px;
`;

export const DayPhase = styled(Text)`

`;

export const Temperature = styled(Text)`

`;