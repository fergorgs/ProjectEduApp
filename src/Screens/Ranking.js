import React, { Component } from 'react';
import {  View,StyleSheet,ScrollView,Image,Text} from 'react-native';
import {ListItem,Header, Card,Divider} from 'react-native-elements'
import * as firebase from 'firebase';

class Ranking extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      npList:[],
      profilepic:firebase.auth().currentUser.photoURL,
      name:firebase.auth().currentUser.displayName,
      points:""
    }
  }
    //Creates an Array of users score
    //Composed by the best 10 users
   componentDidMount()
  {
    let usersRef = firebase.database().ref("leaderbords/");
    usersRef.orderByChild("points").limitToFirst(10).on("child_added", (data)=> {
    //The leaderboards table is composed by negative numbers because Firebase just organizes the information in ascending order.
    let points = (data.val().points)*(-1)
    let newArr = [];
    let obj = {name: data.val().name,points:points}
    newArr.push(obj)
    let Aux = this.state.npList;
    Array.prototype.push.apply(Aux,newArr)
    this.setState({npList:Aux})
    })
    let userid = firebase.auth().currentUser.uid
    let usersRefId = firebase.database().ref("users/"+userid);

    usersRefId.on("value", (data) => {
      let points = data.val().points
      this.setState({points:points})
      })
  }
     
  render() {

  const list = this.state.npList

  return (
      
  <ScrollView>
    {/*Header Screen Information */}
    <Header
      backgroundColor = '#1e272e'
      leftComponent={{
        icon: 'menu',
        color: '#fff',
        onPress: () => this.props.navigation.openDrawer(),
      }}
      centerComponent={{ text: 'RANKING', style: { color: '#fff' } }}
      rightComponent={{ 
        icon: 'portrait', 
        color: '#fff',
        onPress: () => this.props.navigation.navigate("Perfil")
      }}
    />
  
  {/*Card for user information*/}
  <Card 
    containerStyle = {{backgroundColor:"#40739e",marginBottom:20}}>
    <View style = {{flexDirection:"row",alignItems:"center", margin:10}}>
      <Image
        style = {styles.imageCard}
        source = {{uri:this.state.profilepic}}
      />
      <View style = {{margin:10}}>
        <Text style = {{fontSize:15,color:"#ffffff"}}>
          Name: {this.state.name}
        </Text >
        <Text style = {{fontSize:15,color:"#ffffff"}}>
          Points: {this.state.points}
      </Text>
      </View>
     
    </View>
  </Card>

  <Divider style={{ backgroundColor: '#40739e', height:10}} />

  <Card 
    containerStyle = {{backgroundColor:"#40739e",marginBottom:20}}>
    <Text style = {{textAlign:"center",color:"#ffffff",fontSize:25}}>
      Top 10
    </Text>
  </Card>
    {/*List Top 10 Uses */}
    {
      list.map((l, i) => (
        <ListItem
          key={i}
          title={l.name}
          subtitle={'Points: ' + l.points}
          topDivider = {true}
          bottomDivider = {true}
          badge={{ value: (i+1), textStyle: { color: 'white' }, containerStyle: { marginTop: -20 } }}
        />
      ))
    }
</ScrollView>
    )
  }
}
export default Ranking;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  imageCard:
  {
    width: 70,
    height: 70,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
  }
});