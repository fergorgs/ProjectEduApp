import React from 'react';
import { View,StyleSheet,Image,Text} from 'react-native';
import {Header,Card} from 'react-native-elements'
import {BarChart} from 'react-native-chart-kit'
import { Dimensions } from 'react-native'
import * as firebase from 'firebase'

class Statistics extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    labels:[],
    dataPoints:[],
    name:firebase.auth().currentUser.displayName,
    photo:firebase.auth().currentUser.photoURL,
    points:"",
    progress:""
    }
  }

  //Receiving the information from the database
  componentDidMount()
  {

    let userid = firebase.auth().currentUser.uid;

    let usersRefPoints = firebase.database().ref("/users/"+userid);

    //Receivers user information
    usersRefPoints.once("value", (data)=> {
    let points = data.val().points
    let progress = data.val().progress
    this.setState({points:points})
    this.setState({progress:progress})
    })
    let usersRef = firebase.database().ref("/statistics/"+userid);

    //Creates an array for receiving statistics information limited to last 6 information from the database
    usersRef.limitToLast(6).on("child_added", (data)=> {
    
    //Receives the user points and the date
    let point = data.val().points
    let date = data.val().date
    let newArrPoints = [];
    let newArrLabels = [];
    
    newArrPoints.push(point);
    newArrLabels.push(date);
    
    let auxLabel = this.state.labels;
    let auxPoints = this.state.dataPoints;
    
    Array.prototype.push.apply(auxLabel,newArrLabels)
    console.log(auxLabel)
    this.setState({labels:auxLabel})

    Array.prototype.push.apply(auxPoints,newArrPoints)
    console.log(auxPoints)
    this.setState({dataPoints:auxPoints})
    
  })
  }
  
  render() {

    const screenWidth = Dimensions.get('window').width

    //Configure the chart
    const chartConfig = {
    decimalPlaces: 1,
    backgroundColor: '#fffffff',
    backgroundGradientFrom: '#ecf0f1',
    backgroundGradientTo: '#7f8c8d',
    color: (opacity = 5) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 1 // optional, default 3
    }

    //Setting the data for the chart
    const data = {
    labels: this.state.labels,
    datasets: [{
      data: this.state.dataPoints
    }]
    }

    return (
      <View style={styles.container}>
        {/* Screen Header Information */}
        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: () => this.props.navigation.openDrawer(),
          }}
          centerComponent={{ text: 'STATISTICS', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'portrait', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Perfil")
          }}
        />

    {/* User information Card */}   
    <Card 
        containerStyle = {{backgroundColor:"#40739e",marginBottom:0,borderRadius: 20}}>
        <View style = {{flexDirection:"row",alignItems:"center", margin:25}}>
          <Image
            style = {styles.imageCard}
            source = {{uri:this.state.photo}}
          />
          <View style = {{margin:10}}>
            <Text style = {{fontSize:17,color:"#ffffff"}}>
              Name: {this.state.name}
            </Text >
            <Text style = {{fontSize:17,color:"#ffffff"}}>
              Points: {this.state.points}
            </Text>
            <Text style = {{fontSize:17,color:"#ffffff"}}>
              Progress: {this.state.progress} %
            </Text>
          </View>
        
        </View>
      </Card>
        
        {/* Renders the Chart */}
        <BarChart
          style={{
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 20
          }}
          fromZero = {true}
          data={data}
          width={screenWidth}
          height={400}
          chartConfig={chartConfig}
        />

      </View>
    );
  }
}
export default Statistics;

const styles = StyleSheet.create({
  container: {
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