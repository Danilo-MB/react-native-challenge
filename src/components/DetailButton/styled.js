import styled from 'styled-components';
import { TouchableOpacity, Text } from 'react-native';

export const Wrapper = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80px;
`;

export const ButtonText = styled(Text)`
  color: white;
`;