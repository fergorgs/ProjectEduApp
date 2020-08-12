import React from 'react';
import {View, Switch,StyleSheet,Text,Alert} from 'react-native';
import { Notifications } from 'expo';
import * as firebase from 'firebase'
import * as Permissions from 'expo-permissions'
import {Header} from 'react-native-elements'
import moment from 'moment'

export default class Alarm extends React.Component {

  state = {
    isEnabled:null,
  }

  //Receives user information about notification from the databse
  componentDidMount() {

    let user = firebase.auth().currentUser.uid
    let usersRef = firebase.database().ref("/users/"+user);
        
    usersRef.on("value", (data) => {
      let isAvailable = data.val().notification
      this.setState({isEnabled:isAvailable})
    });
  }

  //Enable notifications for the app
  //Schedule a daily notification
  //Updates the database
  enable = async () => {
    await this.registerForPushNotificationsAsync()
    .then((res) => {
      this.setState({ isEnabled: true })
      let userId = firebase.auth().currentUser.uid
      firebase.database().ref("/users/" + userId).update({
        notification:true
      })
      const localNotification = {
        title: "Daily Notification",
        body: "Let's Study Project Management",
        sound:true
      }
      const schedulingOptions = {
        time: (new Date()).getTime() + 5000,
        repeat:"day"
      }
      Notifications.scheduleLocalNotificationAsync(localNotification, schedulingOptions)
      .then(id => console.info(`Delayed notification scheduled (${id}) at ${moment(schedulingOptions.time).format()}`))
      .catch(err => console.error(err))

    })
    .catch((error)=>{
      console.log('error ' , error)
      Alert.alert(error.message)
    })
  }

   //Disabe notifications for the app
  //Cancel all the scheduled notifications
  //Updates the database
  disable = async () => {
    Notifications.cancelAllScheduledNotificationsAsync()
    .then((res) => {
      this.setState({ isEnabled: false })
      let userId = firebase.auth().currentUser.uid
      firebase.database().ref("/users/" + userId).update({
        notification:false
      })
    })
    .catch((error)=>{
      console.log('error ' , error)
      Alert.alert(error.message)
    })
  }
  toggleSwitch (value) {
    if (value === true) {
      this.enable()
    } else {
      this.disable()
    }
  }

  //Receives information about the device 
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

      // POST the token to your backend server from where you can retrieve it to send push notifications.
      let userId = firebase.auth().currentUser.uid
      firebase.database().ref("/users/" + userId).update({
        pushtoken:token
      })
    } catch (error) {
      console.log(error);
    }
};

  render() {
    return (
      <View style={styles.container}>
        {/*Renders a Switch for the notifications */}
        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: () =>  this.props.navigation.goBack(),
          }}
          centerComponent={{ text: 'NOTIFICATIONS', style: { color: '#fff' } }}
        />

      <View style={styles.toolbar}>
            <Text style={styles.toolbarTitle}>Enable Notifications</Text>
            <View style={styles.toolbarButton}>
              <Switch
                value={this.state.isEnabled}
                onValueChange={(val) => this.toggleSwitch(val)}
              />
            </View>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems:"center",   
    },
  toolbarButton:{
      width: 50,
      marginTop: 8,
    },
  toolbarTitle:{
      color:"black",
      textAlign:'center',
      fontSize: 20,
      flex:1,
      marginTop:6
    },
    toolbar:{
      paddingTop:30,
      paddingBottom:30,
      flexDirection:'row'
    },
});