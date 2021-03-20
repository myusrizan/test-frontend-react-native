//#region IMPORT
//IMPORT MODULE
import React from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import MChips from '../../../../../../components/MChips';
//IMPORT CONFIG
import {ITheme} from '../../../../../../config/Theme.config';
import getStyles from './HomeScreenSelectPatient.section.style';

//#endregion

//#region INTERFACE
interface Props {
  listPatient: string[];
  selectedPatient: string[];
  handleAddPatient(): void;
  handleSelectPatient(patient: string): void;
}
//#endregion

const HomeScreenSelectPatient: React.FC<Props> = ({
  listPatient,
  selectedPatient,
  handleSelectPatient,
  handleAddPatient,
}: Props) => {
  //#region GENERAL
  const theme = (useTheme() as unknown) as ITheme;
  const style = getStyles(theme);
  //#endregion

  //#region LIST
  const renderKey = (_, index: number) => `feed-list-item-${index}`;
  const renderItem = ({item}: ListRenderItemInfo<string>) => (
    <MChips
      isSelected={selectedPatient.includes(item)}
      label={item}
      containerStyle={style.listItem}
      onClick={() => handleSelectPatient(item)}
    />
  );
  //#endregion
  return (
    <View style={style.container}>
      <Text style={style.title}> Choose Patient:</Text>
      <View style={style.selectionContainer}>
        <View style={style.addChipsWrapper}>
          <MChips
            containerStyle={style.addChips}
            label="Add"
            onClick={handleAddPatient}
          />
        </View>
        <FlatList
          horizontal
          data={listPatient}
          renderItem={renderItem}
          keyExtractor={renderKey}
        />
      </View>
    </View>
  );
};

export default HomeScreenSelectPatient;
