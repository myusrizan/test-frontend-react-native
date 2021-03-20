import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {ITheme} from '../../../../../../config/Theme.config';

interface Style {
  container: ViewStyle;
  buttonContainer: ViewStyle;
  buttonTimeContainer: ViewStyle;
  buttonTimeText: TextStyle;
  buttonAddSymptom: ViewStyle;
  buttonTimeContainerSelected: ViewStyle;
  buttonAddSymptomText: TextStyle;
}

const getStyles = (theme?: ITheme) => {
  return StyleSheet.create<Style>({
    container: {
      borderRadius: 10,
      backgroundColor: theme.colors.primarySoft,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    buttonAddSymptomText: {
      marginLeft: 10,
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    buttonAddSymptom: {
      marginLeft: 20,
      flex: 1,
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
    },
    buttonTimeContainerSelected: {
      display: 'flex',
      flexDirection: 'row',
      margin: 10,
      backgroundColor: theme.colors.primary,
      alignItems: 'center',
      padding: 8,
      borderRadius: 10,
    },
    buttonTimeContainer: {
      display: 'flex',
      flexDirection: 'row',
      margin: 10,
      backgroundColor: theme.colors.warning,
      alignItems: 'center',
      padding: 8,
      borderRadius: 10,
    },
    buttonTimeText: {
      marginHorizontal: 8,
      color: theme.colors.surface,
    },
  });
};

export default getStyles;
