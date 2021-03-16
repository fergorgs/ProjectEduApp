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

class CostManagementList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listCost:[],
      listData:[],
      checkCount: 0
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

  selectNodeStyle(level){

    if(level == 1) 
      return styles.mainNode
    else
      return styles.subNode
  }
  
  render() {

    const list = this.state.listCost
    const data = this.state.listData

    //console.log(data)
    
    // console.log(this.state.checkCount + ") " + typeof(data));

    // aux = this.state.checkCount
    // aux += 1

    // this.setState({checkCount: aux})

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
                  {title: 'Budgeting', 
                    items: [{title: 'Introduction', id: 9}, 
                    {title: 'Inputs', id: 10},
                    {title: 'Tools and Techniques', id: 11},
                    {title: 'Outputs', id: 12},
                    {title: 'Activities', id: 13}]},
                  {title: 'Controlling', 
                    items: [{title: 'Introduction', id: 14}, 
                    {title: 'Inputs', id: 15},
                    {title: 'Tools and Techniques', id: 16},
                    {title: 'Outputs', id: 17},
                    {title: 'Activities', id: 18}]}
                  ]*/

    return (
      <ScrollView >
        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Module_3"),
          }}
          centerComponent={{ text: 'PROJECT COST MANAGEMENT', style: { color: '#fff' } }}
        />
        <NestedListView
          data={data}
          getChildrenName={(node) => 'items'}
          onNodePressed={(node) => {

            switch(node.idName){

              //Introduction
              case "INT_IntroVideo":
                this.props.navigation.navigate("IntroductionVideo")
                break
        
              case "INT_ContentOverall":
                this.props.navigation.navigate('IntroductionTheory')
                break

              case "INT_Activities":
                  this.props.navigation.navigate('IntroductionActivities')
                  break

              //Estimating tabs
              case "EST_TypesOfCosts":
                this.props.navigation.navigate("EstimatingTypesCost")
                break
        
              case "EST_Inputs":
                this.props.navigation.navigate('EstimatingInput')
                break

              case "EST_ToolsAndTechniques":
                  this.props.navigation.navigate('EstimatingTools')
                  break

              case "EST_Outputs":
                  this.props.navigation.navigate('EstimatingOutputs')
                  break

              case "EST_Activities":
                  this.props.navigation.navigate('EstimatingActivities')
                  break

              //Budgeting tabs
              case "BUD_Introduction":
                this.props.navigation.navigate("BudgetingIntro")
                break
        
              case "BUD_Inputs":
                this.props.navigation.navigate('BudgetingInputs')
                break

              case "BUD_ToolsAndTechniques":
                  this.props.navigation.navigate('BudgetingTools')
                  break

              case "BUD_Outputs":
                  this.props.navigation.navigate('BudgetingOutputs')
                  break

              case "BUD_Activities":
                  this.props.navigation.navigate('DetermineBudgetActivities')
                  break

              //Controlling tabs
              case "CON_Introduction":
                this.props.navigation.navigate("ControllingIntro")
                break
        
              case "CON_Inputs":
                this.props.navigation.navigate('ControllingInputs')
                break

              case "CON_ToolsAndTechniques":
                  this.props.navigation.navigate('ControllingTools')
                  break

              case "CON_Outputs":
                  this.props.navigation.navigate('ControllingOutputs')
                  break

              case "CON_Activities":
                  this.props.navigation.navigate('ControlCostsActivities')
                  break
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
        />
      </ScrollView>
    );
  }
}
export default CostManagementList;

const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },

  mainNode: {
    backgroundColor: '#DCDCDC',
    borderBottomWidth: 0.5,
    borderColor: 'gray'
  },

  subNode: {
    borderBottomWidth: 0.5,
    borderColor: 'gray'
  }
});