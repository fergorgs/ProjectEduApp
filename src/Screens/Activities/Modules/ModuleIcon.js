import React from 'react';
import {Alert,StyleSheet,Text,ScrollView, Image,FlatList,TouchableOpacity,Dimensions,View} from 'react-native';
import {Header,Icon} from 'react-native-elements'

class ModuleIcon extends React.Component{

render() {

    return (

            //<View></View>
        <TouchableOpacity style={styles.card} onPress={()=> this.props.ClickEventListener(this.props.Item)}>
            <View style={styles.cardContent}>
              <Text style={styles.name}>{this.props.Item.name}</Text>
    <TouchableOpacity style={styles.followButtonPlay} onPress={()=> this.props.ClickEventListener(this.props.Item)}>
                  <Image style={styles.imagePlay} source={{uri:"https://images.vexels.com/media/users/3/135176/isolated/preview/a6508e565d25ab01f79a35c4319e0083-jogar-bot--o---cone-plana-by-vexels.png"}}/>
              </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    /*logoImage:{
      width: 200,
      height: 200
    },*/
    /*containerLogo:{
      alignItems:"center",
      margin: 10,
    },*/
    /*container:{
      flex:1,
      backgroundColor:"#636e72"
    },*/
    /*contentList:{
      flex:1,
    },*/
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
      fontSize:20,
      flex:1,
      alignSelf:'center',
      color:"#000000",
      fontWeight:'bold'
    },
    /*count:{
      fontSize:14,
      flex:1,
      alignSelf:'center',
      color:"#6666ff"
    },*/
    /*followButton: {
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
    },*/
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
    /*followButtonText:{
      color: "#dcdcdc",
      fontSize:12,
    },*/
  
  });

export default ModuleIcon