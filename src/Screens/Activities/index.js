import { createStackNavigator} from 'react-navigation-stack'
import ActivitiesScreen from './Activities';
import Module3Screen from './Modules/Module3'   //Project Management Knowledge Areas
import GenericModuleScreen from './Modules/SubModuleStackNav'   //Business Environment in Projects

export default createStackNavigator({
  Activities: {
    screen: ActivitiesScreen,
    navigationOptions : {
      title:"Activities",
    }
  },
  Module_3: {
    screen: Module3Screen,
    navigationOptions : {
      title:"Module 3",
    }
  },
  Generic_Module: {
    screen: GenericModuleScreen,
    navigationOptions : {
      title:"Generic Module Screen",
    }
  },

},
{
  initialRouteName: 'Activities',
  headerMode: 'none'
});