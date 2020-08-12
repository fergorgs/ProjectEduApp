import React from 'react';
import {  View,StyleSheet,Dimensions,Image,Text,Alert,TouchableHighlight} from 'react-native';
import {Header,Icon} from 'react-native-elements'
import Swiper from 'react-native-swiper';
import { createDrawerNavigator} from 'react-navigation-drawer'
import LessonHeader from '../../../LessonHeader.js'

//Project Cost Management - Module Determine Budget - Tools and Techniques
class PCM_DetermineBudgetToolsScreen extends React.Component {
     
    render() {
  
    return (
    //Swiper for the Screens
    <Swiper
        showsButtons={false} 
        autoplay={false}
        loop = {true}
    >
    {/*Initial Screen - Tools and Techniques */}
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
            Tools and Techniques
          </Text>
        </View>
        
      </View>
      {/*1th Screen */}
      <View style={styles.container}>
        <View style = {{ alignItems:"center",}}>
        <LessonHeader centerText='Determine the Budget' navigation={this.props.navigation}/>
        </View>
        
        <Text style={styles.textTitle}>
           Tools and Techniques
        </Text>
        <Text style={styles.textInfo}>
            Cost Aggregation
        </Text>
        <Text style={styles.textInfo}>
            Reserve Analysis
        </Text>
        <Text style={styles.textInfo}>
           Historical Relationships
        </Text>
        <Text style={styles.textInfo}>
           Funding Limit Reconcialition
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 300, 
                height: 300
              }}
              source={{uri: 'https://optimalidm.com/wp-content/uploads/2019/05/tools-techniques-optimal-idm-1.bmp'}}
          />
        </View>
        
      </View>
        {/*2th Screen */}
       <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Determine the Budget' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Cost Aggregation
          </Text>
          <Text style={styles.textInfo}>
            Cost estimates are aggregated by work packages in accordance
            with the Work Breakdown Structure.
          </Text>
          <Text style={styles.textInfo}>
            The work package cost estimates are then aggregated for the higher
            component levels of the WBS, such as, control accounts, and
            ultimately for the entire project.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://st.depositphotos.com/1635204/3240/i/950/depositphotos_32408123-stock-photo-glasses-calculator-and-pencil-on.jpg'}}
            />
        </View>  
    </View>
      {/*3rd Screen */}
      <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Determine the Budget' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Reseve Analysis
          </Text>
          <Text style={styles.textInfo}>
            Works the same for the Determine Budget process,only you are
            planning contingency reserves for unplanned project scope and
            project costs. 
          </Text>
          <Text style={styles.textInfo}>
            Reserve analysis may be calculated on a porcentage basis,
            or may only be applied to activities, or work packages
            with high risk
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://www.blbbrasil.com.br/blog/wp-content/uploads/2017/12/03-02-17-fundo-e1486123507924.jpg'}}
            />
        </View>  
    </View>
    {/*4th Screen */}
     <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Determine the Budget' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Historical Relationships
          </Text>
          <Text style={styles.textInfo}>
            Refer to parametric estimating which is based on historical data.
          </Text>
          <Text style={styles.textInfo}>
            Implemented by factoring in the cost of project activities and
            multiplying them based on the ratio of this current activity.
          </Text>
          <Text style={styles.textInfo}>
            For example, if there is 100 mile road and a previous similar project
            found that, construction costs were $300,000 per mile, then the cost
            of this current project could be determined based upon lenght.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:300,
                    height:100,
                    marginTop:10
                }}
                source={{uri: 'https://blog.cedrotech.com/wp-content/uploads/2015/08/analise-tecnica.png'}}
            />
        </View>  
    </View>

     <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
        <LessonHeader centerText='Determine the Budget' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Funding Limit Reconciliation
          </Text>
          <Text style={styles.textInfo}>
            The expandture of founds in reconciled with the funding limits
            set by the customer
          </Text>
          <Text style={styles.textInfo}>
            Reconcialition will necessitate the scheduling of work to
            be adjusted to smooth or regulate those expanditures
          </Text>
          <Text style={styles.textInfo}>
            Rescheduling can impact the allocation of resources
          </Text>
          <Text style={styles.textInfo}>
           
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:300,
                    height:150,
                }}
                source={{uri: 'https://www.nextadvisor.com/blog/wp-content/uploads/2016/09/bigstock-Max-Credit-Means-Debit-Card-An-72625759.jpg'}}
            />
        </View>  
    </View>

                

      {/*Last Screen - Project Cost Management - Module Determine Budget - Tools and Techniques */}
      <View style={{
        flex:1,
        width:Dimensions.get("window").width,
        justifyContent: 'center',
        alignItems:"center",
        marginTop:-70,
        backgroundColor:"#97CAE5"
      }}>
        <View style = {{marginTop:-90, alignItems:"center",}}>
        <LessonHeader centerText='Outputs' navigation={this.props.navigation}/>
        </View>
        
        <View style = {{alignItems:"center",marginTop:40}}>
          <Icon 
              name='work'
              size = {300}
          />
        </View>
          {/*Button - Project Cost Management - Module Determine Budget - Outputs */}
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

    
export default PCM_DetermineBudgetToolsScreen