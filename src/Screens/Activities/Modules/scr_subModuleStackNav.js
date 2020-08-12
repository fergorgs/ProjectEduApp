import { createStackNavigator} from 'react-navigation-stack';
import ListSubModuleScreen from './scr_subModuleList';
import topicSwiperScreen from './scr_topicSwiper';
import ExercisesScreen from './Exercises'

export default createStackNavigator({
  
  ListSubModule: {
    screen: ListSubModuleScreen,
    navigationOptions : {
      title:"ListSubModule",
    }
  },
  TopicSwiper: {
    screen: topicSwiperScreen,
    navigationOptions: {
      title: "Topic Swiper"
    }
  },
  Exercises: {
    screen: ExercisesScreen,
    navigationOptions: {
      title: "Exercises"
    }
  }
 },
{
  initialRouteName: 'ListSubModule',
  headerMode: 'none'
});