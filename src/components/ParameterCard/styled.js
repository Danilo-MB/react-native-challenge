import styled from 'styled-components';
import {View, Text} from 'react-native';
import {getFont, colors} from '../../utils';

export const MainWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.white};
  border-color: ${colors.lightGray};
  border-width: 3px;
  border-radius: 18px;
  height: 70px;
  width: 180px;
  padding: 10px;
  margin-bottom: 20px;
`;

export const ParameterAndValueWrapper = styled(View)`
  flex-direction: column;
`;

export const Parameter = styled(Text)`
  font-size: 16px;
  ${getFont('Poppins', '700')};
  color: ${colors.black};
`;

export const Value = styled(Text)`
  font-size: 14px;
  ${getFont('Poppins', '600')};
  color: ${colors.black};
`;
