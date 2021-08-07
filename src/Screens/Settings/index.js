import React from 'react';
//import { createStackNavigator} from 'react-navigation-stack';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from './Settings';
import HelpScreen from './Help';
//import UpdateProfileScreen from './Update'
import InfoScreen from './Info'
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
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
      />
      <Stack.Screen
        name="Info"
        component={InfoScreen}
      />
      <Stack.Screen
        name="Help"
        component={HelpScreen}
      />
    </Stack.Navigator>
  );
}

export default SettingsStack;
