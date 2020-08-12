import React from 'react';
import {  View,StyleSheet,TouchableHighlight,Dimensions,ScrollView,Image,Text,Alert,WebView} from 'react-native';
import {Header,Icon} from 'react-native-elements'
import Swiper from 'react-native-swiper';
import LessonHeader from '../../../LessonHeader.js'

export default class IntroductionScroolView extends React.Component {

  render() {

  return (

    //Swiper to render all the pages for the introduction module
    <Swiper
      showsButtons={false} 
      autoplay={false}
      loop = {true}
    >
      {/*First Screen of the Module */}
      <View style={styles.container}>
        <View style = {styles.containerHeader}>
        <LessonHeader centerText='Introduction' navigation={this.props.navigation}/>
        </View>

        <View style={styles.containerImages}>
          <Image
              style={styles.infoImage}
              source={{uri: 'http://apexpjm.com/wp-content/uploads/2014/04/Three-types-of-estimating-image.jpg'}}
          />
          <Image
              style={styles.infoImage}
              source={{uri: 'https://www.cpas4you.com/wp-content/uploads/2018/08/AdobeStock_113685937-72.jpg'}}
            />
        </View>
        <View style={styles.containerImages}>
          <Image
                style={styles.infoImage}
                source={{uri: 'http://jrl-consulting.ch/wp-content/uploads/2015/11/jrl-bossert-consulting-09.jpg'}}
          />
           <Image
                style={styles.infoImage}
                source={{uri: 'https://atlantachallenge.com/wp-content/uploads/2015/06/business-planning-background-1600x900.png'}}
          />
        </View>
        <Text style={styles.textInfo}>
            Project Cost Management includes the process involved 
            in estimating,budgeting and controling costs so that 
            the project can be completed within the approved budget.
        </Text>

      </View>

      {/*Second Screen of the Module */}
      <View style={styles.container}>
        <View style = {{marginTop:-70, alignItems:"center",}}>
        <LessonHeader centerText='Introduction' navigation={this.props.navigation}/>
        </View>       

          <View style={styles.containerImages}>
          <Image
              resizeMode = 'contain'
              style={styles.infoImagePhases}
              source={{uri: 'https://d2myx53yhj7u4b.cloudfront.net/sites/default/files/styles/full_width_desktop/public/IC-Diagram-of-Project-Cost-Management-Phases.jpg'}}
          />
        </View>
        <View style={styles.containerImages}>
          <Image
              style={styles.infoImage}
              source={{uri: 'https://www.projectcontrolacademy.com/wp-content/uploads/2017/04/VT010-CostContingency-1000x550.png'}}
          />
          <Image
              resizeMode = 'stretch'
              style={styles.infoImage}
              source={{uri: 'https://static1.squarespace.com/static/518134dde4b0bec12a2c50dd/5b3140016d2a73f2d1ea27b8/5b314040352f535d36e4e34d/1529954370765/Cost-Estimate.jpg'}}
            />
        </View>

        <Text style={styles.textInfo}>
          Process of developing and approximation 
          of the monetary resources needed to 
          complete project activities.
        </Text>
      </View>

      {/*Third Screen of the Module */}
      <View style={styles.container}>

        <View style = {{marginTop:-50, alignItems:"center",}}>
        <LessonHeader centerText='Introduction' navigation={this.props.navigation}/>
        </View>
      
         <View style={styles.containerImages}>
          <Image
              resizeMode = 'contain'
              style={styles.infoImagePhases}
              source={{uri: 'https://d2myx53yhj7u4b.cloudfront.net/sites/default/files/styles/full_width_desktop/public/IC-Diagram-of-Project-Cost-Management-Phases.jpg'}}
          />
        </View>
        <View style={styles.containerImages}>
          <Image
              style={styles.infoImage}
              source={{uri: 'https://wwwcdn.bigcommerce.com/www1.bigcommerce.com/assets/answers/how-determine-your-marketing-budget.jpg'}}
          />
          <Image
              style={styles.infoImage}
              source={{uri: 'https://jacquelinetavakolicom.files.wordpress.com/2017/08/budget-smaller-size.jpg'}}
            />
        </View>
         <Text style={styles.textInfo}>
          Process of aggregating the estimated costs of
          individual activities or work packages to estabilish
          an authorizes cost baseline.
        </Text>
      </View>

      {/*Fourth Screen of the Module */}
      <View style={styles.container}>
        <View style = {{marginTop:-50, alignItems:"center",}}>
        <LessonHeader centerText='Introduction' navigation={this.props.navigation}/>
        </View>

        <View style={styles.containerImages}>
          <Image
              resizeMode = 'contain'
              style={styles.infoImagePhases}
              source={{uri: 'https://d2myx53yhj7u4b.cloudfront.net/sites/default/files/styles/full_width_desktop/public/IC-Diagram-of-Project-Cost-Management-Phases.jpg'}}
          />
        </View>
        <View style={styles.containerImages}>
          <Image
              resizeMode = 'stretch'
              style={styles.infoImage}
              source={{uri: 'https://www.startupdonut.co.uk/sites/default/files/controllingcosts_299887349.jpg'}}
          />
          <Image
              style={styles.infoImage}
              source={{uri: 'http://asgstrategies.com/wp-content/uploads/2014/10/a_shutterstock_106100270_manage_costs_small-e1362665858484-2.jpg'}}
            />
        </View>
         <Text style={styles.textInfo}>
          Process of monitoring the status of the project to
          update the project costs and managing changes to the
          cost baseline.
        </Text>
      </View>

      {/*Last Screen of the Introduction Module - Theory 
          Contains a button to the Introduction Activities
      */}
      <View style={{
         flex:1,
         width:Dimensions.get("window").width,
         justifyContent: 'center',
         alignItems:"center",
         marginTop:-70,
         backgroundColor:"#97CAE5"
      }}>
        <View style = {{marginTop:-100, alignItems:"center",}}>
        <LessonHeader centerText='Introduction' navigation={this.props.navigation}/>
        </View>
        
        <View style = {{alignItems:"center",marginTop:40}}>
          <Icon 
              name='work'
              size = {300}
          />

        {/*Button for Introduction Activities */}
        </View>
          
          <TouchableHighlight style={[styles.buttonContainer, styles.activitiesButton]} 
            onPress={() => this.props.navigation.navigate("PCM_IntroActivity1")}>
              <Text style={styles.buttonText}>Go to Activities</Text>
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
      //marginTop:-70
    },
    containerHeader: {
      alignItems:"center",
    },
    textTitle:{
      textAlign:'center',
      fontSize:20,
      marginTop:20,
      marginBottom: 20
    },
    textSubTitle:{
      textAlign:'center',
      fontSize:15,
      marginTop:0,
      marginBottom: 5
    },
    textInfo:{
        textAlign:'center',
        fontSize:20,
        margin:10,
        marginTop:40,
        color:"white",
        backgroundColor:"#54a0ff"       
    },
    containerProgress:{
      marginTop:5,
      marginBottom:10,
      alignItems: 'center',
    },
    containerImages:{
        marginTop:20,
        justifyContent:'space-around',
        flexDirection:'row',
        alignItems: 'center',
        margin: 10,
    },
    infoImagePhases:{
      width: 350, 
      height: 150,
    },
    infoImage:{
        width: 150, 
        height: 150,
    },
    infoImageOverlay:{
      width: 300, 
      height: 300,
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
    activitiesButton: {
      backgroundColor: "#3498db",
    },
    buttonText: {
      color: 'white',
    }
});


