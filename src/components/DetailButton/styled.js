import styled from 'styled-components';
import {TouchableOpacity, Text} from 'react-native';
import {getFont, colors} from '../../utils';

export const Wrapper = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80px;
`;

export const ButtonText = styled(Text)`
  font-size: 14px;
  color: ${colors.lightBlue};
  ${getFont('Poppins', '700')};
`;
