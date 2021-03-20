import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput, useTheme} from 'react-native-paper';
import MChips from '../../../../../../components/MChips';
import {ITheme} from '../../../../../../config/Theme.config';
import getStyles from './PatientBottomSheet.component.style';

interface Props {
  handlePresentModalPatientClose(input: string): void;
}

const PatientBottomSheet: React.FC<Props> = ({
  handlePresentModalPatientClose,
}: Props) => {
  //#region GENERAL
  const theme = (useTheme() as unknown) as ITheme;
  const styles = getStyles(theme);
  const [patientInput, setPatientInput] = useState('');
  //#endregion

  return (
    <View style={styles.container}>
      <View style={styles.containerBottomSheet}>
        <View style={styles.bottomSheetInputContainer}>
          <Text style={styles.bottomSheetTitle}>Add new patient</Text>
          <Text style={styles.bottomSheetSubtitle}>
            Please input new patient name:
          </Text>
          <TextInput
            mode="outlined"
            onChange={(e) => {
              setPatientInput(e.nativeEvent.text);
            }}
            value={patientInput}
            style={styles.bottomSheetInput}
            theme={{
              colors: {
                text: theme.colors.text,
                placeholder: theme.colors.placeHolder,
              },
            }}
            placeholder="e.g. Arnoldus Franco"
          />
        </View>
      </View>
      <View style={styles.action}>
        <MChips
          label="Done"
          labelColor={theme.colors.primary}
          containerStyle={styles.actionButtonBottomSheet}
          onClick={() => handlePresentModalPatientClose(patientInput)}
        />
      </View>
    </View>
  );
};

export default PatientBottomSheet;
