import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps158333Navigator from '../features/Maps158333/navigator';
import Add-Item158332Navigator from '../features/Add-Item158332/navigator';
import Maps158328Navigator from '../features/Maps158328/navigator';
import UserProfile158324Navigator from '../features/UserProfile158324/navigator';
import Maps1158301Navigator from '../features/Maps1158301/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps158333: { screen: Maps158333Navigator },
Add-Item158332: { screen: Add-Item158332Navigator },
Maps158328: { screen: Maps158328Navigator },
UserProfile158324: { screen: UserProfile158324Navigator },
Maps1158301: { screen: Maps1158301Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
