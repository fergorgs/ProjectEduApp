import React from 'react';
import { ScrollView, View,StyleSheet,Text } from 'react-native';
import {Header,ListItem} from 'react-native-elements'
import NestedListView, {NestedRow} from 'react-native-nested-listview'
import * as firebase from 'firebase'

//Screen with list with the following modules for Project Cost Management
//Introduction
//Estimating Budget
//Detemine Budget
//Control Costs

class TopicsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //listCost:[],
      listData:[],
      checkCount: 0,
    }
  }
  
  componentWillMount()
  {
    //get reference to module 3
    let userid = firebase.auth().currentUser.uid
    let usersRef = firebase.database().ref("/module3/Project Cost Management/" + userid );
    usersRef.orderByChild("id").on("child_added", (data)=> {
      
      //get reference to each main topic in module 3
      let subTopicRef = firebase.database().ref("/module3/Project Cost Management/" + userid + "/" + data.val().displayTitle);
      let subTopics = [];

      //to each sub topic, creates an object and adds it to the subtopics array
      subTopicRef.orderByChild("id").on("child_added", (subData) => {

        let obj = {title: subData.val().displayTitle, checkmark: subData.val().checkmark, idName: subData.val().idName};
        //console.log("title: " + subData.val().displayTitle)
        if(obj.title != null){
          if(obj.checkmark)
            obj.title = "✓  " + obj.title
          
            subTopics.push(obj);
        }
      })

      //to each topic, creats an object with the array of subtopics previously created
      let obj = {title: data.val().displayTitle, checkmark: data.val().checkmark, items: subTopics}
      
      if(obj.checkmark)
            obj.title = "✓  " + obj.title

      //ads the new topic to topics array (list Data)
      let Aux = this.state.listData

      Aux.push(obj)

      this.setState({listData:Aux})
    })

    //console.log(this.state.listData)
  }

  componentDidUpdate(){

    // if(this.props.navigation.state.params != undefined){
    //   this.setState({subTopics: this.props.navigation.state.params.subTopics})
    // }
  }

  selectNodeStyle(level){

    if(level == 1) 
      return styles.mainNode
    else
      return styles.subNode
  }
  
  render() {

    const { params } = this.props.navigation.state;
    // const topics = null
    const topics = params ? params.topics : null;
    const exercises = params ? params.exercises : null;
    const subModuleName = params ? params.subModuleName : null;
    

    // console.log('topics2: ' + params.topics)
    // console.log('exer2: ' + params.test)

    let theoryData = null
    let exercisesData = null

    if(topics != null){
      theoryData = topics.map((topic, index) => {

        let topicItems = []
        if(topic.topicTheory)
          topicItems.push({title: 'Theory',
                              id: index,
                              type: 1})
        if(topic.topicExercises)
          topicItems.push({title: 'Activities',
                              id: index,
                              type: 2})

        if(topicItems.length == 0)
          topicItems.push({title: 'No content yet',
                              id: index,
                              type: 3})

        return ({title: topic.topicName, 
                type: 0,
                items: topicItems,
        })
      })
    }

    if(exercises != null){
      exercisesData = [{title: 'Activities'}]
    }
    
   
    //original theoryData array for reference, if needed
    
    /*const theoryData = [{title: '✓  Introduction', 
                    items: [{title: 'Introdutory video', id: 1}, 
                    {title: 'Content overall', id: 2},
                    {title: 'Activities', id: 3}]},
                  {title: 'Estimating', 
                    items: [{title: 'Types of Costs', id: 4}, 
                    {title: 'Inputs', id: 5},
                    {title: 'Tools and Techniques', id: 6},
                    {title: 'Outputs', id: 7},
                    {title: 'Activities', id: 8}]},
                  ]*/

    if(topics != null){

      theory = (<NestedListView
        data={theoryData}
        getChildrenName={(node) => 'items'}
        onNodePressed={(node) => {

          // console.log("sent title: " + topics.concept)
          if(node.type == 1)
          {
            this.props.navigation.navigate('TopicSwiper', {
              topicTheory:topics[node.id].topicTheory,
              topicName:topics[node.id].topicName
            });
          }
          else if(node.type == 2)
          {
            this.props.navigation.navigate('Exercises', {
              topicExercises:topics[node.id].topicExercises,
              topicName:topics[node.id].topicName
            });
          }
        }}
        renderNode={(node, level) => (
          <NestedRow
            level={level}
            style={this.selectNodeStyle(level)}
          >
            <Text>{node.title}</Text>
          </NestedRow>
        )}
      />)
    }
    else
      theory = (<Text style={styles.noNodeText}>No theory content yet for this module</Text>)

//----------------------------------------------------------
    if(exercises != null){
      practice = (<NestedListView
        data={exercisesData}
        getChildrenName={(node) => 'items'}
        onNodePressed={(node) => {

          this.props.navigation.navigate('Exercises', {
            topicExercises:exercises,
            topicName:subModuleName + ' Activities'
          });
        }}

        renderNode={(node, level) => (
          <NestedRow
            level={level}
            style={this.selectNodeStyle(level)}
          >
            <Text>{node.title}</Text>
          </NestedRow>
        )}
      />)
    }
    else
      practice = (<Text style={styles.noNodeText}>No exercises for this module</Text>)

//----------------------------------------------------------
    return (
      <ScrollView >
        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: () => this.props.navigation.navigate("SubModules"),
          }}
          centerComponent={{ text: subModuleName + ' Topics', style: { color: '#fff' } }}
        />
        {theory}
        <Header
          backgroundColor = '#1e272e'
          centerComponent={{ text: subModuleName + ' General Exercises', style: { color: '#fff' } }}
        />
        {practice}
      </ScrollView>
    );
  }
}
export default TopicsList;

const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },

  mainNode: {
    backgroundColor: '#DCDCDC',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    fontSize: 7.5,
    padding: 15,
  },

  subNode: {
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    fontSize: 7.5,
    padding: 15,
  },

  noNodeText: {
    margin: 5,
    fontSize: 25,
    textAlign: "center"
  }
});