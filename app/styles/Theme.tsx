import {StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';
import {createTheming} from '@callstack/react-theme-provider';
import Spacing from './/Spacing';
import {
  BLACK,
  FOREST_GREEN,
  GRAY200,
  GRAY500,
  MILK_WHITE,
  PINK500,
  PURPLE500,
  RED500,
  SEMI_BLACK,
  WARM_PINK,
  WHITE,
} from './Color';

const {ThemeProvider, withTheme, useTheme} = createTheming({
  fontFamily: {
    base: {
      light: 'HKGrotesk-Light',
      regular: 'HKGrotesk-Regular',
      medium: 'HKGrotesk-Medium',
      semibold: 'HKGrotesk-SemiBold',
      bold: 'HKGrotesk-Bold',
    },
    decorative: {
      light: 'Recoleta-Light',
      regular: 'Recoleta-Regular',
      medium: 'Recoleta-Medium',
      semibold: 'Recoleta-SemiBold',
      bold: 'Recoleta-Bold',
    },
    alternative: {
      light: 'RecoletaAlt-Light',
      regular: 'RecoletaAlt-Regular',
      medium: 'RecoletaAlt-Medium',
      semibold: 'RecoletaAlt-SemiBold',
      bold: 'RecoletaAlt-Bold',
    },
  },
  fontSize: {
    header: Spacing[28],
    subheader: Spacing[20],
    input: Spacing[18],
    action: Spacing[16],
    body: Spacing[12],
    label: Spacing[14],
    validation: Spacing[12],
  },
  colors: {
    primaryColor: WARM_PINK,
    secondaryColor: PURPLE500,
    textColor: SEMI_BLACK,
    labelColor: SEMI_BLACK,
    borderColor: GRAY500,
    placeholderColor: GRAY200,
    errorColor: RED500,
    dark: BLACK,
    light: WHITE,
    actionBackgroundColor: MILK_WHITE,
    successColor: FOREST_GREEN,
  },
  screenInset: Spacing[24],
  roundness: Spacing[24],
  spacings: Spacing,
  borderWidth: {
    default: StyleSheet.hairlineWidth,
    '0': 0,
    '2': Spacing[2],
    '4': Spacing[4],
  },
  buttonHeight: Spacing[48],
  inputHeight: Spacing[60],
  inputAreaHeight: ms(100),
  shadowColor: {
    default: BLACK,
    primary: PINK500,
  },
});

export type ThemeType = typeof useTheme;
export {ThemeProvider, withTheme, useTheme};
