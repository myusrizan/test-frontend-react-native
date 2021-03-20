// #region IMPORTS

import {AppRoute} from '../../config/constants';
import {HomeScreen} from './views';

// #endregion

// #region ROUTES

const screens: AppRoute[] = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
  },
];

export type RouterMainParamList = {
  HomeScreen: undefined;
};

// #endregion

export default screens;
