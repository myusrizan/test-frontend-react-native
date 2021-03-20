import * as Animatable from 'react-native-animatable';

export default () => {
  Animatable.initializeRegistryWithDefinitions({
    onPressSwitchA: {
      0: {
        ['translateX']: 150,
      },
      0.8: {
        ['translateX']: -20,
      },
      1: {
        ['translateX']: 0,
      },
    },
    onPressSwitchB: {
      0: {
        ['translateX']: 0,
      },
      0.8: {
        ['translateX']: 170,
      },
      1: {
        ['translateX']: 150,
      },
    },
  });
};
