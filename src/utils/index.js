import { get } from 'lodash';
import { Platform } from 'react-native';

const androidFontMap = {
  Poppins: {
    300: { fontFamily: 'Poppins-Light', fontWeight: '300' },
    400: { fontFamily: 'Poppins-Regular', fontWeight: '400' },
    500: { fontFamily: 'Poppins-Medium', fontWeight: '500' },
    600: { fontFamily: 'Poppins-SemiBold', fontWeight: '600' },
    700: { fontFamily: 'Poppins-Bold', fontWeight: '700' },
  },
};

export const getFont = (fontFamily, fontWeight) => {
  if (Platform.OS === 'android') {
    return get(androidFontMap, `${fontFamily}.${fontWeight}`, {});
  }

  return { fontFamily, fontWeight };
};

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  gray: '#A7A7A7',
  gray2: '#D9D9D9',
  gray3: '#F8F9F9',
  gray4: '#BABABA',
  grayCamera: '#8e8e8e',
  blue: '#2F66EC',
  ligthBlue: '#2F66EC52',
  shadowBlue: '#2F66EC4D',
  orange: '#FB9B57',
  orange2: '#FA7857',
  orange3: '#FA7957',
  blue2: '#0641CE',
  blue3: '#3269EF',
  cyan: '#7DD5CD',
  cyan2: '#50BEB4',
  green: '#87D701',
  green2: '#67CAC1',
  red: '#F71111',
  loadingGrey: 'rgba(0, 0, 0, 0.7)',
};