import {get} from 'lodash';
import {Platform} from 'react-native';

const androidFontMap = {
  Poppins: {
    300: {fontFamily: 'Poppins-Light', fontWeight: '300'},
    400: {fontFamily: 'Poppins-Regular', fontWeight: '400'},
    500: {fontFamily: 'Poppins-Medium', fontWeight: '500'},
    600: {fontFamily: 'Poppins-SemiBold', fontWeight: '600'},
    700: {fontFamily: 'Poppins-Bold', fontWeight: '700'},
  },
};

export const getFont = (fontFamily, fontWeight) => {
  if (Platform.OS === 'android') {
    return get(androidFontMap, `${fontFamily}.${fontWeight}`, {});
  }

  return {fontFamily, fontWeight};
};

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  purple: '#6f23cc',
  lightBlue: '#add8e6',
  lightGray: '#ebf1fa',
  blue: '#2F66EC',
  gray: '#A7A7A7',
  gray2: '#D9D9D9',
  gray3: '#F8F9F9',
  gray4: '#BABABA',
  ligthBlue: '#2F66EC52',
  shadowBlue: '#2F66EC4D',
  red: '#F71111',
};
