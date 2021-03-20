//#region IMPORT
//IMPORT MODULE
import React, {useState} from 'react';
import {View, Text, FlatList, ListRenderItemInfo} from 'react-native';
import {useTheme} from 'react-native-paper';
import MChips from '../../../../../../components/MChips';

//IMPORT CONFIG
import {ITheme} from '../../../../../../config/Theme.config';
import getStyles from './HomeScreenSelectPatient.section.style';
//#endregion
const HomeScreenSelectPatient: React.FC = () => {
  //#region GENERAL
  const theme = (useTheme() as unknown) as ITheme;
  const style = getStyles(theme);

  const listData = ['Yarik Nikolenko', 'Julien Truman', 'Bronx Abigail'];
  const [selectedData, setSelectedData] = useState([]);
  //#endregion

  //#region ADD PATIENT
  const handleAddPatient = (_patient: string): void => {
    const isItemExist = selectedData.includes(_patient);
    if (isItemExist) {
      const currentPatient = selectedData.filter(
        (patient) => patient !== _patient,
      );
      setSelectedData(currentPatient);
      return;
    }
    const currentPatient = [...selectedData, _patient];
    setSelectedData(currentPatient);
  };
  //#endregion

  //#region LIST
  const renderKey = (_, index: number) => `feed-list-item-${index}`;
  const renderItem = ({item}: ListRenderItemInfo<string>) => (
    <MChips
      isSelected={selectedData.includes(item)}
      label={item}
      containerStyle={style.listItem}
      onClick={() => handleAddPatient(item)}
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
            onClick={() => console.log('Add clicked')}
          />
        </View>
        <FlatList
          horizontal
          data={listData}
          renderItem={renderItem}
          keyExtractor={renderKey}
        />
      </View>
    </View>
  );
};

export default HomeScreenSelectPatient;
