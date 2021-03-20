//#region IMPORT
//IMPORT MODULE
import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';

//IMPORT CONFIG
import MChips from '../../../../../../components/MChips';
import {ITheme} from '../../../../../../config/Theme.config';
import getStyles from './HomeScreenChooseSymptom.section.style';
//#endregion

//#region INTERFACE
interface Props {
  handleAddSymptom(symptom: string): void;
  listSymptom: string[];
  selectedSymptom: string[];
}
//#endregion
const HomeScreenChooseSymptom: React.FC<Props> = ({
  handleAddSymptom,
  listSymptom,
  selectedSymptom,
}: Props) => {
  //#region GENERAL
  const theme = (useTheme() as unknown) as ITheme;
  const style = getStyles(theme);
  //#endregion

  const filteredListSymptom = listSymptom.filter(
    (symptom) => !selectedSymptom.includes(symptom),
  );
  return (
    <View style={style.container}>
      <Text style={style.title}> Choose your symptoms and reasons</Text>
      <View style={style.containerSymptom}>
        {filteredListSymptom.map((symptom, index: number) => (
          <View style={style.chipContainer} key={`symptom-${index}`}>
            <MChips
              key={`symptom-${index}`}
              label={symptom}
              icon={'plus'}
              labelIcon={theme.colors.primary}
              iconColor={theme.colors.primary}
              onClick={() => handleAddSymptom(symptom)}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default HomeScreenChooseSymptom;
