import React from 'react';
import {  View,StyleSheet,Dimensions,Image,Text,Alert,TouchableHighlight} from 'react-native';
import {Header,Icon} from 'react-native-elements'
import Swiper from 'react-native-swiper';
import { createDrawerNavigator} from 'react-navigation-drawer'
import LessonHeader from '../../../LessonHeader.js'

//Project Cost Management - Module Estimating - Inputs
class  scr_topicPage extends React.Component {

  finishSubTopic(mainTopic, subTopic){

    mainTopicIsValid = false
    subTopicIsValid = false

    //checks if the maintopic and subtopic are non null
    if(mainTopic == null || subTopic == null){
      alert("Faild to update data base\nMain Topic or Sub Topic null")
      return
    }

    //checks if the main topic exists in the data base and gets its reference
    let userid = firebase.auth().currentUser.uid
    let userRef = firebase.database().ref("/module3/Project Cost Management/" + userid)

    userRef.once('value', (snapshot) => {
      if (snapshot.hasChild(mainTopic))
        mainTopicIsValid = true
    });

    if(!mainTopicIsValid){
      alert("\nMain topic is undefined\n(" + mainTopic + ") is not a valid argument")
      return
    }

    let topicRef = firebase.database().ref("/module3/Project Cost Management/" + userid + "/" + mainTopic)
    
    
    //checks if the sub topic exists in the data base and gets its reference
    topicRef.once('value', (snapshot) => {
      if (snapshot.hasChild(subTopic))
        subTopicIsValid = true
    });

    if(!subTopicIsValid){
      alert("\nSub topic is undefined\n(" + subTopic + ") is not a valid argument")
      return
    }

    let subTopicRef = firebase.database().ref("/module3/Project Cost Management/" + userid + "/" + mainTopic + "/" + subTopic)

    //marks the subtopic as completed
    subTopicRef.update({checkmark: true})

    //checks if all subtopics are completed
    allChecked = true
    
    topicRef.orderByChild("id").on("child_added", (data) => {
      if(data.val().displayTitle != null && !data.val().checkmark){
        allChecked = false
      }
    })

    //marks the main topic as completed, if all the subtopics have been completed
    topicRef.update({checkmark: allChecked})

    this.props.navigation.navigate("ListCostManagement")
  }
     
    render() {
  
    return (

{/*Screen with Inputs - First Screen */}
<View style={styles.container}>
        
        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Estimate Costs' navigation={this.props.navigation}/>
        </View>

        <Text style={styles.textTitle}>
           Inputs
        </Text>
        <Text style={styles.textInfo}>
          Scope Baseline
        </Text>
        <Text style={styles.textInfo}>
           Project Schedule
        </Text>
        <Text style={styles.textInfo}>
          Human Resource Plan
        </Text>
        <Text style={styles.textInfo}>
          Risk Register
        </Text>
        <Text style={styles.textInfo}>
          Enterprise Enviromental Factors
        </Text>
        <Text style={styles.textInfo}>
          Organizational Process Assets
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode = "contain"
              style={{
                width: 250, 
                height: 200
              }}
              source={{uri: 'https://vmguru.com/wp-content/uploads/2018/10/inputs.png'}}
          />
        </View>
        
      </View>

      {/*Last Screen - Project Cost Management - Module Estimating - Inputs */}
      <View style={{
         flex:1,
         width:Dimensions.get("window").width,
         //justifyContent: 'center',
         alignItems:"center",
         backgroundColor:"#97CAE5"
      }}>
        <View style = {{alignItems:"center",}}>
        <LessonHeader centerText='Estimate Costs' navigation={this.props.navigation}/>
        </View>
        
        <View style = {{alignItems:"center",marginTop:40}}>
          <Icon 
              name='work'
              size = {300}
          />
        </View>
          
          {/*Button for Project Cost Management - Module Estimating - Tools */}
          <TouchableHighlight style={[styles.buttonContainer, styles.activitiesButton]} 
            onPress={() => {this.finishSubTopic("Estimating", "EST_Inputs")}}>
              <Text style={styles.buttonText}>Continue studying</Text>
          </TouchableHighlight>
          
      </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:Dimensions.get("window").width,
        //justifyContent: 'center',
        alignItems:"center",
        //marginTop:-20
    },
    containerProgress:{
      marginTop:5,
      alignItems: 'center',
    },
      textInfo:{
        textAlign:'center',
        fontSize:20,
        margin:10,
        marginTop:20,
        color:"white",
        backgroundColor:"#54a0ff"   
      },
      textTitle:{
        textAlign:'center',
        fontSize:25,
        marginTop:10,
        marginBottom: 5
      },
      containerImages:{
        justifyContent:'space-around',
        flexDirection:'row',
        alignItems: 'center',
    },
      infoImage:{
          width: 150, 
          height: 100
      },
      textSubTitle:{
        textAlign:'center',
        fontSize:15,
        marginTop:0,
        marginBottom: 5
      },
      button: {
        borderRadius: 0, 
        marginLeft: 0, 
        marginRight: 0, 
        marginBottom: 0
      },
      buttonPress: {
        borderRadius: 0, 
        marginLeft: 0, 
        marginRight: 0, 
        marginBottom: 0,
        backgroundColor:"#f40331"
      },
      modalContainer:{
        backgroundColor:"#ffffff",
        flex:1,
        alignItems: 'center',
        marginTop:200
      },
      infoImageOverlay:{
        width: 300, 
        height: 300,
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:30,
      marginBottom:40,
      width:280,
      borderRadius:30,
    },
    buttonText: {
      color: 'white',
    },
    activitiesButton: {
      backgroundColor: "#3498db",
    },
  });
  
export default scr_topicPage