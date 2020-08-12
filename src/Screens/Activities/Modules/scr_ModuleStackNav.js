import { createStackNavigator} from 'react-navigation-stack';
import ListModuleScreen from './scr_ModuleList'
import subModuleStackNavegator from "./scr_subModuleStackNav"
import MaintenanceModule3Screen from './Module3/MaintenanceModule3'

export default createStackNavigator({
  
  Module: {
    screen: ListModuleScreen,
    navigationOptions : {
      title:"Module",
    }   
  },
  subModules: {
    screen: subModuleStackNavegator,
    navigationOptions : {
      title:"sub Module Stack Navegator",
    }   
  },
  MaintenanceModule3: {
    screen: MaintenanceModule3Screen,
    navigationOptions : {
      title:"Maintenance Module 3",
    }   
  },
},
{
  initialRouteName: 'Module',
  headerMode: 'none'
});