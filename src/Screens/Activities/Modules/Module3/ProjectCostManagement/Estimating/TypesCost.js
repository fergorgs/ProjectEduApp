import React from 'react';
import {  View,StyleSheet,Dimensions,Image,Text,Alert,TouchableHighlight} from 'react-native';
import {Header,Icon} from 'react-native-elements'
import Swiper from 'react-native-swiper';
import { createDrawerNavigator} from 'react-navigation-drawer'
import LessonHeader from '../../../LessonHeader.js'

//Project Cost Management - Module Estimating - Types of Costs
class  PCM_EstimatingTypesScreen extends React.Component {
    
  finishSubTopic(mainTopic, subTopic){

    mainTopicIsValid = false
    subTopicIsValid = false

    //checks if the maintopic and subtopic are non null
    if(mainTopic == null || subTopic == null){
      alert("Faild to update data base\nMain Topic or Sub Topic null")
      return
    }

    //checks if the main topic exists in the data base and gets its reference
    let userid = firebase.auth().currentUser.uid
    let userRef = firebase.database().ref("/module3/Project Cost Management/" + userid)

    userRef.once('value', (snapshot) => {
      if (snapshot.hasChild(mainTopic))
        mainTopicIsValid = true
    });

    if(!mainTopicIsValid){
      alert("\nMain topic is undefined\n(" + mainTopic + ") is not a valid argument")
      return
    }

    let topicRef = firebase.database().ref("/module3/Project Cost Management/" + userid + "/" + mainTopic)
    
    
    //checks if the sub topic exists in the data base and gets its reference
    topicRef.once('value', (snapshot) => {
      if (snapshot.hasChild(subTopic))
        subTopicIsValid = true
    });

    if(!subTopicIsValid){
      alert("\nSub topic is undefined\n(" + subTopic + ") is not a valid argument")
      return
    }

    let subTopicRef = firebase.database().ref("/module3/Project Cost Management/" + userid + "/" + mainTopic + "/" + subTopic)

    //marks the subtopic as completed
    subTopicRef.update({checkmark: true})

    //checks if all subtopics are completed
    allChecked = true
    
    topicRef.orderByChild("id").on("child_added", (data) => {
      if(data.val().displayTitle != null && !data.val().checkmark){
        allChecked = false
      }
    })

    //marks the main topic as completed, if all the subtopics have been completed
    topicRef.update({checkmark: allChecked})

    this.props.navigation.navigate("ListCostManagement")
  }

  render() {
  
    return (
    //Swiper for the Screens
      <Swiper
        showsButtons={false} 
        autoplay={false}
        loop = {true}
    >
    {/*Initial Screen - Types of Costs */}
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
              Types of Costs
            </Text>
          </View>
          
        </View>
  
      {/*First Screen */}
      <View style={styles.container}>

          <View style = {{ alignItems:"center"}}>
          <LessonHeader centerText='Estimate Costs' navigation={this.props.navigation}/>
          </View>
          
          <Text style={styles.textTitle}>
             Direct Costs
          </Text>
          <Text style={styles.textInfo}>
              Expenses that are billed directly to the project.
              Can be tracked back to a product and can be measured.
          </Text>
          <Text style={{textAlign:'left',marginLeft:10,fontSize:15,marginTop:10}}>
             Examples:
          </Text>
          <Text style={styles.textSubTitle}>
            Direct Materials
          </Text>
          <Text style={styles.textSubTitle}>
            Direct Labor
          </Text>
          <Text style={styles.textSubTitle}>
            Use of equipment
          </Text>
          <Text style={styles.textSubTitle}> 
            Use of facilities
          </Text>
          <Text style={styles.textSubTitle}>
            Number of employees
          </Text>
          <Text style={styles.textSubTitle}>
            Comsumption of services
          </Text>
          <View style={styles.containerImages}>
            <Image
                resizeMode="contain"
                style={styles.infoImage}
                source={{uri: 'https://www.miltons.law.za/wp-content/uploads/2019/02/employees.jpg'}}
            />
             <Image
                resizeMode="contain"
                style={styles.infoImage}
                source={{uri: 'https://2.bp.blogspot.com/-FTyU2vf566E/WY5X1NNClkI/AAAAAAAANug/TssPLv68tvEzQ3FT-PaQFhBT5XL-vLOsgCLcBGAs/s640/IMAGEM%2B1756%2B-%2BGEST%25C3%2583O%2BDE%2BFACILITIES%2B-%2BO%2BBLOG%2BDO%2BMESTRE.png'}}
              />
          </View>
          <View style={styles.containerImages}>
            <Image
                resizeMode="contain"
                style={styles.infoImage}
                source={{uri: 'https://www.abseconschools.org/cms/lib/NJ50000208/Centricity/Domain/44/facilitymanagment.jpg'}}
            />
             <Image
                resizeMode="contain"
                style={styles.infoImage}
                source={{uri: 'http://www.redealix.org.br/stellamaris/wp-content/uploads/sites/3/2017/11/16.jpg'}}
              />
          </View> 
  
  
        </View>
  
        {/*Second Screen */}
        <View style={styles.container}>
          <View style = {{ alignItems:"center"}}>
          <LessonHeader centerText='Estimate Costs' navigation={this.props.navigation}/>
          </View>
          
  
          <Text style={styles.textTitle}>
             Indirect Costs
          </Text>
          <Text style={styles.textInfo}>
             Not directly identifiable and not directly related to the project product.
             Belong to the core supporting business, but cannot be directly assigned
             to the projects or individual contracts.
          </Text>
          <Text style={{textAlign:'left',marginLeft:10,fontSize:15,marginTop:10}}>
             Examples:
          </Text>
          <Text style={styles.textSubTitle}>
            Fringe Benefits
          </Text>
          <Text style={styles.textSubTitle}>
            Indirect Manufacturing expenses
          </Text>
          <Text style={styles.textSubTitle}>
            Administrative Expenses
          </Text>
  
          <View style={styles.containerImages}>
            <Image
                resizeMode="contain"
                style={styles.infoImage}
                source={{uri: 'https://www.acsh.org/sites/default/files/styles/article-content/public/images/shutterstock_507716419.jpg?itok=RLaDIGBs'}}
            />
            <Image
                resizeMode="contain"
                style={styles.infoImage}
                source={{uri: 'http://fringebenefitstv.com/wp-content/uploads/2012/03/FB_logo_final-Hi.jpg'}}
            />
          </View>
          <View style={styles.containerImages}>
            <Image
                resizeMode="contain"
                style={styles.infoImage}
                source={{uri: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/six-sigma-role-manufacturing-industry-rar406-article.jpg'}}
            />
             <Image
                resizeMode="contain"
                style={styles.infoImage}
                source={{uri: 'https://content-static.upwork.com/blog/uploads/sites/3/2017/10/23085559/Administrative-Assistant-Job-Description-feature-940x400.jpg'}}
              />
          </View> 
  
        </View>
  
        {/*Third Screen */}
        <View style={styles.container}>
  
          <View style = {{ alignItems:"center"}}>
          <LessonHeader centerText='Estimate Costs' navigation={this.props.navigation}/>
          </View>
  
          <Text style={styles.textTitle}>
             Variable Costs
          </Text>
          <Text style={styles.textInfo}>
             Vary as changes in the production are implemented
          </Text>
          <Text style={{textAlign:'left',marginLeft:10,fontSize:15,marginTop:10}}>
             Examples:
          </Text>
          <Text style={styles.textSubTitle}>
            Expenses with equipments and materials
          </Text>
          <Text style={styles.textSubTitle}>
            Performance bonuses
          </Text>
          <Text style={styles.textSubTitle}>
            Freight
          </Text>
          <Text style={styles.textSubTitle}>
            - Sales Comissions
          </Text>
          <View style={styles.containerImages}>
            <Image
                resizeMode="contain"
                style={styles.infoImage}
                source={{uri: 'https://previews.123rf.com/images/hstrongart/hstrongart1705/hstrongart170500511/78257241-variable-cost-in-red-stamp-style-white-background.jpg'}}
            />
            <Image
                resizeMode="contain"
                style={styles.infoImage}
                source={{uri: 'https://freightservices.greencarrier.com/wp-content/uploads/2017/05/shutterstock_617992466-2.jpg'}}
            />
          </View>
          <View style={styles.containerImages}>
            <Image
                resizeMode="contain"
                style={styles.infoImage}
                source={{uri: 'https://d2ydtwisqcxv72.cloudfront.net/sales-commission-plan-header.png'}}
            />
             <Image
                resizeMode="contain"
                style={styles.infoImage}
                source={{uri: 'http://propluginmarketplace.com/wp-content/uploads/2016/07/affiliatewp-performance-bonuses.png'}}
              />
          </View> 
          <Text style={{
            textAlign:'center',
            fontSize:17,
            margin:10,
            color:"white",
            backgroundColor:"#54a0ff"  
          }}>
             There's no production, there's variable cost
          </Text>
  
        </View>

        {/*Forth Screen */}
        <View style={styles.container}>
          
          <View style = {{ alignItems:"center"}}>
          <LessonHeader centerText='Estimate Costs' navigation={this.props.navigation}/>
          </View>
  
          <Text style={styles.textTitle}>
             Fixed Costs 
          </Text>
          <Text style={styles.textInfo}>
             Remain constant in the total independently of the 
             amount of work performed. Remain the same even,
             whe the production pauses, or is null.
          </Text>
          <Text style={{textAlign:'left',marginLeft:10,fontSize:15,marginTop:10}}>
             Examples:
          </Text>
          <Text style={styles.textSubTitle}>
            Rent
          </Text>
          <Text style={styles.textSubTitle}>
            Depreciation
          </Text>
          <Text style={styles.textSubTitle}>
            Administrative Team Salaries
          </Text>
          <Text style={styles.textSubTitle}>
            General Expenses
          </Text>
          <View style={styles.containerImages}>
            <Image
                resizeMode="contain"
                style={styles.infoImage}
                source={{uri: 'https://d27p8o2qkwv41j.cloudfront.net/wp-content/uploads/2016/03/dreamstime_m_52179744-1-e1456892610537.jpg'}}
            />
            <Image
                resizeMode="contain"
                style={styles.infoImage}
                source={{uri: 'https://selfgrasp.com/wp-content/uploads/2018/06/What-is-Depreciation.png'}}
            />
          </View>
          <View style={styles.containerImages}>
            <Image
                resizeMode="contain"
                style={styles.infoImage}
                source={{uri: 'https://cdn2.iconfinder.com/data/icons/startup-and-development-4/96/Modern_Business_1_general_expenses-512.png'}}
            />
             <Image
                resizeMode="contain"
                style={styles.infoImage}
                source={{uri: 'https://www.projecttimes.com/media/k2/items/cache/6612da61425d98755836902a8bde1bce_XL.jpg'}}
              />
          </View>     
        </View>
  
        {/*Fifth Screen */}
        <View style={styles.container}>
  
          <View style = {{ alignItems:"center"}}>
          <LessonHeader centerText='Estimate Costs' navigation={this.props.navigation}/>
          </View>
  
          <Text style={styles.textTitle}>
             Estimating the Costs 
          </Text>
          <Text style={styles.textInfo}>
              Process of developing an approximation of the 
              monetary resources needed to complete project 
              activities.
          </Text>
          <Text style={styles.textSubTitle}>
            Weighing alternative options
          </Text>
          <Text style={styles.textSubTitle}>
            Examining Risks
          </Text>
          <Text style={styles.textSubTitle}>
            Trade Offs
          </Text>
          <Text style={styles.textSubTitle}>
            Build X Buy and Buy X Lease
          </Text>
          <View style={styles.containerImages}>
            <Image
                resizeMode="contain"
                style={styles.infoImage}
                source={{uri: 'https://cdn-images-1.medium.com/max/1600/1*D1euW219UdxafVeOjqvzNA.png'}}
            />
             <Image
                resizeMode="contain"
                style={styles.infoImage}
                source={{uri: 'https://unlearnwithus.files.wordpress.com/2018/05/alternative-option.gif'}}
            />
          </View>
          <View style={styles.containerImages}>
            <Image
                resizeMode="contain"
                style={styles.infoImage}
                source={{uri: 'data:image/jpeg;base64,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'}}
            />
            <Image
                resizeMode="contain"
                style={styles.infoImage}
                source={{uri: 'http://kobplanrealty.com/wp-content/uploads/2013/12/buy1.jpg'}}
            />
          </View>
          <Text style={{
            textAlign:'center',
            fontSize:17,
            margin:10,
            color:"white",
            backgroundColor:"#54a0ff"  
          }}>
             Determines the amount of cost required to complete project work.
          </Text>
         
        </View>

        {/*Last Screen Module - Types of Costs */}
        <View style={{
         flex:1,
         width:Dimensions.get("window").width,
         //justifyContent: 'center',
         alignItems:"center",
         backgroundColor:"#97CAE5"
      }}>
        <View style = {{alignItems:"center"}}>
        <LessonHeader centerText='Estimate Costs' navigation={this.props.navigation}/>
        </View>
        
        <View style = {{alignItems:"center",marginTop:40}}>
          <Icon 
              name='work'
              size = {300}
          />
        </View>
          {/*Button - Go to Module Estimating Theory - Inputs */}
          <TouchableHighlight style={[styles.buttonContainer, styles.activitiesButton]} 
            onPress={() => {this.finishSubTopic("Estimating", "EST_TypesOfCosts")}}>
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

export default PCM_EstimatingTypesScreen