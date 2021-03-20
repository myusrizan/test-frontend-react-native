import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {ITheme} from '../../config/Theme.config';

interface Style {
  container: ViewStyle;
  containerSelected: ViewStyle;
  selectionContainer: ViewStyle;
  title: TextStyle;
}

const getStyles = (theme?: ITheme) => {
  return StyleSheet.create<Style>({
    container: {
      borderRadius: 8,
      backgroundColor: theme.colors.surface,
      paddingHorizontal: 8,
      paddingVertical: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    containerSelected: {
      borderRadius: 8,
      backgroundColor: theme.colors.surface,
      paddingHorizontal: 8,
      borderWidth: 1,
      borderColor: theme.colors.primary,
      paddingVertical: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    selectionContainer: {display: 'flex', flexDirection: 'row'},
    title: {
      fontSize: 16,
      color: theme.colors.text,
    },
  });
};

export default getStyles;
