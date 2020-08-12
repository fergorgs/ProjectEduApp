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

class scr_subModuleList extends React.Component {

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
    const subTopics = params ? params.subTopics : null;

    let data = null

    if(subTopics != null){
      data = subTopics.map((subTopic, index) => {

        let subTopicItems = []
        if(subTopic.IConceptImpl)
          subTopicItems.push({title: 'Theory',
                              id: index,
                              type: 1})
        if(subTopic.exercise)
          subTopicItems.push({title: 'Activities',
                              id: index,
                              type: 2})

        if(subTopicItems.length == 0)
          subTopicItems.push({title: 'No content yet',
                              id: index,
                              type: 3})

        return ({title: subTopic.concept, 
                type: 0,
                items: subTopicItems,
        })
      })
    }
   
    //original data array for reference, if needed
    
    /*const data = [{title: '✓  Introduction', 
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
    
    let theory

    if(subTopics != null){

      theory = (<NestedListView
        data={data}
        getChildrenName={(node) => 'items'}
        onNodePressed={(node) => {

          // console.log("sent title: " + subTopics.concept)
          if(node.type == 1)
          {
            this.props.navigation.navigate('TopicSwiper', {
              iconcept:subTopics[node.id].IConceptImpl,
              topicTitle:subTopics[node.id].concept
            });
          }
          else if(node.type == 2)
          {
            this.props.navigation.navigate('Exercises', {
              questions:subTopics[node.id].exercise,
              topicTitle:subTopics[node.id].concept
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

    return (
      <ScrollView >
        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Module"),
          }}
          centerComponent={{ text: 'Sub Module Topics', style: { color: '#fff' } }}
        />
        {theory}
      </ScrollView>
    );
  }
}
export default scr_subModuleList;

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