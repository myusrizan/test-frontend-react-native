import {DefaultTheme} from 'react-native-paper';

const theme: ITheme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    primary: '#62cbc9',
    primarySoft: '#e9f4ff',
    background: '#F8F8F8',
    surface: '#FFFFFF',
    text: '#88929f',
    disabled: '#F6F6F6',
    grey: '#a4a4a4',
    backdrop: 'rgba(0, 0, 0, .5)',
    transparent: 'rgba(0, 0, 0, 0)',
    notification: '#FFFFFF',
    error: '#FF2F14',
    border: '#ECECEC',
    warning: '#f7c436',
  },
};

export type ITheme = {
  roundness: number;
  colors: {
    primary: string;
    primarySoft: string;
    background: string;
    surface: string;
    text: string;
    disabled: string;
    backdrop: string;
    transparent: string;
    notification: string;
    error: string;
    border: string;
    grey: string;
    warning: string;
  };
};

export default theme;
