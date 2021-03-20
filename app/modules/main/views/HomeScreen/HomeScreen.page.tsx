//#region IMPORT
// IMPORT MODULE
import {useTheme} from 'react-native-paper';
import React from 'react';
import {StatusBar, SafeAreaView, View} from 'react-native';

// IMPORT COMPONENT
import {MHeader, MSwitch} from '../../../../components';
import {ITheme} from '../../../../config/Theme.config';
import getStyles from './HomeScreen.page.style';
import {HomeScreenReasonInput, HomeScreenSelectPatient} from './sections';
//#endregion

const HomeScreen: React.FC = () => {
  const theme = (useTheme() as unknown) as ITheme;
  const style = getStyles(theme);
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
        <HomeScreenSelectPatient />
      </View>
      <View style={style.section}>
        <HomeScreenReasonInput
          onClickReason={() => console.log('click reason')}
          onClickTime={() => console.log('click time')}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
