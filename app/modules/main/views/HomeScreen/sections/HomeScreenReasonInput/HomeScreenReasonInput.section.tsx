//#region IMPORT
//IMPORT MODULE
import moment from 'moment';
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
  scheduledTime: Date;
  reason?: string;
  onClickReason(): void;
  onClickTime(): void;
}
//#endregion
const HomeScreenSelectPatient: React.FC<Props> = ({
  scheduledTime,
  reason,
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
            <Text style={style.buttonAddSymptomText}>
              {!reason
                ? 'Add reasons'
                : reason.length > 13
                ? `${reason.substr(0, 13)}...`
                : reason}
            </Text>
          </View>
          <MButton action={onClickTime}>
            <View
              style={
                scheduledTime
                  ? style.buttonTimeContainerSelected
                  : style.buttonTimeContainer
              }>
              <Icon name="clock" size={16} color={theme.colors.surface} />
              <Text style={style.buttonTimeText}>
                {scheduledTime
                  ? `${moment(scheduledTime).format('DD MMM H:mm')} - ${moment(
                      scheduledTime,
                    )
                      .add(1, 'hours')
                      .format('H:mm')} `
                  : 'Now'}
              </Text>
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
