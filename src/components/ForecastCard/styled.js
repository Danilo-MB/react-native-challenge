import styled from 'styled-components';
import {View, Text} from 'react-native';
import {getFont, colors} from '../../utils';

export const MainWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #d2dffc;
  border-color: #8109eb;
  border-radius: 5px;
  height: 140px;
  width: 120px;
  margin-right: 20px;
  padding: 10px;
`;

export const DayPhase = styled(Text)`
  font-size: 16px;
  ${props => getFont('Poppins', props.isCurrent ? '700' : '600')};
  color: ${colors.black};
`;

export const Temperature = styled(Text)`
  font-size: 16px;
  ${getFont('Poppins', '600')};
  color: ${colors.black};
`;

export const Humidity = styled(Text)`
  font-size: 16px;
  ${getFont('Poppins', '600')};
  color: ${colors.black};
`;
