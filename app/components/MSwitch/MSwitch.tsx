//#region IMPORT
import React, {useState, useRef, useCallback} from 'react';
import {View, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useTheme} from 'react-native-paper';

import {MButton} from '..';
import getStyles from './MSwitch.style';
import {ITheme} from '../../config/Theme.config';
//#endregion

//#region INTERFACE
interface Props {
  labelA: string;
  labelB: string;
  onPressA?(): void;
  onPressB?(): void;
}
//#endregion

const MSwitch: React.FC<Props> = ({
  labelA,
  labelB,
  onPressA,
  onPressB,
}: Props) => {
  //#region GENERAL
  const theme = useTheme();
  const styles = getStyles((theme as unknown) as ITheme);
  const indicator = useRef<Animatable.View>();
  const [position, setPosition] = useState('A');
  //#endregion

  //#region SWITCH CONTROL
  const onPressAOption = useCallback(() => {
    if (position !== 'A' && indicator.current) {
      setPosition('A');
      (indicator.current as any).onPressSwitchA!(200);
      onPressA && onPressA();
    }
  }, [position, onPressA]);

  const onPressBOption = useCallback(() => {
    if (position !== 'B' && indicator.current) {
      setPosition('B');
      (indicator.current as any).onPressSwitchB!(200);
      if (onPressB) {
        onPressB();
      }
    }
  }, [position, onPressB]);
  //#endregion
  return (
    <View style={styles.container}>
      <Animatable.View
        ref={indicator as any}
        useNativeDriver={true}
        easing="ease-out"
        style={styles.animation}>
        <View style={styles.option}>
          <Text style={styles.optionActiveText}>
            {position === 'A' ? labelA : labelB}
          </Text>
        </View>
      </Animatable.View>

      <MButton action={onPressAOption}>
        <View style={styles.option}>
          <Text
            style={
              position === 'A' ? styles.optionActiveText : styles.optionText
            }>
            {labelA}
          </Text>
        </View>
      </MButton>

      <MButton action={onPressBOption}>
        <View style={styles.option}>
          <Text
            style={
              position === 'B' ? styles.optionActiveText : styles.optionText
            }>
            {labelB}
          </Text>
        </View>
      </MButton>
    </View>
  );
};

export default MSwitch;
