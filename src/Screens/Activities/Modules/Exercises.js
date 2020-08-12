import React from 'react';
import { View,StyleSheet,Image,Text,TouchableHighlight} from 'react-native';
import {Header,Card,Button} from 'react-native-elements'
import { createSwitchNavigator} from 'react-navigation'
import Modal from 'react-native-modal'
import * as firebase from 'firebase'
import moment from 'moment'
import LessonHeader from './LessonHeader.js'

//Question 1
class ExercisePage extends React.Component {

  constructor(props) {
    super(props);

    let { params } = this.props.navigation.state;
    let questions = params ? params.questions : null;

    this.confirmAnswer = this.confirmAnswer.bind(this);

    this.state = {
        curQuestion: 0,
        numOfQuestions: questions.length,
        questions: questions,
        correct: 1,
        modalIsVisible:false,
        tried: []
    };
}

//Function that analyses if the question is correct
confirmAnswer(btn, index)
{
        if(index == this.state.correct)
            this.setState({ modalIsVisible:true})
        else{
            let temp = this.state.tried
            temp.push(index)
            this.setState({tried: temp})
        }
}


buttonStyle(btnIndex){

    for(let t = 0; t < this.state.tried.length; t++){
        if(btnIndex == this.state.tried[t])
            return styles.buttonWrong
    }
    return styles.button
}

   
 
  render() {

    let answers = this.state.questions[this.state.curQuestion].exercices.map((answer, index) => {

        let btn = <Button
                        title={answer.subText}
                        buttonStyle={this.buttonStyle(index)}
                        onPress={() => {this.confirmAnswer(btn, index)}}
                    />

        //isso aqui em cima é pq tava dando uns bug maroto e
        //eu n achei a resposta no stack. Therefore eu fiz a 
        //maior gambiarra da década

        return (<View style = {styles.buttonContainer}>
                    {btn}
                </View>
                )
    })

    return (
        <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
            <LessonHeader centerText={this.props.topicTitle} navigation={this.props.navigation}/>
        </View>

        <Text style={styles.textTitle} >
            {this.state.questions[this.state.curQuestion].text}
        </Text>
        <Card containerStyle = {{margin:10}}>
            {answers}
        </Card>
      
      {/*Modal - Right Answer */}
      <Modal isVisible={this.state.modalIsVisible}>
        <View style={styles.modalContainer}>
          <Image
              style={styles.infoImageOverlay}
              source={{uri: 'https://independenthomeschool.com/wp-content/uploads/2016/06/mark-35780_960_720-e1464322717381.png'}}
          />
          <Button
            onPress = {() => {
                
                this.setState({modalIsVisible: false})
                this.setState({tried: []})
                if(this.state.curQuestion == this.state.numOfQuestions-1)
                    this.props.navigation.navigate('ExerciseFinalPage')
                else
                    this.setState({curQuestion: this.state.curQuestion+1})
            }}
            buttonStyle={{borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop:25 }}
            title='Next question' 
          />
        </View>
      </Modal>
      </View>
    );
  }
}



//Final Screen - Shows user reward for finishing the module
class ExerciseFinalPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'clear',
          color: '#fff',
          onPress: () => this.props.navigation.navigate("ListCostManagement")
          }}
          centerComponent={{ text: 'Final Report', style: { color: '#fff' } }}
        />

        <View style={styles.containerProgress}>
        </View>  
        <View style = {{
            marginTop:20,
            alignItems: 'center',
            margin: 10,
        }}>
          <Image
              resizeMode = "contain"
              style={{
                width: 300, 
                height: 300,
            }}
              source={{uri: 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1781780/300/200/m1/fpnw/wm0/8-.jpg?1502353731&s=c8f94b3997dc579040e292f3b4a4edd2'}}
            />
        </View>
        <Text style = {{
          textAlign: 'center',
          fontSize:20,
          margin: 30,
          }}>
          You have won 200 points
        </Text>
        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <TouchableHighlight style={[styles.endingButtonContainer, styles.activitiesButton]} 
            onPress={() => {this.props.navigation.navigate('ListSubModule')}/*() => {this.finishSubTopic("Estimating", "EST_TypesOfCosts")}*/}>
              <Text style={styles.buttonText}>Finish</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  containerProgress:{
    marginTop:5,
    alignItems: 'center',
  },
    textInfo:{
      textAlign:'center',
      fontSize:20,
      margin:10,
      marginTop:20,
      color:"white",
      backgroundColor:"#54a0ff"   
    },
    textTitle:{
      textAlign:'center',
      fontSize:20,
      marginTop:10,
      marginBottom: 5
    },
    containerImages:{
      justifyContent:'space-around',
      flexDirection:'row',
      alignItems: 'center',
  },
    infoImage:{
        width: 150, 
        height: 100
    },
    textSubTitle:{
      textAlign:'center',
      fontSize:15,
      marginTop:0,
      marginBottom: 5
    },
    button: {
      borderRadius: 0, 
      marginLeft: 0, 
      marginRight: 0, 
      marginBottom: 0
    },
    buttonPress: {
      borderRadius: 0, 
      marginLeft: 0, 
      marginRight: 0, 
      marginBottom: 0,
      backgroundColor:"#f40331"
    },
    buttonWrong: {
        borderRadius: 0, 
        marginLeft: 0, 
        marginRight: 0, 
        marginBottom: 0,
        backgroundColor:"#d00000"
      },
    modalContainer:{
      backgroundColor:"#ffffff",
      flex:1,
      alignItems: 'center',
      marginTop:200
    },
    infoImageOverlay:{
      width: 300, 
      height: 300,
  },
    buttonContainer:{
        alignItems:"center",
        marginBottom:15
  },
  endingButtonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30,
    marginBottom:40,
    width:280,
    borderRadius:30,
  },
  buttonText: {
    color: 'white',
  },
  activitiesButton: {
    backgroundColor: "#3498db",
  },
});
export default createSwitchNavigator(
  {
    ExercisePage:   ExercisePage,
    // PCM_DetermineBudgetActivity2:   PCM_DetermineBudgetActivity2Screen,
    ExerciseFinalPage:       ExerciseFinalPage

  },
  {
    headerMode: 'none'
  }
);