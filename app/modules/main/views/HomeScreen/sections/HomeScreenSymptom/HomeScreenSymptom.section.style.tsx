import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {ITheme} from '../../../../../../config/Theme.config';

interface Style {
  container: ViewStyle;
  containerSymptom: ViewStyle;
  title: TextStyle;
  chipContainer: ViewStyle;
}

const getStyles = (theme?: ITheme) => {
  return StyleSheet.create<Style>({
    container: {},
    containerSymptom: {
      marginTop: 20,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    title: {
      fontSize: 16,
      color: theme.colors.text,
    },
    chipContainer: {marginRight: 10, marginBottom: 16},
  });
};

export default getStyles;
