//#region IMPORT
// IMPORT MODULE
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
// IMPORT COMPONENT
import MChips from '../../../../../../components/MChips';

// IMPORT CONFIG
import {ITheme} from '../../../../../../config/Theme.config';
import getStyles from './TimeBottomSheet.component.style';
//#endregion
interface Props {
  handlePresentModalTimeClose(date: Date): void;
  scheduledTime: Date;
}

const TimeBottomSheet: React.FC<Props> = ({
  handlePresentModalTimeClose,
  scheduledTime,
}: Props) => {
  //#region GENERAL
  const [selectedTime, setSelectedTime] = useState(scheduledTime || new Date());
  const currentDate = new Date();
  const theme = (useTheme() as unknown) as ITheme;
  const styles = getStyles(theme);
  //#endregion

  return (
    <View style={styles.container}>
      <View style={styles.containerBottomSheet}>
        <View style={styles.bottomSheetInputContainer}>
          <Text style={styles.bottomSheetTitle}>Schedule appointment</Text>
          <Text style={styles.bottomSheetSubtitle}>
            Please select date and time window
          </Text>
        </View>
        <View style={styles.containerDatePicker}>
          <DatePicker
            style={styles.datePicker}
            date={selectedTime}
            minimumDate={currentDate}
            androidVariant="iosClone"
            mode="datetime"
            minuteInterval={30}
            onDateChange={(e) => setSelectedTime(e)}
          />
        </View>
      </View>
      <View style={styles.action}>
        <MChips
          label="Done"
          labelColor={theme.colors.primary}
          containerStyle={styles.actionButtonBottomSheet}
          onClick={() => handlePresentModalTimeClose(selectedTime)}
        />
      </View>
    </View>
  );
};

export default TimeBottomSheet;
