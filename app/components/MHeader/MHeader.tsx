//#region IMPORTS

import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {Appbar as PaperAppbar, useTheme} from 'react-native-paper';
import {ITheme} from '../../config/Theme.config';
import getStyles from './MHeader.style';

//#endregion

//#region MAIN COMPONENT

export interface Props {
  title?: string;
  onAction?(e?: GestureResponderEvent): void;
  onBack?(e?: GestureResponderEvent): void;
}

const MHeader: React.FC<Props> = ({title, onBack, onAction}: Props) => {
  //#region UI
  const theme = (useTheme() as unknown) as ITheme;
  const styles = getStyles(theme);

  //#endregion

  return (
    <PaperAppbar.Header style={styles.container}>
      {onBack && (
        <PaperAppbar.BackAction
          color={theme.colors.primary}
          onPress={() => {
            typeof onBack === 'function' && onBack();
          }}
        />
      )}

      <PaperAppbar.Content title={title || ''} />

      {onAction && (
        <PaperAppbar.Action
          icon="stethoscope"
          color={theme.colors.primary}
          onPress={() => {
            typeof onAction === 'function' && onAction();
          }}
        />
      )}
    </PaperAppbar.Header>
  );
};

//#endregion

export default MHeader;
