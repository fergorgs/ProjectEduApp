import { createStackNavigator} from 'react-navigation-stack';
import ListModule3Screen from './Module3'
import ProjectCostManagementScreen from "./ProjectCostManagement"
import MaintenanceModule3Screen from './MaintenanceModule3'

export default createStackNavigator({

  //Stack Navigator with all Module 3 Main Screens
  
  Module_3: {
    screen: ListModule3Screen,
    navigationOptions : {
      title:"Module 3",
    }   
  },
  ProjectCostManagement: {
    screen: ProjectCostManagementScreen,
    navigationOptions : {
      title:"Project Cost Management",
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
  initialRouteName: 'Module_3',
  headerMode: 'none'
});