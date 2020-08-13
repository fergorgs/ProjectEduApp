import { createStackNavigator} from 'react-navigation-stack';
import TopicsListScreen from './TopicsList';
import TopicSwiperScreen from './TopicSwiper';
import ExercisesScreen from './Lessons_Components/Exercises'

export default createStackNavigator({
  
    TopicsList: {
    screen: TopicsListScreen,
    navigationOptions : {
      title:"TopicsList",
    }
  },
  TopicSwiper: {
    screen: TopicSwiperScreen,
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
  initialRouteName: 'TopicsList',
  headerMode: 'none'
});