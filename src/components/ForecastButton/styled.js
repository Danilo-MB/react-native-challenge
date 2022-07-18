import styled from 'styled-components';
import {TouchableOpacity, Text} from 'react-native';
import {getFont, colors} from '../../utils';

export const Wrapper = styled(TouchableOpacity)`
  background-color: ${colors.blue};
  justify-content: center;
  padding-left: 15px;
  padding-top: 5px;
  padding-right: 15px;
  padding-bottom: 5px;
  border-width: 1px;
  border-color: ${colors.blue};
  border-radius: 9px;
`;

export const ButtonText = styled(Text)`
  font-size: 14px;
  ${getFont('Poppins', '600')};
  color: ${colors.white};
`;
