import React, { Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import * as firebase from 'firebase';
import * as Permissions from 'expo-permissions'
import { Notifications } from 'expo';

export default class Loading extends Component {

  componentDidMount() {
    this.checkIfLoggedIn()
  }

  //Listener Checks User Stats
  checkIfLoggedIn = () => {
    var unscribe = firebase.auth().onAuthStateChanged(user =>{
    if(user)
    {
      ///User is authenticated
      //Removes the listener
      //Go to Main Screen
      unscribe()
      this.registerForPushNotificationsAsync().then(()=>{
        this.props.navigation.navigate('AppScreen')
      })
    }
    else
    {
      //User is no authenticated
      //Removes the listener
      //Go to Login Screen
      unscribe()
      this.props.navigation.navigate('LoginScreen');
    }
  });
};

  registerForPushNotificationsAsync = async () => {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }

    try {
      // Get the token that uniquely identifies this device
      let token = await Notifications.getExpoPushTokenAsync();
      console.log(token)

      // POST the token to your backend server from where you can retrieve it to send push notifications.
      let userId = firebase.auth().currentUser.uid
      firebase.database().ref("/users/" + userId).update({
        notification:true,
        pushtoken:token
      })
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'#e93766', fontSize: 40}}>Loading</Text>
        <ActivityIndicator color='#e93766' size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});