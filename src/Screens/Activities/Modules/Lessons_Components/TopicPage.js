import React from 'react';
import {  ScrollView, View,StyleSheet,Dimensions,Image,Text} from 'react-native';
import { WebView } from 'react-native-webview';
import {Header,Icon} from 'react-native-elements'
import Swiper from 'react-native-swiper';
import { createDrawerNavigator} from 'react-navigation-drawer'
import LessonHeader from './LessonHeader.js'

//Project Cost Management - Module Estimating - Inputs
class  TopicPage extends React.Component {

  constructor(props) {
    super(props);
  }

  //function to resize the image
  //it is broken. FOr some reason, "Image.getSize" work when called from the 
  //"render" method, but not on this case
  //also i'm too lazy to find out why
  getImageStyle(imgUrl) {

    let h = 100
    let w = 100

    Image.getSize(imgUrl, (width, height) => {
      
      h = height
      w = width

    }, (error) => {
      console.log(`Couldn't get the image size: ${error.message}`);
    });

    console.log("h: " + h + " | w: " + w)
 
    let newHeigth = (h*(Dimensions.get('window').width*0.7))/w

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

    let temp = []

    if(this.props.pageContent.mainTexts){
      
      let mains = this.props.pageContent.mainTexts
      for(let i = 0; i < mains.length; i++)
        temp.push(<Text style={styles.textInfo}>{mains[i].text}</Text>)
    }

    if(this.props.pageContent.subTexts){

      let subs = this.props.pageContent.subTexts
      for(let i = 0; i < subs.length; i++)
        temp.push(<Text style={styles.subTextInfo}>{subs[i].subText}</Text>)
    }

    if(this.props.pageContent.images){

      let imgs = this.props.pageContent.images
      for(let i = 0; i < imgs.length; i++){
        if(imgs[i].src != ''){
          temp.push(<Image source={{uri: imgs[i].src}} style={this.getImageStyle(imgs[i].src)}></Image>)
        }
      }
    }

    if(this.props.pageContent.videos){

      let vids = this.props.pageContent.videos
      for(let i = 0; i < vids.length; i++)
        if(vids[i].src != ''){
          temp.push(
            <WebView
              style={styles.videoContainer}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              automaticallyAdjustContentInsets={true}
              scalesPageToFit={true}
              source={{ uri: vids[i].src }}
            />)
        }
    }

    return temp
  }
     
  render() {

    const middleContent = this.getMiddleContent();

    return (

      
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText={this.props.headerText} navigation={this.props.navigation}/>
        </View>

        {middleContent}
        </View>
      </ScrollView>
      
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:Dimensions.get("window").width,
        alignItems:"center",
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
    videoContainer:{ 
      marginTop: 30,
      marginBottom: 30, 
      width: Dimensions.get('window').width*0.85, 
      height: (Dimensions.get('window').width*0.85)*(9/16) 
    },
      //moved to getImageStyle fuction
      // infoImage:{
      //   borderColor: "#FFCB64",
      //   borderWidth:3,
      //   borderRadius:5,
      //   marginVertical:30,
      //   //maxWidth:"70%",
      //   // width:"70%",
      //   padding: "10%",
      //   resizeMode: 'stretch'
      // },
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