import React from 'react';
import {  View,
  StyleSheet,
  Button,
  Text,
  Dimensions,
  Platform,
  WebView,
  TouchableHighlight,
  Alert
} from 'react-native';
import {Header,Icon} from 'react-native-elements'
import Swiper from 'react-native-swiper'
import LessonHeader from '../../../LessonHeader.js'

export default class IntroductionVideo extends React.Component {

  render() {
    return (

    <Swiper
      showsButtons={false} 
      autoplay={false}
      loop = {true}
    >
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
              Introduction
            </Text>
          </View>
          
      </View>
      {/*Webview for the video 
        It's not possible to show the video in full screen with expo.
        For using another modules it's necessary to eject from expo.
      */}
      <View style={styles.container}>
        <WebView
            style={{ marginTop: (Platform.OS == 'ios') ? 20 : 0, width: 360, height: 300 }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{ uri: "https://www.youtube.com/embed/KqsOqMFwJO4" }}
          />   
      </View>
      <View style={{
         flex:1,
         width:Dimensions.get("window").width,
         alignItems:"center",
         backgroundColor:"#97CAE5"
      }}>

      <View style = {{alignItems:"center"}}>
      <LessonHeader centerText='Introduction' navigation={this.props.navigation}/>
        </View>
        
        <View style = {{alignItems:"center",marginTop:40}}>
          <Icon 
              name='work'
              size = {300}
          />
        </View>
          
          <TouchableHighlight style={[styles.buttonContainer, styles.activitiesButton]} 
            onPress={() => this.props.navigation.navigate("IntroductionCost")}>
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
  },
});