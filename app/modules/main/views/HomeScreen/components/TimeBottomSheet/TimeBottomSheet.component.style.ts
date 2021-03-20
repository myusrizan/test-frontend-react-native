import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {dimensions} from '../../../../../../config/Dimension.config';
import {ITheme} from '../../../../../../config/Theme.config';
interface Style {
  container: ViewStyle;
  containerBottomSheet: ViewStyle;
  bottomSheetInputContainer: ViewStyle;
  bottomSheetTitle: TextStyle;
  bottomSheetSubtitle: TextStyle;
  actionButtonBottomSheet: ViewStyle;
  action: ViewStyle;
  containerDatePicker: ViewStyle;
  datePicker: ViewStyle;
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
    actionButtonBottomSheet: {
      justifyContent: 'center',
    },
    containerDatePicker: {
      paddingTop: 20,
    },
    datePicker: {width: dimensions.width, height: 300},
    action: {
      margin: 16,
    },
  });
};

export default getStyles;
