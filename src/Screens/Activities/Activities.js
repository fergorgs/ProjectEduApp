import React, { Component } from 'react'
import { Text,ScrollView} from 'react-native'
import { Card, Button,Header} from 'react-native-elements'
   
class Activities extends Component {
   
  static navigationOptions = {
    header: null
  }
   render() {
      return (

    
      <ScrollView>
          {/* Screen Header Information*/}
        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: () => this.props.navigation.openDrawer(),
          }}
          centerComponent={{ text: 'ACTIVITIES', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'portrait', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Perfil")
          }}
        /> 

        {/*Card Module Test*/}
        <Card
          image = {{uri:"https://sensedia.com/wp-content/uploads/2017/07/20150224test644-1200x565.jpg"}}
          title='Generic Module'>
          <Text style={{marginBottom: 10, textAlign: 'center'}}>
          Generic Module Title
          </Text>
          <Button
            type="solid"
            onPress = {() => this.props.navigation.navigate("Generic_Module")}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='View now' />
        </Card>
        
        {/*Card Module 3*/}
        {/*
        <Card
          title='Project Management Knowledge Areas	'
          image = {{uri:"https://visusllc.com/images/default-source/services-platforms/discovery-process.png?sfvrsn=10327ff9_6"}}>
          <Text style={{marginBottom: 10, textAlign: 'center'}}>
            Introduction to the Knowledge areas of Project Management 
          </Text>
          <Button
            type = "solid"
            onPress = {() => this.props.navigation.navigate("Module_3")}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='View now' />
        </Card>
        */}

      </ScrollView>
      )
   }
}
export default Activities;
