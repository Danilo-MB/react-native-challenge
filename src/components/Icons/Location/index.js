import React from 'react';
import { View } from 'react-native';
import { SvgCss } from 'react-native-svg';

const xml = (color, width, height) => `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C10.7369 19.9226 9.56619 18.7415 8.5 17.469C6.9 15.558 5 12.712 5 9.99999C4.99858 7.16754 6.70425 4.61338 9.32107 3.52939C11.9379 2.44539 14.9501 3.04523 16.952 5.04899C18.2685 6.3596 19.0059 8.14238 19 9.99999C19 12.712 17.1 15.558 15.5 17.469C14.4338 18.7415 13.2631 19.9226 12 21ZM12 4.99999C9.23995 5.0033 7.00331 7.23994 7 9.99999C7 11.166 7.527 13.185 10.035 16.186C10.6531 16.924 11.309 17.6297 12 18.3C12.691 17.6304 13.3472 16.9259 13.966 16.189C16.473 13.184 17 11.165 17 9.99999C16.9967 7.23994 14.7601 5.0033 12 4.99999ZM12 13C10.3431 13 9 11.6568 9 9.99999C9 8.34313 10.3431 6.99999 12 6.99999C13.6569 6.99999 15 8.34313 15 9.99999C15 10.7956 14.6839 11.5587 14.1213 12.1213C13.5587 12.6839 12.7957 13 12 13Z" 
      fill="${color}">
    </path>
  </svg>
`;

export default ({ color, width, height }) => {
  return (
    <View style={{ width: width, height: height }}>
      <SvgCss xml={xml(color, width, height)} width="100%" height="100%" />
    </View>
  );
};
