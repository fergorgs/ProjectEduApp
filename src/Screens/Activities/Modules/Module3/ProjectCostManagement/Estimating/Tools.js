import React from 'react';
import {  View,StyleSheet,Dimensions,Image,Text,Alert,TouchableHighlight} from 'react-native';
import {Header,Icon} from 'react-native-elements'
import Swiper from 'react-native-swiper';
import { createDrawerNavigator} from 'react-navigation-drawer'
import LessonHeader from '../../../LessonHeader.js'

//Project Cost Management - Module Estimating - Tools
class  PCM_EstimatingToolsScreen extends React.Component {
     
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
    {/*Initial Screen -  Tools and Techniques */}
    <View style={{
         flex:1,
         width:Dimensions.get("window").width,
         justifyContent: 'center',
         alignItems:"center",
         backgroundColor:"#0abde3"
      }}>
        <View style = {{alignItems:"center"}}>
          <Text style = {{textAlign:"center",fontSize:40}}>
            Tools and Techniques
          </Text>
        </View>
        
      </View>

      {/*First Screen */}
      <View style={styles.container}>
        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Estimate Costs' navigation={this.props.navigation}/>
        </View>
        
        <Text style={styles.textTitle}>
           Tools and Techniques
        </Text>
        <Text style={styles.textInfo}>
           Expert Judgement
        </Text>
        <Text style={styles.textInfo}>
           Analogous Estimating
        </Text>
        <Text style={styles.textInfo}>
           Parametric Estimating
        </Text>
        <Text style={styles.textInfo}>
           Bottom-Up Estimating
        </Text>
        <Text style={styles.textInfo}>
           Three-Point Estimating
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 300, 
                height: 300
              }}
              source={{uri: 'https://blog.ganttpro.com/wp-content/uploads/2017/07/Estimating-techniques.jpg'}}
          />
        </View>
        
      </View>

      {/*Second Screen */}
      <View style={styles.container}>
        
        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Estimate Costs' navigation={this.props.navigation}/>
        </View>

        <Text style={styles.textTitle}>
          Tools and Techniques
        </Text>
        <Text style={styles.textInfo}>
           Cost of Quality
        </Text>
        <Text style={styles.textInfo}>
           PM Estimating Software
        </Text>
        <Text style={styles.textInfo}>
           Vendor Bid Analysis
        </Text>
        <Text style={styles.textInfo}>
           Reserve Analysis
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 300, 
                height: 300
              }}
              source={{uri: 'https://www.sev1tech.com/wp-content/uploads/2017/03/top-5-knowledge-management-tools-and-techniques.png'}}
          />
        </View>
      </View>

      {/*Third Screen */}
      <View style={styles.container}>
        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Estimate Costs' navigation={this.props.navigation}/>
        </View>
       
        <Text style={styles.textTitle}>
          Expert Judgement
        </Text>
        <Text style={styles.textInfo}>
            Guided by historical information, provides valuable
            insight about environment, and information from 
            prior similar projects.
        </Text>
        <Text style={styles.textInfo}>
            Expert judgement can also be used to determine,
            whether to combine methods of estimatin, and how to
            reconcile differences between them less accurate.
        </Text>
       
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 300, 
                height: 300
              }}
              source={{uri: 'https://cdn-images-1.medium.com/max/1600/0*wTQC4AnAd9Zc1D19.png'}}
          />
        </View>
      </View>

      {/*Fourth Screen */}
      <View style={styles.container}>
        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Estimate Costs' navigation={this.props.navigation}/>
        </View>
        
        <Text style={styles.textTitle}>
          Analogous Estimating
        </Text>
        <Text style={styles.textInfo}>
            Relies on the actual cost of previous similiar 
            projects, as the basis for estimating the cost 
            of the current project.

        </Text>
        <Text style={styles.textInfo}>
            Analogous cost estimating uses historical information,
            and expert judgment. Generally less costly, and less
            time consuming than other techniques, but also generally
            less acurate

        </Text>
       
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 250, 
                height: 250
              }}
              source={{uri: 'http://1.bp.blogspot.com/--CCXb8eldyQ/U0Y70CFTfrI/AAAAAAAAO1k/IVBbGXeQ7Jk/s1600/3point.jpg'}}
          />
        </View>
      </View>

      {/*Fifth Screen */}
      <View style={styles.container}>
        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Estimate Costs' navigation={this.props.navigation}/>
        </View>
        
        <Text style={styles.textTitle}>
          Parametric Estimating
        </Text>
        <Text style={styles.textInfo}>
            Uses a statistiacal relationship between historical
            data and other variables. It envolves multipying, the 
            planned quantity of work to be performed, be the historical
            cost per unity, to obtaion the estimated cost.

        </Text>
        <Text style={styles.textInfo}>
            Can produce higher levels of accuracy, depending upon
            the sophistication.

        </Text>
       
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 300, 
                height: 300
              }}
              source={{uri: 'http://strikingprojectmanagement.com/wp-content/uploads/2013/02/Parametric-Estimating-300x150.png'}}
          />
        </View>
      </View>

      {/*Sixth Screen */}
      <View style={styles.container}>
        
        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Estimate Costs' navigation={this.props.navigation}/>
        </View>
       
        <Text style={styles.textTitle}>
          Bottom-up Estimating
        </Text>
        <Text style={styles.textInfo}>
            Involves estimating the cost of individual work
            packages, or individual schedule activities. Rolled
            to higher levels for reporting and tracking purposes.

        </Text>
        <Text style={styles.textInfo}>
            Typically motivated by the size, and complexity of
            the individual schedule activity, or work package.

        </Text>
       
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 300, 
                height: 300
              }}
              source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQ1Y02cFIMj1OzpNGhGJkSqb0ILoJax967EmsY2J5o8bVrc8J'}}
          />
        </View>
      </View>

      {/*Seventh Screen */}
      <View style={styles.container}>
        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Estimate Costs' navigation={this.props.navigation}/>
        </View>
        
        <Text style={styles.textTitle}>
          Three-Point Estimating
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode="stretch"
              style={{
                width: 300, 
                height: 200
              }}
              source={{uri: 'https://www.justacademy.co/wp-content/uploads/2016/04/Parametric_estimating.jpg'}}
          />
        </View>

        <Text style={styles.textInfo}>
           Program Evaluation Estimate and Review Techinique(PERT)

        </Text>
        <Text style={styles.textInfo}>
          PERT uses it to define an approximate range for
          and activities cost
        </Text>
       
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 200, 
                height: 200
              }}
              source={{uri: 'https://www.guru99.com/images/TestManagement/testmanagement_article_2_2_10.png'}}
          />
        </View>
      </View>
      {/*Eighth Screen */}
      <View style={styles.container}>
        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Estimate Costs' navigation={this.props.navigation}/>
        </View>
    
        <Text style={styles.textTitle}>
          Reserve Analysis
        </Text>
        <Text style={styles.textInfo}>
            Evaluates risks by making financial allowances
            for them, in the projects funding requirements.
        </Text>
        <Text style={styles.textInfo}>
            Contingency reserves: allowances for unplanned
            challenges raised from risk.
        </Text>
        <Text style={styles.textInfo}>
           Management reserves: budget reserved for unplanned
           changes (scope and cost)

        </Text>
       
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 250, 
                height: 250
              }}
              source={{uri: 'https://blog.masterofproject.com/wp-content/uploads/2017/07/Reserve-Analysis-1-750x410.jpg'}}
          />
        </View>
      </View>

      {/*Nineth Screen */}
      <View style={styles.container}>
        <View style = {{ alignItems:"center"}}>  
        <LessonHeader centerText='Estimate Costs' navigation={this.props.navigation}/>
        </View>

        <Text style={styles.textTitle}>
          PM Estimating Software
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode='stretch'
              style={{
                width: 300, 
                height: 200
              }}
              source={{uri: 'https://www.binfire.com/templates/landing/img/ebooks/software_buyer/img/benefits.png'}}
          />
        </View>
        
        <Text style={styles.textInfo}>
            Project Management software application, computerized
            spreadsheets, simulation, and statistical tools are used
            to assist with cost estimating.
        </Text>
       
        
        <View style={styles.containerImages}>
          <Image
              resizeMode='stretch'
              style={{
                width: 250, 
                height: 150
              }}
              source={{uri: 'https://project-management.com/wp-content/uploads/2018/10/top-5-psa-pm-image.png'}}
          />
        </View>
      </View>

      {/*Tenth Screen */}
      <View style={styles.container}>
      <View style = {{ alignItems:"center"}}>
      <LessonHeader centerText='Estimate Costs' navigation={this.props.navigation}/>
      </View>
     
        <Text style={styles.textTitle}>
          Vendor Bid Analysis
        </Text>
        <Text style={styles.textInfo}>
          A technique used when working with suppliers on
          uncertain activities. Gathering information from
          vendors to help in estabilishing cost estimates.
        </Text>
        <Text style={styles.textInfo}>
            Requesting bids or quotes, with some of your
            trusted vendor sources for estimates.

        </Text>
       
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 300, 
                height: 300
              }}
              source={{uri: 'http://strikingprojectmanagement.com/wp-content/uploads/2013/02/Vendor-Bid-Analysis-300x150.png'}}
          />
        </View>
      </View>

      {/*Last Screen Project Cost Management - Module Estimating - Tools */}
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
          {/*Button - Project Cost Management - Module Estimating - Outputs */}
          <TouchableHighlight style={[styles.buttonContainer, styles.activitiesButton]} 
            onPress={() => {this.finishSubTopic("Estimating", "EST_ToolsAndTechniques")}}>
              <Text style={styles.buttonText}>Continue studying</Text>
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

//Drawer Navigator for the beginning of the following modules:
//Type of Costs
//Inputs
//Tools an Techniques
//Outputs
export default PCM_EstimatingToolsScreen
/*export default createDrawerNavigator(
      {

        PCM_EstimatingTypes: {
          screen: PCM_EstimatingTypesScreen,
          navigationOptions : {
            title:"Types of Costs",
          }
        },
        PCM_EstimatingInputs: {
          screen: PCM_EstimatingInputsScreen,
          navigationOptions : {
            title:"Inputs",
          }
        },
        PCM_EstimatingTools: {
          screen: PCM_EstimatingToolsScreen,
          navigationOptions : {
            title:"Tools and Techniques",
          }
        },
        PCM_EstimatingOutputs: {
          screen:  PCM_EstimatingOutputsScreen,
          navigationOptions : {
            title:"Outputs",
          }
        },
      },
      {
        //Header is created mannualy
        //Drawer is opened with the button at the Header
        headerMode: 'none',
        drawerLockMode:"locked-closed",
        drawerPosition: "right",
      }
    );*/
  
  