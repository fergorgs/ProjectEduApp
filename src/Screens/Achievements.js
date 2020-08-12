import React, { Component } from 'react';
import {StyleSheet,Text,ScrollView, Image,FlatList,TouchableOpacity,Dimensions} from 'react-native';
import {Header,Button} from 'react-native-elements'
import Modal from 'react-native-modal'
import * as firebase from 'firebase'
 
import { View } from 'react-native-animatable';

export default class Achievements extends Component {

      //Achievements List
      state = {
          data: [
            {
                id:0,
                description:"Finished first lesson",
                name: "Bright Beginning",//Finished first lesson  
                image:"https://image.freepik.com/free-vector/illustration-power-button_53876-5834.jpg",
                status:null
            },
            {   
                id:1,
                description:"Finished some exercises from a lesson",  
                name: "#Respect",//Finished activities part from a lesson 
                image:"https://image.freepik.com/free-vector/illustration-business-target-icon_53876-5899.jpg",       
                status:null
            },
            {   
                id:2,  
                description:"Finished a module",  
                name: "Rockstar Rookie",//Finished a module
                image:"https://image.freepik.com/free-vector/business-man-holding-job-done-check-sign_3446-560.jpg",       
                status:null
            },
            {
                id:3,  
                description:"Reached 500 points", 
                name: "Limelight Award",//Reached 500 points - Bronze Medal 
                image:"https://image.freepik.com/free-vector/bronzed-medal-design_1166-32.jpg", 
                status:null
            },
            {
                id:4,  
                description:"Reached 1000 points",
                name: "Spotlight Award",//Reached 1000 poinst - Silver Medal
                image:"https://image.freepik.com/free-vector/silvery-medal-design_1166-23.jpg",    
                status:null
            },
            {
                id:5,  
                description:"Reached 1500 points",
                name: "Hero Award",//Reached 1500 poinst - Gold Medal   
                image:"https://image.freepik.com/free-vector/golden-medal-design_1166-34.jpg",        
                status:null
            },
            {
                id:6,  
                description:"Reached 2000 points",
                name: "Shining Star Award",//Reached 2000 poinst - Bronze Trophy
                image:"https://cdn0.iconfinder.com/data/icons/gamification/512/cup_bronze-256.png",        
                status:null
            },
            {
                id:7,  
                description:"Reached 3000 points",
                name: "Superstar Award",//Reached 3000 poinst - Silver Trophy   
                image:"https://cdn2.iconfinder.com/data/icons/gamification/512/cup_silver_kopia-256.png",        
                status:null
            },
            {
                id:8,  
                description:"Reached 4000 points",
                name: "President’s Award",//Reached 4000 poinst - Gold Trophy   
                image:"https://cdn2.iconfinder.com/data/icons/gamification/512/cup_gold_-_kopia-256.png",        
                status:null
            },
            {
                id:9,  
                description:"Reached 10000 points",
                name: "Honor Club",//Reached 10000 poinst - Crown Trophy   
                image:"https://cdn0.iconfinder.com/data/icons/gamification-flat-awards-and-badges/500/crown1-256.png",        
                status:null
            },
            {
                id:10,  
                description:"Reached 20000 points",
                name: "Diamond Club",//Reached 20000 poinst - Diamond Trophy   
                image:"https://cdn0.iconfinder.com/data/icons/flat-community-and-achievement-badges/500/diamond-256.png",        
                status:null
            },
          ],
          idSelected:null,
          isVisible:false
        };
        
    
      clickEventListener = (item) => {
        this.setState({idSelected:item.id})
        this.setState({isVisible:true})
      }

  componentWillMount()
  {
    let userId = firebase.auth().currentUser.uid
    let usersRef = firebase.database().ref("users/"+userId)
    let achievementRef = firebase.database().ref("/achievements/"+userId)
    usersRef.on("value", (data) => {

      //Defining the status of each achievement according to the user point.
      let points = data.val().points
      if(points>=500)
      {
        achievementRef.update({
          LimelightAward:"Completed"
        })
      }
      if(points>=1000)
      {
        achievementRef.update({
          SpotlightAward:"Completed"
        })
      }
      if(points>=1500)
      {
        achievementRef.update({
          HeroAward:"Completed"
        })
      }
      if(points>=2000)
      {
        achievementRef.update({
          ShiningStarAward:"Completed"
        })
      }
      if(points>=3000)
      {
        achievementRef.update({
          SuperstarAward:"Completed"
        })
      }
      if(points>=4000)
      {
        achievementRef.update({
          PresidentsAward:"Completed"
        })
      }
      if(points>=10000)
      {
        achievementRef.update({
          HonorClub:"Completed"
        })
      }
      if(points>=20000)
      {
        achievementRef.update({
          DiamondClub:"Completed"
        })
      }
      });
  }
  com
  componentDidMount()
  {
    //Receives each achievement status from the database and updates
    let userId = firebase.auth().currentUser.uid
    let achievementRef = firebase.database().ref("/achievements/"+userId)
      achievementRef.on("value", (info) => {
        let dataAchievements = this.state.data
        console.log(dataAchievements)
        dataAchievements[0].status = info.val().BrightBeginning
        dataAchievements[1].status = info.val().Respect
        dataAchievements[2].status = info.val().RockstarRookie
        dataAchievements[3].status = info.val().LimelightAward
        dataAchievements[4].status = info.val().SpotlightAward
        dataAchievements[5].status = info.val().HeroAward
        dataAchievements[6].status = info.val().ShiningStarAward
        dataAchievements[7].status = info.val().SuperstarAward
        dataAchievements[8].status = info.val().PresidentsAward
        dataAchievements[9].status = info.val().HonorClub
        dataAchievements[10].status = info.val().DiamondClub
        this.setState({data:dataAchievements})
      })
  }
    

  render() {
    let dataAchieves = this.state.data
    console.log(dataAchieves)
    //The button for more information about an achievement was pressed
    // Shows the modal
    if(this.state.isVisible==true)
    {
      return(
        <View>
            <Modal isVisible={this.state.isVisible}>
                <View style={styles.modalContainer}>
                <Image
                    style={styles.infoImageOverlay}
                    source={{uri:this.state.data[this.state.idSelected].image}}
                />
                <Text style = {{textAlign:"center",fontSize:30,color:"#8395a7"}}>
                    {this.state.data[this.state.idSelected].name}
                </Text>
                <Text style = {{textAlign:"center",fontSize:15,color:"#8395a7"}}>
                {this.state.data[this.state.idSelected].description}
                </Text>
                <Text style = {{textAlign:"center",fontSize:15,color:"#8395a7"}}>
                  Status: {this.state.data[this.state.idSelected].status}
                </Text>
                <Button
                    onPress = {() => this.setState({isVisible:false})}
                    buttonStyle={{borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop:100 }}
                    title='Go Back' 
                />
                </View>
            </Modal>
        </View>
      )
    }
    return (
      //Renders the List with all the achievements
      <ScrollView>
        <Header
            backgroundColor = '#1e272e'
            barStyle = 'light-content'
            leftComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: () => this.props.navigation.openDrawer(),
            }}
            centerComponent={{ text: 'Achievements', style: { color: '#fff' } }}
            rightComponent={{ 
              icon: 'portrait', 
              color: '#fff',
              onPress: () => this.props.navigation.navigate("Perfil")
            }}
        />
        <View style={styles.container}>
        <FlatList 
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={dataAchieves}
          keyExtractor= {(item) => {
            return (item.id).toString();
          }}
          renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
              <Image style={styles.image} source={{uri: item.image}}/>
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.count}>Status: {item.status}</Text>
                <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                  <Text style={styles.followButtonText}>Explore now</Text>  
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
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
    backgroundColor:"#ebf0f7"
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
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#3399ff",
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
  followButtonText:{
    color: "#dcdcdc",
    fontSize:12,
  },
  modalContainer:{
    backgroundColor:"#ffffff",
    flex:1,
    alignItems: 'center',
    height: Dimensions.get('window').height, 
  },
  infoImageOverlay:{
    width: 300, 
    height: 300,
},
});  

  