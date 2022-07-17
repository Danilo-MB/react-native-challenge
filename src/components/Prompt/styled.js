import styled from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native';
import { getFont, colors } from '../../utils';

export const Wrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
`;

export const ModalView = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.white};
  border-radius: 20px;
  align-items: center;
  width: ${props => props.width};
  height: 150px;
`;
export const Title = styled(Text)`
  font-size: 15px;
  ${getFont('Poppins', '600')};
  color: ${colors.black};
  padding-bottom: 8px;
`;
export const Location = styled(Text)`
  font-size: 16px;
  ${getFont('Poppins', '600')};
  color: ${colors.gray};
`;

export const TextWrapper = styled(View)`
  flex-direction: column;
  align-items: center;
  padding-left: 10px; 
  padding-top: 10px;
  flex: 1;
  justify-content: center;
`;

export const ButtonWrapper = styled(View)`
  border-top-color: ${colors.gray};
  border-top-width: 1px;
  width: 100%;
  height: 50px;
`;

export const Button = styled(TouchableOpacity)`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled(Text)`
  font-size: 16px;
  color: ${colors.blue};
  ${getFont('Poppins', '600')};
`;
