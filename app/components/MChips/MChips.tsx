//#region IMPORT
// IMPORT MODULE
import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import COMPONENT
import {MButton} from '..';

// IMPORT CONFIG
import {ITheme} from '../../config/Theme.config';
import getStyles from './MChips.style';
//#endregion

interface Props {
  label: string;
  labelColor?: string;
  onClick(): void;
  containerStyle?: StyleProp<ViewStyle>;
  isSelected?: boolean;
  icon?: string;
  iconColor?: string;
}

const MChips: React.FC<Props> = ({
  label,
  onClick,
  containerStyle,
  isSelected,
  icon,
  labelColor,
  iconColor,
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
      <Text
        style={StyleSheet.flatten([
          style.title,
          {color: labelColor || theme.colors.text},
        ])}>
        {label}
      </Text>
      {icon && (
        <Icon size={16} color={iconColor || theme.colors.text} name={icon} />
      )}
    </MButton>
  );
};

export default MChips;
