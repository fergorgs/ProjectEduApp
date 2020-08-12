import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
//import Orientation from 'react-native-orientation';
import * as firebase from 'firebase'

export default class Perfil extends Component {


  state = {
        name: '',
        email:'',
        photo:null,
        points:'',
        progress:'',
        currentDate: new Date(),
  }


  //Receives all the user information from the database
  componentDidMount(){
    let userid = firebase.auth().currentUser.uid
    let usersRef = firebase.database().ref("users/"+userid);

    usersRef.on("value", (data) => {
      let points = data.val().points
      
      this.setState({points:points})
      this.setState({name:data.val().name})
      this.setState({progress:data.val().progress})
      this.setState({email:firebase.auth().currentUser.email})

      if(firebase.auth().currentUser.photoURL===null)
      {
          this.setState({photo:data.val().image})
          firebase.auth().currentUser.updateProfile({
            photoURL:data.val().image
          })
      }
      else
      {
        this.setState({photo:firebase.auth().currentUser.photoURL})
      }
    });

    // Orientation.addOrientationListener(this._orientationDidChange);

  }

  // _orientationDidChange = (orientation) => {
  //   alert("changed")
  // }


  render() {
    return (
    <View>
       {/*Screen Header Informatiom */}
        <Header
            backgroundColor = '#1e272e'
            barStyle = 'light-content'
            leftComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: () => this.props.navigation.openDrawer(),
            }}
            centerComponent={{ text: 'PROFILE', style: { color: '#fff' } }}
        /> 
        {/* Renders User Profile */}
        <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri:this.state.photo}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{this.state.name}</Text>
              <Text style={styles.info}>{this.state.email}</Text>
              <Text style={styles.description}>
                Points: {this.state.points}
              </Text>
              <Text style={styles.description}>
                Progress: {this.state.progress}%
              </Text>
              
              {/*Renders the 3 button on the profile screen
                Activies
                Ranking
                Settings
              */}
            {/* <View style = {{flexDirection:"row",marginTop:70, alignItems:"center"}}>
                <TouchableOpacity style={styles.followButtonPlay}
                     onPress={() => {this.props.navigation.navigate("Activities")}}
                >
                    <View style = {{margin:5}}>
                        <Image style={styles.imageIcon} 
                            source={{uri:"https://img.icons8.com/color/48/000000/school.png"}}
                            resizeMode = 'contain'
                        />
                        <Text style = {{textAlign:"center"}}>
                            Activities
                        </Text>
                    </View>
                </TouchableOpacity>     
                <TouchableOpacity style={styles.followButtonPlay}
                     onPress={() => {this.props.navigation.navigate("Ranking")}}
                >
                    <View style = {{margin:5}}>
                        <Image style={styles.imageIcon} 
                            source={{uri:"https://img.icons8.com/ultraviolet/40/000000/leaderboard.png"}}
                            resizeMode = 'contain'
                        />
                        <Text style = {{textAlign:"center"}}>
                            Ranking
                        </Text>
                    </View>
                    
                </TouchableOpacity>
                <TouchableOpacity style={styles.followButtonPlay} 
                    onPress={() => {this.props.navigation.navigate("Settings")}}
                >
                    <View style = {{margin:5}}>
                        <Image style={styles.imageIcon} 
                            resizeMode = 'contain'
                            source={{uri:"https://img.icons8.com/plasticine/100/000000/settings.png"}}
                        />
                        <Text style = {{textAlign:"center"}}>
                            Settings
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>  */}
                
            </View>
        </View>
      </View>
    </View>
    
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#3b5998",
    height:180,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:22,
    color: "#696969",
    marginTop:20,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  followButtonPlay: {
    marginTop:10,
    marginBottom: 10,
    height:35,
    width:100,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
  },
  imageIcon:{
    width:80,
    height:80
    ,
  },
});
 