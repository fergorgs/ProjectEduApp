import React from 'react';
import {  View,StyleSheet,Dimensions,Image,Text,Alert,TouchableHighlight} from 'react-native';
import {Header,Icon} from 'react-native-elements'
import Swiper from 'react-native-swiper';
import { createDrawerNavigator} from 'react-navigation-drawer'
import LessonHeader from '../../../LessonHeader.js'

//Project Cost Management - Module Estimating - Outputs
class  PCM_EstimatingOutputsScreen extends React.Component {
     
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
    //Swiper for the Screens
    <Swiper
        showsButtons={false} 
        autoplay={false}
        loop = {true}
    >
    {/*Initial Screen - Outputs */}
    <View style={{
         flex:1,
         width:Dimensions.get("window").width,
         justifyContent: 'center',
         alignItems:"center",
         backgroundColor:"#0abde3"
      }}>
        <View style = {{alignItems:"center"}}>
          <Text style = {{textAlign:"center",fontSize:40}}>
            Outputs
          </Text>
        </View>
        
      </View>
      
      {/*1th Screen */}
      <View style={styles.container}>
        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Estimate Costs' navigation={this.props.navigation}/>
        </View>

        <Text style={styles.textTitle}>
          Outputs
        </Text>
        <Text style={styles.textInfo}>
          Activity Costs Estimates
        </Text>
        <Text style={styles.textInfo}>
          Basis of Estimates
        </Text>
        <Text style={styles.textInfo}>
          Project Document Updates
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 300, 
                height: 300
              }}
              source={{uri: 'https://acctivate.com/wp-content/uploads/2015/06/Supply-chain-and-inventory-management-inputs-and-outputs.jpg'}}
          />
        </View>
      </View>

      {/*2th Screen */}
      <View style={styles.container}>
        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Estimate Costs' navigation={this.props.navigation}/>
        </View>
      
        <Text style={styles.textTitle}>
          Activity Costs Estimates
        </Text>
        <Text style={styles.textInfo}>
          Quantitative assessment of the probable cost required to
          complete project work.
        </Text>
        <Text style={{textAlign:'left',marginLeft:10,fontSize:15,marginTop:10}}>
           Examples:
        </Text>
        <Text style={styles.textSubTitle}>
          Direct Labor
        </Text>
        <Text style={styles.textSubTitle}>
          Materials
        </Text>
        <Text style={styles.textSubTitle}>
          Equipment
        </Text>
        <Text style={styles.textSubTitle}>
          Services
        </Text>
        <Text style={styles.textSubTitle}>
          Facilities
        </Text>      
       
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 100, 
                height: 150
              }}
              source={{uri: 'https://www.sema.org/system/files/images/tools_copy_2.jpg'}}
          />
        </View>
        <View style={styles.containerImages}>
          <Image
              resizeMode='stretch'
              style={{
                width: 250, 
                height: 200
              }}
              source={{uri: 'https://cdn.lynda.com/course/674588/674588-636576649599254827-16x9.jpg'}}
          />
        </View>
        
      </View>

      {/*3rd Screen */}
      <View style={styles.container}>
        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Estimate Costs' navigation={this.props.navigation}/>
        </View>
        
        <Text style={styles.textTitle}>
          Basis of Estimates
        </Text>
        <Text style={styles.textInfo}>
          The supported detail for the activities:
        </Text>
        <Text style={styles.textInfo}>
          A description of how the estimate was developed, the
          assumptions made about the estimates and which constraints
          were used.
        </Text>
                   
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 300, 
                height: 300
              }}
              source={{uri: 'https://i.ytimg.com/vi/EYRk3ADU_Y4/maxresdefault.jpg'}}
          />
        </View>
        
      </View>

      {/*4th Screen */}
      <View style={styles.container}>
        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Estimate Costs' navigation={this.props.navigation}/>
        </View>
        
        <Text style={styles.textTitle}>
          Project Document Updates
        </Text>
        <Text style={styles.textInfo}>
          Project documents that may be updated include cost estimates.
        </Text>
        <Text style={styles.textInfo}>
          The risk register may also require an update
          after cost estimates are complete.
        </Text>          
       
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 300, 
                height: 300
              }}
              source={{uri: 'data:image/png;base64,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'}}
          />
        </View>
        
      </View>

      {/*Last Screen - Project Cost Management - Module Estimating - Outputs*/}
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
          
          {/*Button - Project Cost Management - Module Estimating - Activities*/}
          <TouchableHighlight style={[styles.buttonContainer, styles.activitiesButton]} 
            onPress={() => {this.finishSubTopic("Estimating", "EST_Outputs")}}>
              <Text style={styles.buttonText}>Continue to Activities</Text>
          </TouchableHighlight>
          
      </View>

    </Swiper>
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
  
export default PCM_EstimatingOutputsScreen