//#region IMPORT
//IMPORT MODULE
import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {MButton} from '../../../../../../components';
//IMPORT CONFIG
import {ITheme} from '../../../../../../config/Theme.config';
import getStyles from './HomeScreenReasonInput.section.style';
//#endregion

//#region INTERFACE
interface Props {
  onClickReason(): void;
  onClickTime(): void;
}
//#endregion
const HomeScreenSelectPatient: React.FC<Props> = ({
  onClickReason,
  onClickTime,
}: Props) => {
  //#region GENERAL
  const theme = (useTheme() as unknown) as ITheme;
  const style = getStyles(theme);
  //#endregion
  return (
    <View style={style.container}>
      <TouchableWithoutFeedback onPress={onClickReason}>
        <View style={style.buttonContainer}>
          <View style={style.buttonAddSymptom}>
            <Icon name="magnify" size={25} color={theme.colors.primary} />
            <Text style={style.buttonAddSymptomText}>Add reasons</Text>
          </View>
          <MButton action={onClickTime}>
            <View style={style.buttonTimeContainer}>
              <Icon name="clock" size={16} color={theme.colors.surface} />
              <Text style={style.buttonTimeText}>Now</Text>
              <Icon
                name="chevron-down"
                size={16}
                color={theme.colors.surface}
              />
            </View>
          </MButton>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default HomeScreenSelectPatient;
