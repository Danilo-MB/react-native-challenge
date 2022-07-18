import {Dimensions, PixelRatio} from 'react-native';
// Implement according actual desing parameters

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const horizontalScale = SCREEN_WIDTH / 428;
const verticalScale = SCREEN_HEIGHT / 926;

export const normalize = (size, base) => {
  const newSize =
    base === 'height' ? size * verticalScale : size * horizontalScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const normalizeVertical = size => normalize(size, 'height');

export const normalizeHorizontal = size => normalize(size, 'width');

export const normalizeFont = size => normalizeVertical(size);
