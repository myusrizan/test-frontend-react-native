import {StyleSheet, ViewStyle} from 'react-native';
import {ITheme} from '../../config/Theme.config';

interface Style {
  container: ViewStyle;
}

const getStyles = (theme?: ITheme) => {
  return StyleSheet.create<Style>({
    container: {
      backgroundColor: theme?.colors.surface,
      elevation: 0,
    },
  });
};

export default getStyles;
