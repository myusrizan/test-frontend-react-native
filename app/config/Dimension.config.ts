import {Dimensions, StatusBar} from 'react-native';

export const getStatusBarHeight = (): number => {
  return StatusBar.currentHeight || 38;
};
const {width, height} = Dimensions.get('window');

export const dimensions: {width: number; height: number} = {
  width: width,
  height: height,
};
