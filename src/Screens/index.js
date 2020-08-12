import { createDrawerNavigator} from 'react-navigation-drawer';
import ActivitiesScreen from './Activities';
import PerfilScreen from './Perfil';
import RankingScreen from './Ranking';
import SettingsScreen from './Settings';
import StatisticsScreen from './Statistics';
import AchievementScreen from './Achievements'
import {Icon} from 'react-native-elements';
import React from 'react';


//Index for all the main screens of the App
//Defines the Drawer Navigator
/*Screens:
  Profile Screen
  Achievements Screen
  Activities Screen
  Ranking Screen
  Statistics Screen
  Settings Screen
*/

export default createDrawerNavigator({
  Perfil: {
    screen: PerfilScreen,
    navigationOptions : {
      title:"Profile",
      drawerIcon: ({tintColor}) => (
        <Icon
            name="home"
            color={tintColor}
            size={24}
        />
    ) 
    }
  },
  Activities: {
    screen: ActivitiesScreen,
    navigationOptions : {
      title:"Activities",
      drawerIcon: ({tintColor}) => (
        <Icon
            name="work"
            color={tintColor}
            size={24}
        />
    ) 
    }
  },
  Achievements: {
    screen: AchievementScreen,
    navigationOptions : {
      title:"Achievements",
      drawerIcon: ({tintColor}) => (
        <Icon
            name="star"
            color={tintColor}
            size={24}
        />
    ) 
    }
  },
  Ranking: {
    screen: RankingScreen,
    navigationOptions : {
      title:"Ranking",
      drawerIcon: ({tintColor}) => (
        <Icon
            name="sort"
            color={tintColor}
            size={24}
        />
    ) 
    }
  },
  Statistics: {
    screen: StatisticsScreen,
    navigationOptions : {
      title:"Statistics",
      drawerIcon: ({tintColor}) => (
        <Icon
            name="graphic-eq"
            color={tintColor}
            size={24}
        />
    ) 
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions : {
      title:"Settings",
      drawerIcon: ({tintColor}) => (
        <Icon
            name="settings"
            color={tintColor}
            size={24}
        />
    ) 
    }
  },
},
{
  initialRouteName: 'Activities',
});