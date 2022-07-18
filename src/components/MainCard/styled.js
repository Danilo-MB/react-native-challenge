import styled from 'styled-components';
import {View, Text, Dimensions} from 'react-native';
import {getFont, colors} from '../../utils';

const height = Dimensions.get('window').height;

export const MainWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
  margin-bottom: ${height - height * 0.99}px;
`;

export const TempratureWrapper = styled(View)`
  align-items: flex-start;
`;

export const Temperature = styled(Text)`
  color: ${colors.lightBlue};
  ${getFont('Poppins', '700')};
  font-size: 75px;
  text-align: center;
`;

export const IconAndDataSectionWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const DataSectionWrapper = styled(View)`
  flex-direction: column;
  align-items: flex-start;
`;

export const WeatherDataItem = styled(View)`
  flex-direcion: column;
  padding: 20px;
  justify-content: flex-start;
`;

export const DataItemHeader = styled(Text)`
  color: ${colors.lightBlue};
  ${getFont('Poppins', '600')};
  font-size: 15px;
`;

export const DataItemInfo = styled(Text)`
  color: ${colors.white};
  ${getFont('Poppins', '600')};
  font-size: 25px;
`;
