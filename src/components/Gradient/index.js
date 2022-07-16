import React from 'react';
import { Svg, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';

const Gradient = ({colorFrom, colorTo, id, orientation, borderRadius, height}) => {
  
  // Linear gradient values:
  let x1 = '0';
  let y1 = '1';

  if (orientation === 'horizontal') {
    x1 = '1';
    y1 = '0';
  }

  return (
    <Svg height={height} width="100%" orientation={orientation}>
      <Defs>
        <LinearGradient id={id} x1={x1} y1={y1} x2="0" y2="0">
          <Stop offset="0" stopColor={colorFrom} stopOpacity="1" />
          <Stop offset="1" stopColor={colorTo} stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <Rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill={`url(#${id})`}
        stroke="none" // borderColor
        rx={borderRadius}
      />
    </Svg>
  );
};

export default Gradient;