import { createStackNavigator} from 'react-navigation-stack';
import ListCostManagementScreen from './CostManagementList';
//Instroduction screens
import IntroductionTheoryScreen from './Introduction/IntroductionTheory';
import IntroductionAcitivitiesScreen from './Introduction/IntroductionActivities';
import IntroductionVideoScreen from './Introduction/IntroductionVideo';
//Estimating screens
import TypesOfCostsScreen from './Estimating/TypesCost';
import EstimatingInputsScreen from './Estimating/Inputs';
import EstimatingToolsScreen from './Estimating/Tools';
import EstimatingOutputsScreen from './Estimating/Outputs';
import EstimatingActivitiesScreen from './Estimating/EstimatingActivities';
//Budgeting screens
import BudgetingIntroductionScreen from './Budgeting/Introduction'
import BudgetingInputsScreen from './Budgeting/Inputs'
import BudgetingToolsScreen from './Budgeting/Tools'
import BudgetingOutputsScreen from './Budgeting/Output'
import DetermineBudgetActivitiesScreen from  "./Budgeting/DetermineBudgetActivities";
import DetermineBudgetTheoryScreen from './Budgeting/DetermineBudgetTheory'
//Controlling screens
import ControllingIntroductionScreen from './Controlling/ControlIntro'
import ControllingInputsScreen from './Controlling/ControlInputs'
import ControllingToolsScreen from './Controlling/ControlTools'
import ControllingOutputsScreen from './Controlling/ControlOutputs'
import ControlCostsActivitiesScreen from './Controlling/ControlCostActivities'
import ControlCostsTheoryScreen from './Controlling/ControlCostsTheory'

//Stack Navigator for Module 3
//Composed by the following screens:
// List Cost Management
// Introduction Video
// introduction Theory
// Introduction Activities
// Estimating Theory
// Estimating Activities
// Determine Budget Theory
// Determine Budget Activities
// Control Costs Theory
// Control Costs Activities
export default createStackNavigator({
  
  ListCostManagement: {
    screen: ListCostManagementScreen,
    navigationOptions : {
      title:"ListCostManagement",
    }
  },
  //INTRODUCTION---------------------------------------------
  //---------------------------------------------------------
  IntroductionTheory: {
    screen: IntroductionTheoryScreen,
    navigationOptions : {
      title:"IntroductionTheory",
    }
  },
  IntroductionVideo: {
    screen: IntroductionVideoScreen,
    navigationOptions : {
      title:"Introduction Video",
    }
  },
  IntroductionActivities: {
    screen:IntroductionAcitivitiesScreen,
    navigationOptions : {
      title:"Introduction Activities",
    }
  },

  //ESTIMATING COSTS------------------------------------------
  //----------------------------------------------------------
  EstimatingTypesCost: {
    screen: TypesOfCostsScreen,
    navigationOptions : {
      title:"EstimatingTypesCost",
    }
  },
  EstimatingInput: {
    screen: EstimatingInputsScreen,
    navigationOptions : {
      title:"EstimatingInput",
    }
  },
  EstimatingTools: {
    screen: EstimatingToolsScreen,
    navigationOptions : {
      title:"EstimatingTools",
    }
  },
  EstimatingOutputs: {
    screen: EstimatingOutputsScreen,
    navigationOptions : {
      title:"EstimatingOutputs",
    }
  },
  EstimatingActivities: {
    screen: EstimatingActivitiesScreen,
    navigationOptions : {
      title:"Estimating Activities",
    }
  },

  //BUDGETING-------------------------------------------------
  //----------------------------------------------------------
  BudgetingIntro: {
    screen: BudgetingIntroductionScreen,
    navigationOptions : {
      title:"BudgetingIntro",
    }
  },
  BudgetingInputs: {
    screen: BudgetingInputsScreen,
    navigationOptions : {
      title:"BudgetingInputs",
    }
  },
  BudgetingTools: {
    screen: BudgetingToolsScreen,
    navigationOptions : {
      title:"BudgetingTools",
    }
  },
  BudgetingOutputs: {
    screen: BudgetingOutputsScreen,
    navigationOptions : {
      title:"BudgetingOutputs",
    }
  },
  DetermineBudgetActivities: {
    screen: DetermineBudgetActivitiesScreen,
    navigationOptions : {
      title:"Determine Budget Activities",
    }
  },
  //CONTROLING------------------------------------------------
  //----------------------------------------------------------
  ControllingIntro: {
    screen: ControllingIntroductionScreen,
    navigationOptions : {
      title:"ControllingIntro",
    }
  },
  ControllingInputs: {
    screen: ControllingInputsScreen,
    navigationOptions : {
      title:"ControllingInputs",
    }
  },
  ControllingTools: {
    screen: ControllingToolsScreen,
    navigationOptions : {
      title:"ControllingTools",
    }
  },
  ControllingOutputs: {
    screen: ControllingOutputsScreen,
    navigationOptions : {
      title:"ControllingOutputs",
    }
  },
  ControlCosts: {
    screen: ControlCostsTheoryScreen,
    navigationOptions : {
      title:"Control Costs Theory",
    }
  },
  ControlCostsActivities: {
    screen: ControlCostsActivitiesScreen,
    navigationOptions : {
      title:"Control Costs Activities",
    }
  },
},
{
  initialRouteName: 'ListCostManagement',
  headerMode: 'none'
});