import { createStackNavigator} from 'react-navigation-stack';
import SubModulesList from './SubModulesList'
import TopicsStackNavegator from "./TopicsStackNav"
// import MaintenanceModule3Screen from './Module3/MaintenanceModule3'

export default createStackNavigator({
  
  SubModules: {
    screen: SubModulesList,
    navigationOptions : {
      title:"SubModules",
    }   
  },
  Topics: {
    screen: TopicsStackNavegator,
    navigationOptions : {
      title:"Topics Stack Navegator",
    }   
  },
//   MaintenanceModule3: {
//     screen: MaintenanceModule3Screen,
//     navigationOptions : {
//       title:"Maintenance Module 3",
//     }   
//   },
},
{
  initialRouteName: 'SubModules',
  headerMode: 'none'
});