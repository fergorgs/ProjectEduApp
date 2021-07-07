import React from 'react';
//import { createStackNavigator} from 'react-navigation-stack';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from './Settings';
//import HelpScreen from './Help';
//import UpdateProfileScreen from './Update'
//import InfoScreen from './Info'
//import NotificationScreen from './Notifications'

const Stack = createStackNavigator();

//Creates the Stack Navigator for the Settings
//export default createStackNavigator({
//    SettingsScreen,
//    //HelpScreen,
//    //UpdateProfileScreen,
//    //InfoScreen,
//    //NotificationScreen
//},
//{
//  initialRouteName: 'SettingsScreen',
//  headerMode: 'none'
//});

function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
}

export default SettingsStack;
