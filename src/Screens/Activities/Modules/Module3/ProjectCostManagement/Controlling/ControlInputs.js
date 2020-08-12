import React from 'react';
import {  View,StyleSheet,Dimensions,Image,Text,Alert,TouchableHighlight} from 'react-native';
import {Header,Icon} from 'react-native-elements'
import Swiper from 'react-native-swiper';
import { createDrawerNavigator} from 'react-navigation-drawer'
import LessonHeader from '../../../LessonHeader.js'
import * as firebase from 'firebase'


//Project Cost Management - Module Control Costs - Inputs
class  PCM_ControlCostInputsScreen extends React.Component {
     
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
    {/*Initial Screen - Inputs */}
    <View style={{
           flex:1,
           width:Dimensions.get("window").width,
           justifyContent: 'center',
           alignItems:"center",
           marginTop:-70,
           backgroundColor:"#0abde3"
        }}>
          <View style = {{alignItems:"center"}}>
            <Text style = {{textAlign:"center",fontSize:40}}>
              Inputs
            </Text>
          </View>
          
        </View>
  
    {/*1th Screen */}
    <View style={styles.container}>
        
        <View style = {{ alignItems:"center"}}>
            <LessonHeader centerText='Control Costs' navigation={this.props.navigation}/>
            {/*<Header
            backgroundColor = '#1e272e'
            leftComponent={{
            icon: 'clear',
            color: '#fff',
            onPress: () => Alert.alert(
              'Warning',
              'If you leave, your progress will be lost.',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress:  () => this.props.navigation.navigate("ListCostManagement")},
              ],
              {cancelable: false},
            ),
            }}
            centerComponent={{ text: 'Control Costs', style: { color: '#fff' } }}
            rightComponent={{ 
              icon: 'menu', 
              color: '#fff',
              onPress: () => this.props.navigation.openDrawer()
              }}
            />*/}
        </View>

        <Text style={styles.textTitle}>
           Inputs
        </Text>
        <Text style={styles.textInfo}>
           Cost Baseline
        </Text>
        <Text style={styles.textInfo}>
           Project Funding Requirements
        </Text>
        <Text style={styles.textInfo}>
           Work Performance Data
        </Text>
        <Text style={styles.textInfo}>
            Organization Process Assets
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode = "contain"
              style={{
                width: 150, 
                height: 150
              }}
              source={{uri: 'http://otimizeseunegocio.com/wp-content/uploads/2018/03/seta-icon.png'}}
          />
        </View>    
    </View>
    {/*2th Screen */}
    <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
          <LessonHeader centerText='Control Costs' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Cost Baseline
          </Text>
          <Text style={styles.textInfo}>
            Compared with actual results to determine if a
            change,corrective action, or preventive action
            is necessary.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://image.freepik.com/fotos-gratis/cortar-pessoas-analisando-graficos_23-2147707826.jpg'}}
            />
        </View>  
    </View>
    {/*3rd Screen */}
     <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
          <LessonHeader centerText='Control Costs' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Project Funding Requirements
          </Text>
          <Text style={styles.textInfo}>
            Include projected expenditures plus anticipated
            liabilities.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://static9.depositphotos.com/1021974/1241/i/450/depositphotos_12412565-stock-photo-banking.jpg'}}
            />
        </View>  
    </View>
    {/*4th Screen */}
    <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
          <LessonHeader centerText='Control Costs' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Work Perfomance Data
          </Text>
          <Text style={styles.textInfo}>
            Includes inforation about project progress,
            such as which activities have started, their
            progress, and which deliverables have finished.
          </Text>
          <Text style={styles.textInfo}>
            Information also includes costs that have been
            authorized and incurred.
          </Text>
        <View style={styles.containerImages}>
            <Image
                resizeMode = "contain"
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://www.projectcubicle.com/wp-content/uploads/2018/02/Work-Performance-DataWPD-and-Work-Performance-InformationWPI.png'}}
            />
        </View>  
    </View>
    {/*5th Screen */}
    <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
          <LessonHeader centerText='Control Costs' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Organization Process Assets 
          </Text>
          <Text style={styles.textInfo}>
            Existing formal and informal cost control-related
            policies, procedures, and guidelines.
          </Text>
          <Text style={styles.textInfo}>
            Control cost tools, monitoring and reporting 
            are methods to be used.
          </Text>
          <Text style={styles.textInfo}>
          
          </Text>
        <View style={styles.containerImages}>
            <Image
                resizeMode = "contain"
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://i.pinimg.com/originals/32/97/64/32976453331fd4f85d41040b5df126ad.png'}}
            />
        </View>  
    </View>

    {/*Last Screen - Project Cost Management - Module Control Costs - Inputs */}
      <View style={{
        flex:1,
        width:Dimensions.get("window").width,
        justifyContent: 'center',
        alignItems:"center",
        marginTop:-70,
        backgroundColor:"#97CAE5"
      }}>
        <View style = {{marginTop:-100, alignItems:"center",}}>
          <LessonHeader centerText='Tools and Techniques' navigation={this.props.navigation}/>
        </View>
        
        <View style = {{alignItems:"center",marginTop:40}}>
          <Icon 
              name='work'
              size = {300}
          />
        </View>
          {/*Button - Project Cost Management - Module Control Costs - Tools and Techniques */}
          <TouchableHighlight style={[styles.buttonContainer, styles.activitiesButton]} 
            onPress={() => {this.finishSubTopic("Controlling", "CON_Inputs")}}>
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
        alignItems:"center",
    },
      textInfo:
      {
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
        fontSize:20,
        margin:5
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

    
export default PCM_ControlCostInputsScreen
  
  