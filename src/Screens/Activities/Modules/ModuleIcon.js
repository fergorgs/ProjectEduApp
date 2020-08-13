import React from 'react';
import {Alert,StyleSheet,Text,ScrollView, Image,FlatList,TouchableOpacity,Dimensions,View} from 'react-native';
import {Header,Icon} from 'react-native-elements'

class ModuleIcon extends React.Component{

render() {

    return (

        <TouchableOpacity style={styles.card} onPress={()=> this.props.ClickEventListener(this.props.item)}>
            <Image style={styles.image} source={{uri: this.props.item.image}}/>
            <View style={styles.cardContent}>
              <Text style={styles.name}>{this.props.item.name}</Text>
              <TouchableOpacity style={styles.followButtonPlay} onPress={()=> this.props.ClickEventListener(this.props.item)}>
                  <Image style={styles.imagePlay} source={{uri:"https://images.vexels.com/media/users/3/135176/isolated/preview/a6508e565d25ab01f79a35c4319e0083-jogar-bot--o---cone-plana-by-vexels.png"}}/>
              </TouchableOpacity>
            </View>
        </TouchableOpacity>

        //ORIGINAL CODE FOR REFERENCE
        // <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
            //   <Image style={styles.image} source={{uri: item.image}}/>
            //   <View style={styles.cardContent}>
            //     <Text style={styles.name}>{item.name}</Text>
            //     <TouchableOpacity style={styles.followButtonPlay} onPress={()=> this.clickEventListener(item)}>
            //         <Image style={styles.imagePlay} source={{uri:"https://images.vexels.com/media/users/3/135176/isolated/preview/a6508e565d25ab01f79a35c4319e0083-jogar-bot--o---cone-plana-by-vexels.png"}}/>
            //     </TouchableOpacity>
            //   </View>
            // </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    cardContent: {
      marginTop:10
    },
    image:{
      marginLeft:10,
      marginTop:10,
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
      fontSize:15,
      // flex:1,
      width: '80%',
      alignSelf:'center',
      color:"#000000",
      fontWeight:'bold'
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
  
  });

export default ModuleIcon