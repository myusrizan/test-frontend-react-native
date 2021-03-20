//#region IMPORT
// IMPORT MODULE
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {FunctionComponent} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// IMPORT CONFIG
import RouterConfig from '../config/Router.config';

//#endregion

//#region NAVIGATOR
const MainStack = createStackNavigator();

const RootStack = () => {
  return (
    <MainStack.Navigator
      initialRouteName={RouterConfig.settings.mainInitialRouteName}
      headerMode="none"
      screenOptions={{header: undefined}}>
      {RouterConfig.modules.map((route, index) => {
        return (
          <MainStack.Screen
            key={`${route.name}-${index}`}
            name={route.name}
            component={route.component as FunctionComponent<unknown>}
          />
        );
      })}
    </MainStack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
//#endregion

export default AppNavigator;
