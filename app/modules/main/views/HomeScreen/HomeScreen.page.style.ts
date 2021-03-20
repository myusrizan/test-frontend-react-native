import {StyleSheet, ViewStyle} from 'react-native';
import {ITheme} from '../../../../config/Theme.config';

interface Style {
  container: ViewStyle;
  switchContainer: ViewStyle;
  section: ViewStyle;
}

const getStyles = (theme?: ITheme) => {
  return StyleSheet.create<Style>({
    container: {
      backgroundColor: theme?.colors.surface,
      flex: 1,
    },
    switchContainer: {
      alignSelf: 'center',
    },
    section: {
      marginHorizontal: 16,
      marginTop: 16,
    },
  });
};

export default getStyles;
