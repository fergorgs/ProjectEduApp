import React from 'react';
import { ScrollView,View,StyleSheet,Image,Text,TouchableHighlight,Dimensions} from 'react-native';
import {Header,Card,Button} from 'react-native-elements'
import { createSwitchNavigator} from 'react-navigation'
import Modal from 'react-native-modal'
import * as firebase from 'firebase'
import moment from 'moment'
import LessonHeader from './LessonHeader.js'

//Este arquivo contem duas telas, uma tela de perguntas e a tela final da
//área de exercícios

//Por conta de como foi implementado, cada tela só é carregada uma vez, 
//e a tela de perguntas é reinderizada cada vez que o usuário responde
//uma questão

//TELA DE PERGUNTAS
class ExercisePage extends React.Component {

  constructor(props) {
    super(props);

    let { params } = this.props.navigation.state;
    let topicExercises = params ? params.topicExercises : null;
    let topicName = params ? params.topicName : null;

    this.confirmAnswer = this.confirmAnswer.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this)

    this.state = {
        curQuestion: 0,                           //questão atual
        numOfQuestions: topicExercises.length,    //numbero de questões
        topicExercises: topicExercises,           //questões (objetos de 'topicExercises')
        topicName: topicName,
        modalIsVisible:false,
        tried: []                                 //respostas erradas já clicadas
    };
}

//Checa a resposta
//Compara o indice da resposta dada com o indice da resposta certa,
//indicado por pela propriedade 'rightAnswer' do objeto questão
//Se está correta, exibe a mensagem de resposta correta
//Se não, add a resposta ao vetor de respostas erradas ja clicadas
confirmAnswer(index)
{
  if(index == this.state.topicExercises[this.state.curQuestion].rightAnswer)
      this.setState({ modalIsVisible:true})
  else{
      let temp = this.state.tried
      temp.push(index)
      this.setState({tried: temp})
  }
}



//Função que avança para a próxima questão
//Se ainda há questões, reseta as variáveis e reinderiza a proxima questão
//Se essa é a ultima questão, navega para a tela final da área de exercícios
nextQuestion(){
                
  this.setState({modalIsVisible: false})
  this.setState({tried: []})
  if(this.state.curQuestion == this.state.numOfQuestions-1)
      this.props.navigation.navigate('ExerciseFinalPage')
  else
      this.setState({curQuestion: this.state.curQuestion+1})
}



//retorna o style padrão em casos normais.
//se o index da resposta clicada consta no vetor de tried answers,
//retorna o style de botão vermelho
buttonStyle(btnIndex){

    for(let t = 0; t < this.state.tried.length; t++){
        if(btnIndex == this.state.tried[t])
            return styles.buttonWrong
    }
    return styles.button
}



//A decisão se um componente <Image> será ou não criado tem que ser
//feita por uma função. Eu tentei usar uma arrow function dentro do
//return de 'render' mas n funciono, então eu criar uma função externa msm
getQuestionImage(){

  let imgUri = this.state.topicExercises[this.state.curQuestion].image

  //se existe uma imagem, retorna um componente <Image>
  if(imgUri != null && imgUri != undefined && imgUri != ''){
    return <Image source={{uri: imgUri}} style={styles.infoImage}></Image>
  }

  //se não, retorna null
  return null
}
   
 

//RENDER---------------------------------------
  render() {

    //gera os botões para as respostas
    let answers = this.state.topicExercises[this.state.curQuestion].answers.map((answer, index) => {

        return (<View style = {styles.buttonContainer}>
                    <Button
                        title={answer.answerText}
                        buttonStyle={this.buttonStyle(index)}
                        onPress={() => {this.confirmAnswer(index)}}
                    />
                </View>
                )
    })

    //define se existe uma imagem na pergunta
    let questionImage = this.getQuestionImage()

    return (
      <ScrollView>
        {/* PERGUNTA, IMAGENS E RESPOSTAS */}
        <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
            <LessonHeader centerText={this.state.topicName} navigation={this.props.navigation}/>
        </View>

        <Text style={styles.textTitle} >
            {this.state.topicExercises[this.state.curQuestion].questionText}
        </Text>
        <View style = {{ alignItems:"center"}}>
          {questionImage}
        </View>
        <Card containerStyle = {{margin:10}}>
            {answers}
        </Card>
      
      {/* MENSAGEM DE RESPOSTA CERTA */}
      <Modal isVisible={this.state.modalIsVisible}>
        <View style={styles.modalContainer}>
          <Image
              style={styles.infoImageOverlay}
              source={{uri: 'https://independenthomeschool.com/wp-content/uploads/2016/06/mark-35780_960_720-e1464322717381.png'}}
          />
          <Button
            onPress = {this.nextQuestion}
            buttonStyle={{borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop:25 }}
            title='Next question' 
          />
        </View>
      </Modal>
      </View>
      </ScrollView>
    );
  }
}


//-------------------------------------------------
//-------------------------------------------------
//----TELA FINAL-----------------------------------
//-------------------------------------------------
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
            onPress={() => {this.props.navigation.navigate('TopicsList')}}>
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
      borderColor: "#FFCB64",
      borderWidth:3,
      borderRadius:5,
      marginVertical:10,
      resizeMode: 'contain'
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
    marginBottom:30,
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
    ExerciseFinalPage:       ExerciseFinalPage
  },
  {
    headerMode: 'none'
  }
);