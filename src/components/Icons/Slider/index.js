import React from 'react';
import { View } from 'react-native';
import { SvgCss } from 'react-native-svg';

const xml = (color, width, height) => `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 20C6.17526 20.0009 4.58119 18.7668 4.125 17H2V15H4.126C4.64564 12.9875 6.62012 11.7083 8.66928 12.0566C10.7184 12.4049 12.1594 14.2646 11.9849 16.3358C11.8103 18.4071 10.0786 19.9995 8 20ZM8 14C6.9074 14.0011 6.01789 14.8789 6.00223 15.9713C5.98658 17.0638 6.85057 17.9667 7.94269 17.9991C9.03481 18.0315 9.95083 17.1815 10 16.09V16.49V16C10 14.8954 9.10457 14 8 14ZM22 17H13V15H22V17ZM13 12C11.1756 12.0005 9.58209 10.7664 9.126 9H2V7H9.126C9.64564 4.98745 11.6201 3.70825 13.6693 4.05657C15.7184 4.40488 17.1594 6.26462 16.9849 8.33584C16.8103 10.4071 15.0786 11.9995 13 12ZM13 6C11.9074 6.00111 11.0179 6.87885 11.0022 7.97134C10.9866 9.06384 11.8506 9.96671 12.9427 9.99912C14.0348 10.0315 14.9508 9.1815 15 8.09V8.49001V8C15 6.89544 14.1046 6 13 6ZM22 9H18V7H22V9Z" 
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
