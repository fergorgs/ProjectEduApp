import React from 'react';
import { View,StyleSheet } from 'react-native';
import {Header, ListItem} from 'react-native-elements'
import * as firebase from 'firebase'

class Settings extends React.Component {

//Hides the Header
//It's created manually
static navigationOptions = {
    header: null
}

constructor(props) {
    super(props);
    this.state = {
      listSettings:
      [
        {
            title:"About",
            icon:"info"
        },
        {
            title:"Help",
            icon:"search"
        },
        {
            title:"Update your profile",
            icon:"refresh"
        },
        {
            title:"Notifications",
            icon:"call"
        },
        {
            title:"Logout",
            icon:"pause"
        }
      ]
    }
}
  //Function for Logging out the user
  async OnLogout() {
    try {
        await firebase.auth().signOut()
        .then(() => this.props.navigation.navigate('LoginScreen'))
        console.log("Logged Out!");
    } catch (error) {
        console.log(error);
    }
}

  render() {

    const list = this.state.listSettings

    return (
      <View>
        {/*Screen Header Information */}
        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: () => this.props.navigation.openDrawer(),
          }}
          centerComponent={{ text: 'SETTINGS', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'portrait', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Perfil")
          }}
        />
      {/*Renders the settings list */}
      {
      list.map((l, i) => (
        <ListItem
          key={i}
          title={l.title}
          bottomDivider = {true}
          chevron = {true}
          leftIcon={{
            name: l.icon
          }}
          onPress = {
            (function(){
              if(l.title=="About")
              {
                this.props.navigation.navigate("InfoScreen")
              }
              if(l.title=="Help")
              {
                this.props.navigation.navigate("HelpScreen")
              }
              if(l.title=="Update your profile")
              {
                this.props.navigation.navigate("UpdateProfileScreen")
              }
              if(l.title=="Notifications")
              {
                this.props.navigation.navigate("NotificationScreen")
              }
              if(l.title=="Logout")
              {
                  this.OnLogout()
              }
            }).bind(this)
          }
        />
      ))
      }    
      </View>
    );
  }
}
export default Settings;

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  buttonContainer:{
    width: 400,
    height: 100,
    alignSelf: 'center',
    alignContent: 'center',
  }
});