//#region IMPORT
//IMPORT MODULE
import React from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {useTheme} from 'react-native-paper';

//IMPORT CONFIG
import MChips from '../../../../../../components/MChips';
import {ITheme} from '../../../../../../config/Theme.config';
import getStyles from './HomeScreenSymptom.section.style';
//#endregion

//#region INTERFACE
interface Props {
  title: string;
  filteredListSymptom: string[];
  onClickSymptom(symptom: string): void;
  chipIcon: string;
  chipLabelColor: string;
  chipStyle: StyleProp<ViewStyle>;
}
//#endregion
const HomeScreenSymptom: React.FC<Props> = ({
  title,
  onClickSymptom,
  filteredListSymptom,
  chipIcon,
  chipLabelColor,
  chipStyle,
}: Props) => {
  //#region GENERAL
  const theme = (useTheme() as unknown) as ITheme;
  const style = getStyles(theme);
  //#endregion

  return (
    <View style={style.container}>
      <Text style={style.title}> {title}</Text>
      <View style={style.containerSymptom}>
        {filteredListSymptom.map((symptom, index: number) => (
          <View style={style.chipContainer} key={`symptom-${index}`}>
            <MChips
              containerStyle={chipStyle}
              label={symptom}
              labelColor={chipLabelColor}
              onClick={() => onClickSymptom(symptom)}
              icon={chipIcon}
              iconColor={chipLabelColor}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default HomeScreenSymptom;
