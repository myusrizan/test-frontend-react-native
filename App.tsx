//#region IMPORT
// IMPORT MODULE
import React from 'react';
import theme from './app/config/Theme.config';
import Router from './app/bootstrap/Router.bootstrap';
import {Provider as PaperProvider} from 'react-native-paper';
import {Theme} from 'react-native-paper/lib/typescript/types';
//#endregion

const App: React.FC = () => {
  return (
    <PaperProvider theme={(theme as unknown) as Theme}>
      <Router />
    </PaperProvider>
  );
};

export default App;
