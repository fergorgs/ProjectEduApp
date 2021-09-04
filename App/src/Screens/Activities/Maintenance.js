import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,} from 'react-native';
import {Header} from 'react-native-elements'
export default class Maintenance extends Component {

  render() {
    return (
      <View style = {styles.container}>

        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Activities"),
          }}
          centerComponent={{ text: 'Maintenance', style: { color: '#fff' } }}
        /> 

        <Image
            style = {{
                height:300,
                width:300
            }}
            source = {{uri:"https://cdn4.iconfinder.com/data/icons/under-construction-1/512/under-512.png"}}
        />

        <Text style = {styles.textStyle}>
            Please go to Project Management Knowleadge Areas
        </Text>
        <Text style = {styles.textStyle}>
            And then go to Project Cost Management.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems: 'center',
    backgroundColor:"#f1c40f"
  },
  textStyle:
  {
    marginTop: 50,
    marginLeft: 5,
    marginRight: 5,
    fontSize:20,
    textAlign:"center",
  }
});  

  