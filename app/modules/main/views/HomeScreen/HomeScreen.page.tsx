//#region IMPORT
// IMPORT MODULE
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {useTheme} from 'react-native-paper';
// IMPORT COMPONENT
import {MHeader, MSwitch} from '../../../../components';
import MChips from '../../../../components/MChips';
import {ITheme} from '../../../../config/Theme.config';
// IMPORT CONFIG
import {filterListSymptom} from '../../utils';
import {
  PatientBottomSheet,
  SymptomBottomSheet,
  TimeBottomSheet,
} from './components';
import getStyles from './HomeScreen.page.style';
import {
  HomeScreenReasonInput,
  HomeScreenSelectPatient,
  HomeScreenSymptom,
} from './sections';

//#endregion

const HomeScreen: React.FC = () => {
  //#region GENERAL
  const theme = (useTheme() as unknown) as ITheme;
  const styles = getStyles(theme);
  const [reason, setReason] = useState('');
  const [scheduledTime, setScheduledTime] = useState<Date>(undefined);
  //#endregion

  //#region ADD PATIENT
  const [listPatient, setListPatient] = useState<string[]>([
    'Yarik Nikolenko',
    'Julien Truman',
    'Bronx Abigail',
  ]);
  const [selectedPatient, setSelectedPatient] = useState([]);
  const handleSelectPatient = (_patient: string): void => {
    const isPatientExist = selectedPatient.includes(_patient);
    if (isPatientExist) {
      const currentPatient = selectedPatient.filter(
        (patient) => patient !== _patient,
      );
      setSelectedPatient(currentPatient);
      return;
    }
    const currentPatient = [...selectedPatient, _patient];
    setSelectedPatient(currentPatient);
  };
  //#endregion

  //#region ADD SYMPTOM
  const listSymptom: string[] = Array.from(
    Array(11),
    (_, index: number) => `symptom${index}` as string,
  );
  const [selectedSymptom, setSelectedSymptom] = useState([]);

  const handleAddSymptom = (_symptom: string): void => {
    const currentSymptom = [...selectedSymptom, _symptom];
    setSelectedSymptom(currentSymptom);
  };
  const handleRemoveSymptom = (_symptom: string): void => {
    const isSymptomExist = selectedSymptom.includes(_symptom);
    if (isSymptomExist) {
      const currentSymptom = selectedSymptom.filter(
        (symptom) => symptom !== _symptom,
      );
      setSelectedSymptom(currentSymptom);
    }
  };
  //#endregion
  //#region BOTTOM SHEET
  const snapPoints = useMemo(() => ['25%', '80%'], []);
  const snapPointsTime = useMemo(() => ['25%', '50%'], []);
  const snapPointsPatient = useMemo(() => ['25%', '40%'], []);
  //MODAL SYMPTOM
  const bottomSheetModalSymptomRef = useRef<BottomSheetModal>(null);
  const handlePresentModalSymptomOpen = useCallback(() => {
    bottomSheetModalSymptomRef.current?.present();
  }, []);
  const handlePresentModalSymptomClose = useCallback((_input: string) => {
    bottomSheetModalSymptomRef.current?.dismiss();
    setReason(_input);
  }, []);

  //MODAL TIME
  const bottomSheetModalTimeRef = useRef<BottomSheetModal>(null);
  const handlePresentModalTimeOpen = useCallback(() => {
    bottomSheetModalTimeRef.current?.present();
  }, []);
  const handlePresentModalTimeClose = useCallback((_date: Date) => {
    setScheduledTime(_date);
    bottomSheetModalTimeRef.current?.dismiss();
  }, []);

  //MODAL PATIENT
  const bottomSheetModalPatientRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPatientOpen = useCallback(() => {
    bottomSheetModalPatientRef.current?.present();
  }, []);
  const handlePresentModalPatientClose = useCallback(
    (patient: string) => {
      const newListPatient = [...listPatient, patient];
      setListPatient(newListPatient);

      bottomSheetModalPatientRef.current?.dismiss();
    },
    [listPatient],
  );
  //#endregion

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={theme.colors.surface}
          />
          <MHeader
            title="Book a Doctor"
            onBack={() => {
              console.log('clicked');
            }}
            onAction={() => console.log('action')}
          />
          <View style={styles.switchContainer}>
            <MSwitch labelA="Doctor" labelB="Video Consult" />
          </View>
          <View style={styles.section}>
            <HomeScreenSelectPatient
              listPatient={listPatient}
              selectedPatient={selectedPatient}
              handleSelectPatient={handleSelectPatient}
              handleAddPatient={handlePresentModalPatientOpen}
            />
          </View>
          <View style={styles.section}>
            <HomeScreenReasonInput
              reason={reason}
              scheduledTime={scheduledTime}
              onClickReason={handlePresentModalSymptomOpen}
              onClickTime={handlePresentModalTimeOpen}
            />
          </View>
          {selectedSymptom && selectedSymptom.length > 0 && (
            <View style={styles.section}>
              <HomeScreenSymptom
                title="Selected symptom and reason:"
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
              title="Choose your symptom and reason:"
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
            label="Next"
            labelColor={theme.colors.surface}
            containerStyle={styles.actionButton}
            onClick={() => console.log('next clicked')}
          />
        </View>
      </SafeAreaView>

      <BottomSheetModal
        ref={bottomSheetModalSymptomRef}
        backdropComponent={() => <View style={styles.backdrop} />}
        index={1}
        snapPoints={snapPoints}>
        <SymptomBottomSheet
          reason={reason}
          selectedSymptom={selectedSymptom}
          listSymptom={listSymptom}
          handleRemoveSymptom={handleRemoveSymptom}
          handleAddSymptom={handleAddSymptom}
          handlePresentModalSymptomClose={handlePresentModalSymptomClose}
        />
      </BottomSheetModal>

      <BottomSheetModal
        backdropComponent={() => <View style={styles.backdrop} />}
        ref={bottomSheetModalTimeRef}
        index={1}
        snapPoints={snapPointsTime}>
        <TimeBottomSheet
          scheduledTime={scheduledTime}
          handlePresentModalTimeClose={handlePresentModalTimeClose}
        />
      </BottomSheetModal>

      <BottomSheetModal
        backdropComponent={() => <View style={styles.backdrop} />}
        ref={bottomSheetModalPatientRef}
        index={1}
        snapPoints={snapPointsPatient}>
        <PatientBottomSheet
          handlePresentModalPatientClose={handlePresentModalPatientClose}
        />
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default HomeScreen;
