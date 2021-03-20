//#region IMPORT
// IMPORT MODULE
import React, {useState} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {useTheme} from 'react-native-paper';
// IMPORT COMPONENT
import {MHeader, MSwitch} from '../../../../components';
import {ITheme} from '../../../../config/Theme.config';
import getStyles from './HomeScreen.page.style';
import {
  HomeScreenChooseSymptom,
  HomeScreenReasonInput,
  HomeScreenSelectedSymptom,
  HomeScreenSelectPatient,
} from './sections';

//#endregion

const HomeScreen: React.FC = () => {
  //#region GENERAL
  const theme = (useTheme() as unknown) as ITheme;
  const style = getStyles(theme);
  //#endregion

  //#region ADD PATIENT
  const listPatient = ['Yarik Nikolenko', 'Julien Truman', 'Bronx Abigail'];
  const [selectedPatient, setSelectedPatient] = useState([]);
  const handleAddPatient = (_patient: string): void => {
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

  return (
    <SafeAreaView style={style.container}>
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
      <View style={style.switchContainer}>
        <MSwitch labelA="Doctor" labelB="Video Consult" />
      </View>
      <View style={style.section}>
        <HomeScreenSelectPatient
          listPatient={listPatient}
          selectedPatient={selectedPatient}
          handleAddPatient={handleAddPatient}
        />
      </View>
      <View style={style.section}>
        <HomeScreenReasonInput
          onClickReason={() => console.log('click reason')}
          onClickTime={() => console.log('click time')}
        />
      </View>
      {selectedSymptom && selectedSymptom.length > 0 && (
        <View style={style.section}>
          <HomeScreenSelectedSymptom
            handleRemoveSymptom={handleRemoveSymptom}
            listSymptom={listSymptom}
            selectedSymptom={selectedSymptom}
          />
        </View>
      )}
      <View style={style.section}>
        <HomeScreenChooseSymptom
          handleAddSymptom={handleAddSymptom}
          listSymptom={listSymptom}
          selectedSymptom={selectedSymptom}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
