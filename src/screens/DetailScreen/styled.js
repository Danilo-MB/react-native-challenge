import styled from 'styled-components';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { getFont } from '../../utils';

export const MainWrapper = styled(ScrollView)`
  display: flex;
  flex-direcion: column;
  flex: 1;
  background-color: white;
  `;

export const TopCard = styled(View)`
  flex-direction: row;
  height: 200px;
  width: 100%;
  border-radius: 20px;
  padding-top: 40px;
`;

export const TopCardGoBackWrapper = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 999;
`;

export const TopCardLeftWrapper = styled(View)`
  width: 60%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
`;

export const TopCardRightWrapper = styled(View)`
  width: 40%;
  justify-content: space-between;
  padding: 20px;

`;

export const TopCardTemperature = styled(Text)`
  font-size: 60px;
  ${getFont('Poppins', '700')};
  color: white;
`;

export const TopCardCity = styled(Text)`
  font-size: 18px;
  ${getFont('Poppins', '500')};
  color: white;
`;

export const TopCardTime = styled(Text)`
  font-size: 16px;
  ${getFont('Poppins', '500')};
  color: white;
`;

export const ForecastHeaderWrapper = styled(View)`
  flex-direction: row
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const ForecastHeader = styled(Text)`
  font-size: 16px;
  ${getFont('Poppins', '700')};
  color: black;
`;

export const ForecastWrapper = styled(ScrollView)`
  padding-left: 30px;
  padding-bottom: 30px;
`;

export const ForecastCardsWrapper = styled(View)`
  flex-direction: row;
  padding-right: 35px;
`;

export const BottomCardInnerWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`; 

export const BottomCard = styled(View)`
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-width: 1px;
  border-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-left: 20px;
  padding-top: 30px;
  padding-right: 20px;
  padding-bottom: 10px;
  box-shadow: 0px 0px 1px white;
  elevation: 5;
`;

export const BottomCardTogglerWrapper = styled(View)`
  height: 5px;
  width: 50px;
  background-color: lightblue;
  margin-bottom: 20px;
`;