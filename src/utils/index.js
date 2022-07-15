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