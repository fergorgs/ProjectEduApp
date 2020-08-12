import React from 'react';
import {  View,StyleSheet,Dimensions,Image,Text,Alert,TouchableHighlight} from 'react-native';
import {Header,Icon} from 'react-native-elements'
import Swiper from 'react-native-swiper';
import { createDrawerNavigator} from 'react-navigation-drawer'
import LessonHeader from './LessonHeader.js'

//Project Cost Management - Module Estimating - Inputs
class  TopicPage extends React.Component {

  constructor(props) {
    super(props);
  }

  //to the best of my knowledge, up until react native v0.61.4
  //there is no built in way to automaticaly set an image's heigth
  //based on its resized width. Hence the need of this function
  getImageStyle(imgSource) {

    h = Image.resolveAssetSource(imgSource).height
    w = Image.resolveAssetSource(imgSource).width
 
    newHeigth = (h*(Dimensions.get('window').width*0.7))/w

    return {
      borderColor: "#FFCB64",
      borderWidth:3,
      borderRadius:5,
      marginVertical:50,
      width:"70%",
      height:newHeigth,
      resizeMode: 'contain'
    }
  }

  getMiddleContent() {

    temp = []

    if(this.props.pageContent.text)
      temp.push(<Text style={styles.textInfo}>{this.props.pageContent.text}</Text>)

    if(this.props.pageContent.subTexts){

      subs = this.props.pageContent.subTexts
      for(i = 0; i < subs.length; i++)
        temp.push(<Text style={styles.subTextInfo}>{subs[i].subText}</Text>)
    }

    if(this.props.pageContent.image)
      temp.push(<Image source={this.props.pageContent.image} style={this.getImageStyle(this.props.pageContent.image)}></Image>)

    return temp
  }
     
  render() {

    const middleContent = this.getMiddleContent();
  
    return (

      <View style={styles.container}>
        
        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText={this.props.headerText} navigation={this.props.navigation}/>
        </View>

        {middleContent}

      </View>
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
        fontSize:25,
        marginTop:30,
        marginHorizontal:20,
        marginBottom: 0,
        padding:10,
        borderColor: "#54a0ff",
        borderWidth:3,
        borderRadius:5,
        backgroundColor: "#E7F1FF",  
      },
      subTextInfo:{
        textAlign:'center',
        fontSize:15,
        marginTop:20,
        marginHorizontal:20,
        marginBottom: 0,
        padding:10,
        borderColor: "#00B205",
        borderWidth:0,
        borderRadius:5,
        backgroundColor: "#C4FFC5",  
      },
      textTitle:{
        textAlign:'center',
        fontSize:25,
        marginTop:30,
        marginHorizontal:20,
        marginBottom: 0,
        padding:10,
        borderColor: "#54a0ff",
        borderWidth:3,
        borderRadius:5,
        backgroundColor: "#E7F1FF",
      },
      containerImages:{
        justifyContent:'space-around',
        flexDirection:'row',
        alignItems: 'center',
    },
      //moved to getImageStyle fuction
      /*infoImage:{
        borderColor: "#FFCB64",
        borderWidth:3,
        borderRadius:5,
        marginVertical:30,
        //maxWidth:"70%",
        width:"70%",
        // padding: "10%",
        //resizeMethod:'resize',
        resizeMode: 'contain'
      },*/
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
  
export default TopicPage