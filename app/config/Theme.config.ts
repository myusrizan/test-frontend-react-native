import {DefaultTheme} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 4,
  mode: 'adaptive',
  colors: {
    primary: '#2449FF',
    primary900: '#000E53',
    primary800: '#001BA5',
    primary700: '#0628D5',
    primary600: '#1136F0',
    primary400: '#4F6DFF',
    primary300: '#8095FF',
    primary200: '#A8B6FF',
    primary100: '#C5CFFF',
    primary50: '#E9EDFF',
    primaryLight: '#F2F2FF',
    secondary: '#122480',
    secondary900: '#002C2C',
    secondary800: '#015A59',
    secondary700: '#0C7E7C',
    secondary600: '#2E9E9C',
    secondary400: '#4FD6D3',
    secondary300: '#8FEFED',
    secondary200: '#C1FFFE',
    secondary100: '#C5CFFF',
    secondary50: '#DFFFFE',
    accent: '#F49B1E',
    accent50: '#FEF7E2',
    background: '#F8F8F8',
    surface: '#FFFFFF',
    text: '#0F0F0F',
    text100: '#C9C9C9',
    text400: '#747374',
    text600: '#666666',
    text600o50: 'rgba(102, 102, 102, .5)',
    disabled: '#F6F6F6',
    placeholder: '#C1C1C1',
    backdrop: 'rgba(0, 0, 0, .5)',
    backdrop75: 'rgba(0, 0, 0, .75)',
    transparent: 'rgba(0, 0, 0, 0)',
    notification: '#FFFFFF',
    error: '#FF2F14',
    onSurface: '#0F0F0F',
    onBackground: '#666666',
    border: '#ECECEC',
    successDarken: '#2e7d31',
    success: '#4caf50',
    success50: '#D4E9D8',
    warning: '#f7c436',
  },
};

export type ITheme = {
  roundness: number;
  colors: {
    primary: string;
    primary900: string;
    primary800: string;
    primary700: string;
    primary600: string;
    primary400: string;
    primary300: string;
    primary200: string;
    primary100: string;
    primary50: string;
    primaryLight: string;
    secondary: string;
    secondary900: string;
    secondary800: string;
    secondary700: string;
    secondary600: string;
    secondary400: string;
    secondary300: string;
    secondary200: string;
    secondary100: string;
    secondary50: string;
    accent: string;
    accent50: string;
    background: string;
    surface: string;
    text: string;
    text100: string;
    text400: string;
    text600: string;
    text600o50: string;
    disabled: string;
    placeholder: string;
    backdrop: string;
    backdrop75: string;
    transparent: string;
    notification: string;
    error: string;
    onSurface: string;
    onBackground: string;
    border: string;
    success: string;
    successDarken: string;
    success50: string;
    warning: string;
  };
};

export default theme;
