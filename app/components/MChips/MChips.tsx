//#region IMPORT
// IMPORT MODULE
import React from 'react';
import {StyleProp, StyleSheet, Text, ViewStyle} from 'react-native';
import {useTheme} from 'react-native-paper';

// import COMPONENT
import {MButton} from '..';

// IMPORT CONFIG
import {ITheme} from '../../config/Theme.config';
import getStyles from './MChips.style';
//#endregion

interface Props {
  label: string;
  onClick(): void;
  containerStyle?: StyleProp<ViewStyle>;
  isSelected?: boolean;
}

const MChips: React.FC<Props> = ({
  label,
  onClick,
  containerStyle,
  isSelected,
}: Props) => {
  //#region GENERAL
  const theme = (useTheme() as unknown) as ITheme;
  const style = getStyles(theme);
  //#endregion

  return (
    <MButton
      style={StyleSheet.flatten([
        isSelected ? style.containerSelected : style.container,
        containerStyle,
      ])}
      action={onClick}>
      <Text style={style.title}>{label}</Text>
    </MButton>
  );
};

export default MChips;
