import React from 'react';
import {View, StyleSheet} from 'react-native';
import Gradient from '../Gradient';

const GradientBackground = ({
  colorFrom,
  colorTo,
  id,
  borderRadius,
  orientation,
  height,
}) => {
  return (
    <View style={styles.wrapper}>
      <Gradient
        colorFrom={colorFrom}
        colorTo={colorTo}
        id={id}
        borderRadius={borderRadius}
        orientation={orientation}
        height={height}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default GradientBackground;
