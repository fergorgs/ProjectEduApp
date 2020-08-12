import { createStackNavigator} from 'react-navigation-stack';
import SettingsScreen from './Settings';
import HelpScreen from './Help';
import UpdateProfileScreen from './Update'
import InfoScreen from './Info'
import NotificationScreen from './Notifications'

//Creates the Stack Navigator for the Settings
export default createStackNavigator({
    SettingsScreen,
    HelpScreen,
    UpdateProfileScreen,
    InfoScreen,
    NotificationScreen
},
{
  initialRouteName: 'SettingsScreen',
  headerMode: 'none'
});