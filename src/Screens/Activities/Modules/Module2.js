import React from 'react';
import { Text,ScrollView} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import { Card,Button,Header} from 'react-native-elements';


class Module2 extends React.Component {

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
          centerComponent={{ text: 'PROCESS', style: { color: '#fff' } }}
      /> 

       {/*Cards for Module 2*/}
      <Card>
        <Text style={{marginBottom: 10,textAlign: 'center'}}>
        Initiating Process Group
        </Text>
        <ProgressBar progress={0} color={Colors.red800} />
      <Button
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='Go to Lesson' />
      </Card>
      
      <Card>
        <Text style={{marginBottom: 10,textAlign: 'center'}}>
        Planning Process Group
        </Text>
        <ProgressBar progress={0} color={Colors.red800} />
      <Button
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='Go to Lesson' />
      </Card>

      <Card>
        <Text style={{marginBottom: 10,textAlign: 'center'}}>
        Executing Process Group
        </Text>
        <ProgressBar progress={0} color={Colors.red800} />
      <Button
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='Go to Lesson' />
      </Card>

      <Card>
        <Text style={{marginBottom: 10,textAlign: 'center'}}>
        Monitoring and Controlling Process Group
        </Text>
        <ProgressBar progress={0} color={Colors.red800} />
      <Button
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='Go to Lesson' />
      </Card>

      <Card>
        <Text style={{marginBottom: 10,textAlign: 'center'}}>
        Closing Process Group
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
export default Module2;
