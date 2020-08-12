import React from 'react';
import {  View,StyleSheet,Dimensions,Image,Text,Alert,TouchableHighlight} from 'react-native';
import {Header,Icon} from 'react-native-elements'
import Swiper from 'react-native-swiper';
import { createDrawerNavigator} from 'react-navigation-drawer'
import LessonHeader from '../../../LessonHeader.js'

//Project Cost Management - Module Determine Budget - Outputs
class  PCM_DetermineBudgetOutputsScreen extends React.Component {
     
    render() {
  
    return (
    //Swiper Screens
    <Swiper
        showsButtons={false} 
        autoplay={false}
        loop = {true}
    >
    {/*initial Screen - Outputs */}
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
            Outputs
          </Text>
        </View>
        
      </View>
      
      {/*1th Screen */}
      <View style={styles.container}>
        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Determine the Budget' navigation={this.props.navigation}/>
        </View>

        <Text style={styles.textTitle}>
          Outputs
        </Text>
        <Text style={styles.textInfo}>
           Cost Perfomance Baseline
        </Text>
        <Text style={styles.textInfo}>
            Project Funding Requirements
        </Text>
        <Text style={styles.textInfo}>
            Project Document Updates
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 300, 
                height: 300
              }}
              source={{uri: 'https://3.bp.blogspot.com/-hh062BRLH_A/Wq24w680M0I/AAAAAAAAubU/oWO9r7S4oY8Yn-bgojyMwjaixWJq-P_ngCLcBGAs/s320/SETA%2B12.fw.png'}}
          />
        </View>
      </View>

      {/*2th Screen */}
      <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Determine the Budget' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Cost Perfomance Baseline
          </Text>
          <Text style={styles.textInfo}>
            Specifies what costs will be incurred and when they
            will occur.
          </Text>
          <Text style={styles.textInfo}>
            It is developed by adding the costs of WBS by time periods.
          </Text>
          <Text style={styles.textInfo}>
            A time-phased budget that is used as a basis against which to measure,
            monitor, and control overall cost perfomance on the project. 
          </Text>
        <View style={styles.containerImages}>
            <Image
                resizeMode = "contain"
                style={{
                    width:350,
                    height:200,
                    marginTop:5
                }}
                source={{uri: 'https://pmpsuperguide.com/wp-content/uploads/2018/06/Cost-performance-format-768x486.png'}}
            />
        </View>  
    </View>
    {/*3rd Screen */}
    <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Determine the Budget' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Project Funding Requirements
          </Text>
          <Text style={styles.textInfo}>
            Describe the need for funding over the course of the project
            and are derived from the cost perfomance baseline.
          </Text>
          <Text style={styles.textInfo}>
            The difference between the funding requirements, 
            and the cost perfomance baseline at the end of the
            project is the management reserve.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:30
                }}
                source={{uri: 'https://pmhut.com/wp-content/uploads/2011/03/project-funding.png'}}
            />
        </View>  
    </View>
    {/*4th Screen */}
    <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Determine the Budget' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Project Document Updates
          </Text>
          <Text style={styles.textSubTitle}>
            Project documents that may be updated include:
          </Text>
          <Text style={styles.textInfo}>
            Risk Register
          </Text>
          <Text style={styles.textInfo}>
            Activity Cost Estimates
          </Text>
          <Text style={styles.textInfo}>
            Project Schedule
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'http://3.bp.blogspot.com/-XSzAkpW-W9s/Vmg6d0H2xTI/AAAAAAAAEMI/8vvP_vPolBc/s1600/update.jpg'}}
            />
        </View>  
    </View>

      {/*Last Screen - Project Cost Management - Module Determine Budget - Outputs*/}
      <View style={{
         flex:1,
         width:Dimensions.get("window").width,
         justifyContent: 'center',
         alignItems:"center",
         marginTop:-70,
         backgroundColor:"#97CAE5"
      }}>
        <View style = {{marginTop:-90, alignItems:"center",}}>
        <LessonHeader centerText='Determine the Budget' navigation={this.props.navigation}/>
        </View>
        
        <View style = {{alignItems:"center",marginTop:40}}>
          <Icon 
              name='work'
              size = {300}
          />
        </View>
          {/*Project Cost Management - Module Determine Budget - Activities */}
          <TouchableHighlight style={[styles.buttonContainer, styles.activitiesButton]} 
            onPress={() => this.props.navigation.navigate("ListCostManagement")}>
              <Text style={styles.buttonText}>Continue to Activities</Text>
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
      textInfo:
      {
        textAlign:'center',
        fontSize:20,
        margin:10,
        marginTop:20,
        color:"white",
        backgroundColor:"#54a0ff"   
      },
      textTitle:{
        textAlign:'center',
        fontSize:25,
        marginTop:10,
        marginBottom: 5
      },
      containerImages:{
        justifyContent:'space-around',
        flexDirection:'row',
        alignItems: 'center',
    },
      infoImage:{
          width: 150, 
          height: 100
      },
      textSubTitle:{
        textAlign:'center',
        fontSize:20,
        margin:5
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

    
export default PCM_DetermineBudgetOutputsScreen