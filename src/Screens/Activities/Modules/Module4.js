import React from 'react';
import { Text,ScrollView} from 'react-native';
import { Card,Button,Header } from 'react-native-elements';
import { ProgressBar, Colors} from 'react-native-paper';

class Module4 extends React.Component {

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
          centerComponent={{ text: 'BUSINESS ENVIROMENT', style: { color: '#fff' } }}
      /> 

      {/*Cards for Module 4 */}
      <Card>
        <Text style={{marginBottom: 10,textAlign: 'center'}}>
        Economic viability
        </Text>
        <ProgressBar progress={0} color={Colors.red800} />
      <Button
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='Go to Lesson' />
      </Card>
      
      <Card>
        <Text style={{marginBottom: 10,textAlign: 'center'}}>
        Strategy in Projects
        </Text>
        <ProgressBar progress={0} color={Colors.red800} />
      <Button
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='Go to Lesson' />
      </Card>

      <Card>
        <Text style={{marginBottom: 10,textAlign: 'center'}}>
        Business strategy
        </Text>
        <ProgressBar progress={0} color={Colors.red800} />
      <Button
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='Go to Lesson' />
      </Card>

      <Card>
        <Text style={{marginBottom: 10,textAlign: 'center'}}>
        Ethic and moral
        </Text>
        <ProgressBar progress={0} color={Colors.red800} />
      <Button
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='Go to Lesson' />
      </Card>

      <Card>
        <Text style={{marginBottom: 10,textAlign: 'center'}}>
        Ethics in Projects
        </Text>
        <ProgressBar progress={0} color={Colors.red800} />
      <Button
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='Go to Lesson' />
      </Card>

      <Card>
        <Text style={{marginBottom: 10,textAlign: 'center'}}>
        Maturity in project management
        </Text>
        <ProgressBar progress={0} color={Colors.red800} />
      <Button
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='Go to Lesson' />
      </Card>

      <Card>
        <Text style={{marginBottom: 10,textAlign: 'center'}}>
        Agile methods
        </Text>
        <ProgressBar progress={0} color={Colors.red800} />
      <Button
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='Go to Lesson' />
      </Card>

      <Card>
        <Text style={{marginBottom: 10,textAlign: 'center'}}>
        Hybrid methods
        </Text>
        <ProgressBar progress={0} color={Colors.red800} />
      <Button
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='Go to Lesson' />
      </Card>

      <Card>
        <Text style={{marginBottom: 10,textAlign: 'center'}}>
        Negotiation
        </Text>
        <ProgressBar progress={0} color={Colors.red800} />
      <Button
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='Go to Lesson' />
      </Card>

      <Card>
        <Text style={{marginBottom: 10,textAlign: 'center'}}>
        Innovation in Projects
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
export default Module4;