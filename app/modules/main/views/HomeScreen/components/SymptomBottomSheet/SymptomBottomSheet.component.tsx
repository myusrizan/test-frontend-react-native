import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput, useTheme} from 'react-native-paper';
import MChips from '../../../../../../components/MChips';
import {ITheme} from '../../../../../../config/Theme.config';
import {filterListSymptom} from '../../../../utils';
import {HomeScreenSymptom} from '../../sections';
import getStyles from './SymptomBottomSheet.component.style';

interface Props {
  reason: string;
  selectedSymptom: string[];
  listSymptom: string[];
  handleRemoveSymptom(symptom: string): void;
  handleAddSymptom(symptom: string): void;
  handlePresentModalSymptomClose(input: string): void;
}

const SymptomBottomSheet: React.FC<Props> = ({
  reason,
  selectedSymptom,
  listSymptom,
  handleRemoveSymptom,
  handleAddSymptom,
  handlePresentModalSymptomClose,
}: Props) => {
  //#region GENERAL
  const theme = (useTheme() as unknown) as ITheme;
  const styles = getStyles(theme);
  const [symptomInput, setSymptomInput] = useState(reason);
  //#endregion

  return (
    <View style={styles.container}>
      <View style={styles.containerBottomSheet}>
        <View style={styles.bottomSheetInputContainer}>
          <Text style={styles.bottomSheetTitle}>Symptoms & Conditions</Text>
          <Text style={styles.bottomSheetSubtitle}>
            Please specify your symptoms:
          </Text>
          <TextInput
            mode="outlined"
            onChange={(e) => {
              setSymptomInput(e.nativeEvent.text);
            }}
            value={symptomInput}
            style={styles.bottomSheetInput}
            theme={{
              colors: {
                text: theme.colors.text,
                placeholder: theme.colors.placeHolder,
              },
            }}
            placeholder="e.g. Cough"
          />
        </View>
        {selectedSymptom && selectedSymptom.length > 0 && (
          <View style={styles.section}>
            <HomeScreenSymptom
              title="Selected symptom:"
              onClickSymptom={handleRemoveSymptom}
              filteredListSymptom={filterListSymptom(
                selectedSymptom,
                listSymptom,
                true,
              )}
              chipIcon="check"
              chipLabelColor={theme.colors.surface}
              chipStyle={styles.selectedSymptomChip}
            />
          </View>
        )}
        <View style={styles.section}>
          <HomeScreenSymptom
            title="Choose your symptom:"
            onClickSymptom={handleAddSymptom}
            filteredListSymptom={filterListSymptom(
              selectedSymptom,
              listSymptom,
            )}
            chipIcon="plus"
            chipLabelColor={theme.colors.primary}
            chipStyle={styles.listSymptomChip}
          />
        </View>
      </View>
      <View style={styles.action}>
        <MChips
          label="Done"
          labelColor={theme.colors.primary}
          containerStyle={styles.actionButtonBottomSheet}
          onClick={() => handlePresentModalSymptomClose(symptomInput)}
        />
      </View>
    </View>
  );
};

export default SymptomBottomSheet;
