import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {ITheme} from '../../../../../../config/Theme.config';
interface Style {
  container: ViewStyle;
  section: ViewStyle;
  listSymptomChip: ViewStyle;
  selectedSymptomChip: ViewStyle;
  containerBottomSheet: ViewStyle;
  bottomSheetInputContainer: ViewStyle;
  bottomSheetTitle: TextStyle;
  bottomSheetSubtitle: TextStyle;
  actionButtonBottomSheet: ViewStyle;
  bottomSheetInput: ViewStyle;
  action: ViewStyle;
}

const getStyles = (theme?: ITheme) => {
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
    },
    containerBottomSheet: {
      flex: 1,
    },
    bottomSheetInputContainer: {marginHorizontal: 16, marginTop: 8},
    bottomSheetTitle: {fontWeight: '600', fontSize: 18},
    bottomSheetSubtitle: {letterSpacing: 0.5, color: theme.colors.text},
    bottomSheetInput: {
      backgroundColor: theme.colors.primarySoft,
    },
    actionButtonBottomSheet: {
      justifyContent: 'center',
    },
    section: {
      marginHorizontal: 16,
      marginTop: 16,
    },
    action: {
      margin: 16,
    },
    listSymptomChip: {},
    selectedSymptomChip: {backgroundColor: theme.colors.primaryDark},
  });
};

export default getStyles;
