import React from 'react';
import { View } from 'react-native';
import { SvgCss } from 'react-native-svg';

const xml = (color, width, height) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <style>.a,.b{fill:none;stroke:${color};stroke-linecap:round;stroke-width:3px;}.a{stroke-linejoin:round;}</style>
    </defs>
    <g transform="translate(-34.107 -53.354)">
      <g transform="translate(-20 -5)">
        <path class="a" d="M717.577,681.5l4.814,5.567L727.2,681.5" transform="translate(742.675 -657.107) rotate(90)"/>
      </g>
      <line class="b" x2="12" transform="translate(38.5 60.5)"/>
    </g>
  </svg>
`;

export default ({ color, width, height }) => {
  return (
    <View style={{ width: width, height: height }}>
      <SvgCss xml={xml(color, width, height)} width="100%" height="100%" />
    </View>
  );
};