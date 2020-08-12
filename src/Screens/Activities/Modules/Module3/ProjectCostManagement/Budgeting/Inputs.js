import React from 'react';
import {  View,StyleSheet,Dimensions,Image,Text,Alert,TouchableHighlight} from 'react-native';
import {Header,Icon} from 'react-native-elements'
import Swiper from 'react-native-swiper';
import { createDrawerNavigator} from 'react-navigation-drawer'
import LessonHeader from '../../../LessonHeader.js'

//Project Cost Management - Module Determine Budget - Inputs
class  PCM_DetermineBudgetInputsScreen extends React.Component {
     
    render() {
  
    return (
    //Swiper for the Screens
    <Swiper
        showsButtons={false} 
        autoplay={false}
        loop = {true}
    >
    
    {/*Initial Screen - Inputs */}
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
              Inputs
            </Text>
          </View>
          
        </View>
  
    {/*1th Screen */}
    <View style={styles.container}>
        
        <View style = {{ alignItems:"center"}}>
          <LessonHeader centerText='Determine the Budget' navigation={this.props.navigation}/>
        </View>

        <Text style={styles.textTitle}>
           Inputs
        </Text>
        <Text style={styles.textInfo}>
           Activity Cost Estimates
        </Text>
        <Text style={styles.textInfo}>
           Basis of Estimates
        </Text>
        <Text style={styles.textInfo}>
           Scope Baseline
        </Text>
        <Text style={styles.textInfo}>
           Project Schedule
        </Text>
        <Text style={styles.textInfo}>
           Resources Calendars
        </Text>
        <Text style={styles.textInfo}>
           Contracts
        </Text>
        <Text style={styles.textInfo}>
           Organizational Process Assets
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode = "contain"
              style={{
                width: 150, 
                height: 150
              }}
              source={{uri: 'http://otimizeseunegocio.com/wp-content/uploads/2018/03/seta-icon.png'}}
          />
        </View>    
    </View>
   {/*2th Screen */}
    <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Determine the Budget' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
             Activity Costs Estimates
          </Text>
          <Text style={styles.textInfo}>
            Determined for each activity within
            a work package, nd the summed to determine
            the total estimate for a work package.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://www.impala.pt/wp-content/uploads/fly-images/145695/aumentos-2018-entre-no-novo-ano-com-a-carteira-apertada-750x501-lt.jpg'}}
            />
        </View>  
    </View>
    {/*3rd Screen */}
     <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Determine the Budget' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Basis of Estimates
          </Text>
          <Text style={styles.textInfo}>
            Should be considered assumptions
            regarding indirect costs, will be
            included in the project budget.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://abrilexame.files.wordpress.com/2016/09/size_960_16_9_casal-documento3.jpg'}}
            />
        </View>  
    </View>
   {/*4th Screen */}
    <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Determine the Budget' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Scope Baseline
          </Text>
          <Text style={styles.textInfo}>
            The scope statement describes the constraints of 
            the project, should be considered when developing
            the budget.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://cdn.lynda.com/course/724785/724785-636922938175320617-16x9.jpg'}}
            />
        </View>  
    </View>
   {/*5th Screen */}
    <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Determine the Budget' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Project Schedule
          </Text>
          <Text style={styles.textInfo}>
            Contains information, such as, start and end for activities,milestones.
          </Text>
          <Text style={styles.textInfo}>
            Based on the information in the schedule can be determined 
            budget expenditures for calendar periods.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://blog.tailwindapp.com/wp-content/uploads/2019/03/blog-post-header-no-text-how-toschedule-pins-on-pinterest.png'}}
            />
        </View>  
    </View>
  {/*6th Screen */}
    <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Determine the Budget' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Resource Calendars
          </Text>
          <Text style={styles.textInfo}>
            Resource Calendars help determine costs in calendar periods
            and over the lenght of the project because they describe what
            resources are needed when on the project.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXw9cd48F9QxI5MQNZwwVzO1cR0biFvYenS71wvg1jL_3E_5-a'}}
            />
        </View>  
    </View>
  {/*7th Screen */}
    <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Determine the Budget' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Contracts
          </Text>
          <Text style={styles.textInfo}>
            If contracts are being used on the project,
            they will show the costs that the project is
            obliged to incur under the terms of the contract.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://cdn-images-1.medium.com/max/1600/1*zS6k4a6dyr_72A6ltGrr-A.png'}}
            />
        </View>  
    </View>
    {/*8th Screen */}
     <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Determine the Budget' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Organizational Process Assets
          </Text>
          <Text style={styles.textInfo}>
            Include cost budgeting tools, the policies and procedures regarding
            budgeting exercises and reporting methods
          </Text> 
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://pmsczone-na1401781608.netdna-ssl.com/wp-content/uploads/2012/08/Functional-Organization-Structure.png'}}
            />
        </View>  
    </View>

     {/*Last Screen - Project Cost Management - Module Determine Budget - Inputs */}
      <View style={{
         flex:1,
         width:Dimensions.get("window").width,
         justifyContent: 'center',
         alignItems:"center",
         marginTop:-70,
         backgroundColor:"#97CAE5"
      }}>
        <View style = {{marginTop:-100, alignItems:"center",}}>
        <LessonHeader centerText='Tools and Techniques' navigation={this.props.navigation}/>
        </View>
        
        <View style = {{alignItems:"center",marginTop:40}}>
          <Icon 
              name='work'
              size = {300}
          />
        </View>
          {/*Button - Project Cost Management - Module Determine Budget - Tools and Techniques */}
          <TouchableHighlight style={[styles.buttonContainer, styles.activitiesButton]} 
            onPress={() => this.props.navigation.navigate("ListCostManagement")}>
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

    
export default PCM_DetermineBudgetInputsScreen