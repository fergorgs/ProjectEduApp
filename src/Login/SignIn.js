import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  TouchableHighlight,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import * as firebase from 'firebase';
import moment from "moment";
import * as Facebook from 'expo-facebook';


export default class SignIn extends Component {

  state = {
    email   : '',
    password: '',
    errorMessage: '',
    currentDate: new Date(),
    isSelected:0,
  }

  //Sets the Header to be null
  //The screen does not need a header
  static navigationOptions = {
    header: null
  }
//Function that is responsible for the user login
 async onLogin ()  {
    const{email,password,currentDate} = this.state;
    try {
      //Sign in the user
      await firebase.auth()
      .signInWithEmailAndPassword(email, password)
      console.log("Logged In!");
      
      let userId = firebase.auth().currentUser.uid
      let userNamePath = "/users/" + userId;

      //Update the database on "last_logged_in"
      firebase.database().ref(userNamePath).update({
        last_logged_in: moment(currentDate).format('MMMM Do YYYY, h:mm:ss a')
      })
      .catch((error)=>{
        console.log('error ' , error)
        Alert.alert(error.message)
      })
      //Goes to the main screen of the app
      this.props.navigation.navigate("AppScreen")
    }
    catch (error) {
      console.log(error.toString())
      Alert.alert(error.message)

    }
  }

//Function that is responsible to login with Facebook
//It's necessary to create a privacy policy for this function
//Just works for test users
  async onLoginFB() {
      const {type,token} = await Facebook.logInWithReadPermissionsAsync('2387761231503605', {
        permissions: ['public_profile','email'],
      });
      if (type === 'success') {
        //Creates the user on the database
        const credential = firebase.auth.FacebookAuthProvider.credential(token)
        firebase.auth().signInAndRetrieveDataWithCredential(credential)
        .then((result) =>{
          console.log('User Signed In ');

          //Verify if it's the first time that the user is logging
          if(result.additionalUserInfo.isNewUser)
          {
            
            //Creates table users on firebase
            firebase.database().ref('/users/' + result.user.uid).set({
              name:result.user.displayName,
              progress:0,
              points:0,
              created_at:moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')
            })

            //Creates table Leaderboard on firebase
            firebase.database().ref("/leaderbords/" + result.user.uid).set({
              name:result.user.displayName,
              points:0,
              id:firebase.auth().currentUser.uid
            })

             //Creates table Achievements on firebase
            firebase.database().ref("/achievements/" + result.user.uid).set({
              BrightBeginning:"Unavailable",
              Respect:"Unavailable",
              RockstarRookie:"Unavailable",
              LimelightAward:"Unavailable",
              SpotlightAward:"Unavailable",
              HeroAward:"Unavailable",
              ShiningStarAward:"Unavailable",
              SuperstarAward:"Unavailable",
              PresidentsAward:"Unavailable",
              HonorClub:"Unavailable",
              DiamondClub:"Unavailable"
            })
            
            //Creates table for Module 3 
            //Registering the Module Project Cost Management
            firebase.database().ref("/module3/Project Cost Management/" + userId + "/Introduction").set({
              id:1,
              displayTitle:"Introduction",
              checkmark:false,
              INT_IntroVideo: {
                id:1,
                displayTitle:"Introduction Video",
                checkmark:false,
                idName:"INT_IntroVideo"},
              INT_ContentOverall: {
                id:2,
                displayTitle:"Content Overall",
                checkmark:false,
                idName:"INT_ContentOverall"},
              INT_Activities: {
                id:3,
                displayTitle:"Activities",
                checkmark:false,
                idName:"INT_Activities"}
            })
            firebase.database().ref("/module3/Project Cost Management/" + userId + "/Estimating").set({
              id:2,
              displayTitle:"Estimating",
              checkmark:false,
              EST_TypesOfCosts: {
                id:1,
                displayTitle:"Types of Costs",
                checkmark:false,
                idName:"EST_TypesOfCosts"},
              EST_Inputs: {
                id:2,
                displayTitle:"Inputs",
                checkmark:false,
                idName:"EST_Inputs"},
              EST_ToolsAndTechniques: {
                id:3,
                displayTitle:"Tools and Techniques",
                checkmark:false,
                idName:"EST_ToolsAndTechniques"},
              EST_Outputs: {
                id:4,
                displayTitle:"Outputs",
                checkmark:false,
                idName:"EST_Outputs"},
              EST_Activities: {
                id:5,
                displayTitle:"Activities",
                checkmark:false,
                idName:"EST_Activities"}
            })
            firebase.database().ref("/module3/Project Cost Management/" + userId + "/Budgeting").set({
              id:3,
              displayTitle:"Budgeting",
              checkmark:false,
              BUD_Introduction: {
                id:1,
                displayTitle:"Introduction",
                checkmark:false,
                idName:"BUD_Introduction"},
              BUD_Inputs: {
                id:2,
                displayTitle:"Inputs",
                checkmark:false,
                idName:"BUD_Inputs"},
              BUD_ToolsAndTechniques: {
                id:3,
                displayTitle:"Tool and Techniques",
                checkmark:false,
                idName:"BUD_ToolsAndTechniques"},
              BUD_Outputs: {
                id:4,
                displayTitle:"Outputs",
                checkmark:false,
                idName:"BUD_Outputs"},
              BUD_Activitiess: {
                id:5,
                displayTitle:"Activities",
                checkmark:false,
                idName:"BUD_Activities"}
            })
            firebase.database().ref("/module3/Project Cost Management/" + userId + "/Controlling").set({
              id:4,
              displayTitle:"Controlling",
              checkmark:false,
              CON_Introduction: {
                id:1,
                displayTitle:"Introduction",
                checkmark:false,
                idName:"CON_Introduction"},
              CON_Inputs: {
                id:2,
                displayTitle:"Inputs",
                checkmark:false,
                idName:"CON_Inputs"},
              CON_ToolsAndTechniques: {
                id:3,
                displayTitle:"Tool and Techniques",
                checkmark:false,
                idName:"CON_ToolsAndTechniques"},
              CON_Outputs: {
                id:4,
                displayTitle:"Outputs",
                checkmark:false,
                idName:"CON_Outputs"},
              CON_Activities: {
                id:5,
                displayTitle:"Activities",
                checkmark:false,
                idName:"CON_Activities"}
            })

            //Creates table Statistics on firebase
            firebase.database().ref("/statistics/" + result.user.uid+"/"+moment(new Date()).format("YYYY-MM-DD")+"/").set({
              date:moment(new Date()).format("MM-DD"),
              points:0
            })
          }
          else
          {
            //The user already logged once
            //Just updates the time it was logged
            firebase.database().ref('/users/' + result.user.uid).update({
              last_logged_in:moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')
            });
          }
          this.setState({isSelected:1})
        })
        
        .catch((error) =>{
          this.setState({isSelected:0})
          console.log(error)
          Alert.alert(error.message)
        })
    }
  }
    render() {
      {/*Pressed the button Sign in*/}
      if(this.state.isSelected===1)
      {
        return(
        <View style={styles.containerLoading}>
          <Text style={{color:'#e93766', fontSize: 20,textAlign:"center"}}>
            Seguir para o menu principal
          </Text>
          <TouchableHighlight style={{
              height:45,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop:30,
              marginBottom:20,
              width:250,
              borderRadius:30,
              backgroundColor: "#e93766",
          }} 
            onPress={()=> this.props.navigation.navigate("AppScreen")}>
            <Text style={styles.signUpText}>Continuar</Text>
          </TouchableHighlight>
        </View>
        )
      }  
    return (

      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
          
         {/*Renders logo ProjectEDU*/}
        <Image
          resizeMode = "contain"
          style={{width: 200, height: 200, marginBottom:30}}
          source = {require("../../assets/logo.png")}
        />

         {/*Text Input email*/}
        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/envelope/androidL/40/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize = 'none'
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
         {/*Text Input password*/}
        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/password/androidL/40/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize = 'none'
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>
     
        {/*Button - Screen Recover Password */}
        <TouchableOpacity style={styles.restoreButtonContainer}
         onPress={() => this.props.navigation.navigate('RecoverScreen')}>
            <Text>Forgot your password?</Text>
        </TouchableOpacity>

        {/*Button - Login*/}
        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}
        onPress={this.onLogin.bind(this)}>
          <Text style={styles.loginText}>Login</Text>
          
        </TouchableOpacity>

        {/*Button - Screen Sign Up */}
        <TouchableOpacity style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('SignUpScreen')}>
            <Text>Register</Text>
        </TouchableOpacity>

        {/*Button - Facebook Login */}
        <TouchableOpacity style={[styles.buttonContainer, styles.fabookButton]}
        onPress={this.onLoginFB.bind(this)}>
          <View style={styles.socialButtonContent}>
            <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook/androidL/40/FFFFFF'}}/>
            <Text style={styles.loginText}>Continue with facebook</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#686F9A',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:15,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  icon:{
    width:30,
    height:30,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: '#3b5998',
  },
  fabookButton: {
    backgroundColor: "#3b5998",
  },
  loginText: {
    color: 'white',
  },
  restoreButtonContainer:{
    width:250,
    marginBottom:15,
    alignItems: 'flex-end'
  },
  socialButtonContent:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  socialIcon:{
    color: "#FFFFFF",
    marginRight:5
  },
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
 