//#region IMPORT
// IMPORT MODULE
import React from 'react';
import {View, Text} from 'react-native';

// COMPONENT IMPORT
import {useTheme, ThemeProvider} from './app/styles';
//#region

const App: React.FC = () => {
  //#region GENERAL
  const theme = useTheme();
  //#endregion
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>oi</Text>
      </View>
    </ThemeProvider>
  );
};

export default App;
