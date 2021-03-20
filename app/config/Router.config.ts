import RouterMain, {RouterMainParamList} from '../modules/main/Router.main';

const modules = [...RouterMain];

const settings = {
  mainInitialRouteName: 'HomeScreen',
};

export type RootParamList = RouterMainParamList;

export default {
  modules,
  settings,
};
