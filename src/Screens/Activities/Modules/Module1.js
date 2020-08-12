import React from 'react';
import { Text,ScrollView} from 'react-native';
import { Card,Button,Header} from 'react-native-elements';
import { ProgressBar, Colors } from 'react-native-paper';

class Module1 extends React.Component {

  render() {  
    return (

    <ScrollView>

      
        {/*Screen Header Information*/}
      <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Activities"),
          }}
          centerComponent={{ text: 'INTRODUCTION', style: { color: '#fff' } }}
      /> 

      
      {/*Cards for Module 1*/}
      <Card>
        <Text style={{marginBottom: 10,textAlign: 'center'}}>
        Introduction to Project Management
        </Text>
        <ProgressBar progress={0} color={Colors.red800} />
      <Button
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='Go to Lesson' />
      </Card>
      
      <Card>
        <Text style={{marginBottom: 10,textAlign: 'center'}}>
        PMO (Project Management Office)
        </Text>
        <ProgressBar progress={0} color={Colors.red800} />
      <Button
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='Go to Lesson' />
      </Card>

      <Card>
        <Text style={{marginBottom: 10,textAlign: 'center'}}>
        Project Manager
        </Text>
        <ProgressBar progress={0} color={Colors.red800} />
      <Button
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='Go to Lesson' />
      </Card>

      <Card>
        <Text style={{marginBottom: 10,textAlign: 'center'}}>
        Portfolios, Programs, and Projects
        </Text>
        <ProgressBar progress={0} color={Colors.red800} />
      <Button
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='Go to Lesson' />
      </Card>

      <Card>
        <Text style={{marginBottom: 10,textAlign: 'center'}}>
        MS Project
        </Text>
        <ProgressBar progress={0} color={Colors.red800} />
      <Button
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='Go to Lesson' />
      </Card>

    </ScrollView>
    
    );
  }
}
export default Module1;
