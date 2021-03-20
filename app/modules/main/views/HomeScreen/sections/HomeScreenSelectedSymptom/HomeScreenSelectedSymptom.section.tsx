//#region IMPORT
//IMPORT MODULE
import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';

//IMPORT CONFIG
import MChips from '../../../../../../components/MChips';
import {ITheme} from '../../../../../../config/Theme.config';
import getStyles from './HomeScreenSelectedSymptom.section.style';
//#endregion

//#region INTERFACE
interface Props {
  handleRemoveSymptom(symptom: string): void;
  listSymptom: string[];
  selectedSymptom: string[];
}
//#endregion
const HomeScreenSelectedSymptom: React.FC<Props> = ({
  handleRemoveSymptom,
  listSymptom,
  selectedSymptom,
}: Props) => {
  //#region GENERAL
  const theme = (useTheme() as unknown) as ITheme;
  const style = getStyles(theme);
  //#endregion

  const filteredListSymptom = listSymptom.filter((symptom) =>
    selectedSymptom.includes(symptom),
  );
  return (
    <View style={style.container}>
      <Text style={style.title}> Selected symptoms and reasons</Text>
      <View style={style.containerSymptom}>
        {filteredListSymptom.map((symptom, index: number) => (
          <View style={style.chipContainer} key={`symptom-${index}`}>
            <MChips
              containerStyle={style.chip}
              label={symptom}
              labelIcon={theme.colors.surface}
              onClick={() => handleRemoveSymptom(symptom)}
              icon={'check'}
              iconColor={theme.colors.surface}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default HomeScreenSelectedSymptom;
