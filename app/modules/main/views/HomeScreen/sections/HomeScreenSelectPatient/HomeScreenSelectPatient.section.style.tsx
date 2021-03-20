import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {ITheme} from '../../../../../../config/Theme.config';

interface Style {
  container: ViewStyle;
  addChips: ViewStyle;
  addChipsWrapper: ViewStyle;
  selectionContainer: ViewStyle;
  title: TextStyle;
  listItem: ViewStyle;
}

const getStyles = (theme?: ITheme) => {
  return StyleSheet.create<Style>({
    container: {backgroundColor: theme.colors.surface},
    selectionContainer: {display: 'flex', flexDirection: 'row'},
    addChips: {paddingHorizontal: 40, margin: 8},
    addChipsWrapper: {
      borderStyle: 'dotted',
      borderWidth: 2,
      borderRadius: 8,
      borderColor: theme.colors.primary,
    },
    listItem: {margin: 8},
    title: {
      fontSize: 16,
      color: theme.colors.text,
    },
  });
};

export default getStyles;
