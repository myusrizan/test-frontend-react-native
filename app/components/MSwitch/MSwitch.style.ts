import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {ITheme} from '../../config/Theme.config';

interface Style {
  container: ViewStyle;
  animation: ViewStyle;
  option: ViewStyle;
  optionText: TextStyle;
  optionActiveText: TextStyle;
}
const getStyles = (theme?: ITheme) =>
  StyleSheet.create<Style>({
    container: {
      borderWidth: 1,
      borderRadius: 8,
      borderColor: theme.colors.border,
      height: 40,
      flexDirection: 'row',
      alignSelf: 'flex-start',
      backgroundColor: theme.colors.primarySoft,
    },
    animation: {
      position: 'absolute',
      borderRadius: 8,
      backgroundColor: theme.colors.surface,
      height: 40,
      width: 150,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    option: {
      width: 150,
      flex: 1,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 12,
      elevation: 12,
    },
    optionText: {
      color: theme.colors.grey,
    },
    optionActiveText: {
      position: 'absolute',
      zIndex: 12,
      elevation: 12,
      fontWeight: '700',
      color: theme.colors.primary,
    },
  });

export default getStyles;
