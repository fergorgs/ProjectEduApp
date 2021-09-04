import React from 'react';
import {  View,StyleSheet,Dimensions,Image,Text,Alert,TouchableHighlight} from 'react-native';
import {Header,Icon} from 'react-native-elements'
import Swiper from 'react-native-swiper';
import { createDrawerNavigator} from 'react-navigation-drawer'
import LessonHeader from './LessonHeader.js'

class  TopicTitle extends React.Component {
     
    render() {
  
    return (

        <View style={styles.topicTitle}>
            <Text style={{fontSize:40, textAlign:"center"}}>
                {this.props.topicName}
            </Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    

    topicTitle:{
        
        flex:1,
        justifyContent: 'center',
        alignItems:"center",
        textAlignVertical: "center",
        backgroundColor:"#0abde3",
    }
  });
  
export default TopicTitle