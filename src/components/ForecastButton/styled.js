import styled from 'styled-components';
import { TouchableOpacity, Text } from 'react-native';

export const Wrapper = styled(TouchableOpacity)`
  background-color: lightblue;
  padding-left: 15px;
  padding-top: 5px;
  padding-right: 15px;
  padding-bottom: 5px;
  border-width: 1px;
  border-color: lightblue;
  border-radius: 9px;
`;

export const ButtonText = styled(Text)`
  color: white;
`;