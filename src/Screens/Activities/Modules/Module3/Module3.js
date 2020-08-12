import React, { Component } from 'react';
import {StyleSheet,Text,ScrollView, Image,FlatList,TouchableOpacity,Dimensions,View} from 'react-native';
import {Header} from 'react-native-elements'
import ModuleIcon from '../ModuleIcon'

export default class Module3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: [
            //Module 3 - List of Activities
            {
                id:0,
                name: "Project Integration Management",
                navigation:"MaintenanceModule3",
                image:"https://edwiser.org/wp-content/uploads/2015/06/3.png"
            },
            {   
                id:1,
                name: "Project Scope Management",
                navigation:"MaintenanceModule3",
                image:"https://clearbridgemobile.com/wp-content/uploads/2015/08/Screen-Shot-2015-08-13-at-4.01.03-PM.png"
            },
            {   
                id:2,  
                name: "Project Schedule Management",
                navigation:"MaintenanceModule3",
                image:"https://p6cdn4static.sharpschool.com/UserFiles/Servers/Server_117263/Image/schedule.jpg"
            },
            {
                id:3,  
                name: "Project Cost Management",
                navigation:"ProjectCostManagement",
                image:"http://www.orbitinformatics.com/wp-content/uploads/2018/03/money.png"
            },
            {
                id:4,  
                name: "Project Quality Management",
                navigation:"MaintenanceModule3",
                image:"https://www.hsierra.com/wp-content/uploads/2018/09/hse-quality-assurance.png"
            },
            {
                id:5,  
                name: "Project Resource Management",   
                navigation:"MaintenanceModule3",
                image:"http://ec.europa.eu/environment/resource_efficiency/images/logohp5.png"
            },
            {
                id:6,  
                name: "Project Communications Management",
                navigation:"MaintenanceModule3",
                image:"https://www.communicationmatters.org.uk/sites/default/files/imagefield_thumbs/logos/CAUK_Symbol.png"
            },
            {
                id:7,  
                name: "Project Risk Management",
                navigation:"MaintenanceModule3",
                image:"https://www.kiplinger.com/slideshow/investing/T052-S003-8-risky-stocks-that-are-worth-the-risk/images/intro.jpg"
            },
            {
                id:8,  
                name: "Project Procurement Management",
                navigation:"MaintenanceModule3",
                image:"https://waterfm.com/wp-content/uploads/purchase-order-illustration.jpg"
            },
            {
                id:9,  
                name:"Project Stakeholder Management",
                navigation:"MaintenanceModule3",
                image:"https://www.misoenergy.org/globalassets/stakeholder-engagement/stakeholderengagement.png"
            },
          ],
        };
        
      }
    
      //Function responsible for navigating between modules
      clickEventListener = (item) => {
        this.props.navigation.navigate(item.navigation)
      }
    

  render() {

    return (
      <ScrollView>
        {/*Screen Header Information */}
        <Header
            backgroundColor = '#1e272e'
            barStyle = 'light-content'
            leftComponent={{
            icon: 'arrow-back',
            color: '#fff',
            onPress: () => this.props.navigation.navigate("Activities"),
            }}
            centerComponent={{ text: 'Module 3', style: { color: '#fff' } }}
        />
        {/*Renders Module 3 List Activities with a FlatList */}
        <View style={styles.container}>
        <FlatList 
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.data}
          keyExtractor= {(item) => {
            return (item.id).toString();
          }}
          renderItem={({item}) => {
          return (
            <ModuleIcon Item={item} ClickEventListener={this.clickEventListener}/>
            // <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
            //   <Image style={styles.image} source={{uri: item.image}}/>
            //   <View style={styles.cardContent}>
            //     <Text style={styles.name}>{item.name}</Text>
            //     <TouchableOpacity style={styles.followButtonPlay} onPress={()=> this.clickEventListener(item)}>
            //         <Image style={styles.imagePlay} source={{uri:"https://images.vexels.com/media/users/3/135176/isolated/preview/a6508e565d25ab01f79a35c4319e0083-jogar-bot--o---cone-plana-by-vexels.png"}}/>
            //     </TouchableOpacity>
            //   </View>
            // </TouchableOpacity>
          )}}/>
      </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  logoImage:{
    width: 200,
    height: 200
  },
  containerLogo:{
    alignItems:"center",
    margin: 10,
  },
  container:{
    flex:1,
    backgroundColor:"#636e72"
  },
  contentList:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },
  imagePlay:{
    width:60,
    height:60,
  },
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:30,
  },

  name:{
    fontSize:11,
    flex:1,
    alignSelf:'center',
    color:"#000000",
    fontWeight:'bold'
  },
  count:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#6666ff"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"#dcdcdc",
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
  followButtonText:{
    color: "#dcdcdc",
    fontSize:12,
  },

});  

  