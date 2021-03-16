import React from 'react';
import { View,ScrollView,StyleSheet,Image,Text,Dimensions,Alert} from 'react-native';
import {Header,Card,Button} from 'react-native-elements'
import { createSwitchNavigator} from 'react-navigation'
import Modal from 'react-native-modal'
import * as firebase from 'firebase'
import moment from 'moment'

//Question 1
class PCM_ControlCostsActivity1Screen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible:false,
      isCorrect:false,
      isPressed1:false,
      isPressed2:false,
      isPressed3:false,
      isPressed4:false
    };
}

 //Function that analyses if the question is correct
  onPressConfirm()
  {
     //If the answer is corret go to another question
    if(this.state.isCorrect==true)
    {
      this.props.navigation.navigate("PCM_ControlCostsActivity2")
    }
     //Shows a modal - Wrong Answer
    else
    {
      this.setState({ isVisible:true})
    }
  }
   
 
  render() {
    return (
      <View style={styles.container}>
      <View style = {{alignItems:"center",marginTop:0}}>
        {/*Header Screen Information */}
        <Header
            backgroundColor = '#1e272e'
            leftComponent={{
            icon: 'clear',
            color: '#fff',
            onPress: () => Alert.alert(
                'Warning',
                'If you leave, your progress will be lost.',
                [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress:  () => this.props.navigation.navigate("ListCostManagement")},
                ],
                {cancelable: false},
            ),
            }}
            centerComponent={{ text: 'Activity', style: { color: '#fff' } }}
            />
      </View>

        {/*Question 1 
          Each card represents a choice
        */}
      <Text style={styles.textTitle} >
        Control Costs can be best described by which of the following?
      </Text>

      <Card containerStyle = {{margin:10}}>
        <View style = {styles.buttonContainer}>
            <Button
                title='The process of developing the future trends along with the assessment of probabilities, 
                        uncertainties, and inflation that could occur during the project' 
                onPress = {
                (function(){
                    this.setState({ isPressed1:true})
                    this.setState({ isPressed2: false })
                    this.setState({ isPressed3: false })
                    this.setState({ isPressed4: false })
                    this.setState({ isCorrect:false})
                }).bind(this)
                }
                buttonStyle={
                this.state.isPressed1
                    ? styles.buttonPress
                    : styles.button
                }
            />
        </View>
        <View style = {styles.buttonContainer} >
            <Button
                title='The process of assembling and predicting costs of a project over its life cycle' 
                onPress = {
                (function(){
                    this.setState({ isPressed2:true})
                    this.setState({ isPressed1: false })
                    this.setState({ isPressed3: false })
                    this.setState({ isPressed4: false })
                    this.setState({ isCorrect: false })
                }).bind(this)
                }
                buttonStyle={
                this.state.isPressed2
                    ? styles.buttonPress
                    : styles.button
                }
            />
        </View>
         
        <View style = {styles.buttonContainer}>
            <Button
                title='The process of accumulating costs of individual activities to establish a cost baseline.' 
                onPress = {
                (function(){
                    this.setState({ isPressed3:true})
                    this.setState({ isPressed1: false })
                    this.setState({ isPressed2: false })
                    this.setState({ isPressed4: false })
                    this.setState({ isCorrect:false})
                }).bind(this)
                }
                buttonStyle={
                this.state.isPressed3
                    ? styles.buttonPress
                    : styles.button
                } 
            />
        </View>
        <View style = {styles.buttonContainer}>
            <Button
                title="The process of monitoring the status of the project to update
                        project costs and managing changes to the cost baseline." 
                onPress = {
                (function(){
                    this.setState({ isPressed4:true})
                    this.setState({ isPressed1: false })
                    this.setState({ isPressed2: false })
                    this.setState({ isPressed3: false })
                    this.setState({ isCorrect:true})
                }).bind(this)
                }
                buttonStyle={
                this.state.isPressed4
                    ? styles.buttonPress
                    : styles.button
                }
            />
        </View>
         
      </Card>
      <Button
            onPress = {this.onPressConfirm.bind(this)}
            buttonStyle={{borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop:10,backgroundColor:'#10ac84'}}
            title='Confirm' />

      <Modal isVisible={this.state.isVisible}>
        <View style={styles.modalContainer}>
          <Image
              style={styles.infoImageOverlay}
              source={{uri: 'https://media.istockphoto.com/illustrations/try-again-label-illustration-id505716206'}}
          />
          <Button
            onPress = {() => this.setState({isVisible:false})}
            buttonStyle={{borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop:25 }}
            title='Go Back' 
          />
        </View>
      </Modal>
      </View>
    );
  }
}
//Question 2
class PCM_ControlCostsActivity2Screen extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        isVisible:false,
        isCorrect:false,
        isPressed1:false,
        isPressed2:false,
        isPressed3:false,
        isPressed4:false
      };
  }
  //Function that analyses if the question is correct
    onPressConfirm()
    {
       //If the answer is corret go to another question
      if(this.state.isCorrect==true)
      {
        this.props.navigation.navigate("PCM_ControlCostsActivity3")
      }
        //Shows a modal - Wrong Answer
      else
      {
        this.setState({ isVisible:true})
      }
    }
     
    render() {
      return (
        <View style={styles.container}>
          {/*Header Screen Information */}
          <Header
            backgroundColor = '#1e272e'
            leftComponent={{
            icon: 'clear',
            color: '#fff',
            onPress: () => Alert.alert(
              'Warning',
              'If you leave, your progress will be lost.',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress:  () => this.props.navigation.navigate("ListCostManagement")},
              ],
              {cancelable: false},
            ),
            }}
            centerComponent={{ text: 'Activity', style: { color: '#fff' } }}
          />
           {/*Question 2 
          Each card represents a choice
        */}
        <Text style={styles.textTitle} >
            The tools and techniques used in Control costs includes all but
        </Text>
        <Card>
          <Button
              title='Scope baseline, Risk register, Activity costs estimates' 
              onPress = {
                (function(){
                  this.setState({ isPressed1:true})
                  this.setState({ isPressed2: false })
                  this.setState({ isPressed3: false })
                  this.setState({ isPressed4: false })
                  this.setState({ isCorrect:false})
                }).bind(this)
              }
              buttonStyle={
                this.state.isPressed1
                  ? styles.buttonPress
                  : styles.button
              }
          />
        </Card>
        <Card>
          <Button
              title='To-Complete Performance Index (TCPI)' 
              onPress = {
                (function(){
                  this.setState({ isPressed2:true})
                  this.setState({ isPressed1: false })
                  this.setState({ isPressed3: false })
                  this.setState({ isPressed4: false })
                  this.setState({ isCorrect: false })
                }).bind(this)
              }
              buttonStyle={
                this.state.isPressed2
                  ? styles.buttonPress
                  : styles.button
              }
          />
        </Card>
        <Card>
          <Button
              title='Earned Value Management (EVM)' 
              onPress = {
                (function(){
                  this.setState({ isPressed3:true})
                  this.setState({ isPressed1: false })
                  this.setState({ isPressed2: false })
                  this.setState({ isPressed4: false })
                  this.setState({ isCorrect:false})
                }).bind(this)
              }
              buttonStyle={
                this.state.isPressed3
                  ? styles.buttonPress
                  : styles.button
              } 
            />
        </Card>
        <Card>
          <Button
              title='Cost Aggregation' 
              onPress = {
                (function(){
                  this.setState({ isPressed4:true})
                  this.setState({ isPressed1: false })
                  this.setState({ isPressed2: false })
                  this.setState({ isPressed3: false })
                  this.setState({ isCorrect:true})
                }).bind(this)
              }
              buttonStyle={
                this.state.isPressed4
                  ? styles.buttonPress
                  : styles.button
              }
            />
        </Card>
        <Button
              onPress = {this.onPressConfirm.bind(this)}
              buttonStyle={{borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop:10,backgroundColor:'#10ac84'}}
              title='Confirm' />
        {/*Modal - Wrong Answer */}
        <Modal isVisible={this.state.isVisible}>
          <View style={styles.modalContainer}>
            <Image
                style={styles.infoImageOverlay}
                source={{uri: 'https://media.istockphoto.com/illustrations/try-again-label-illustration-id505716206'}}
            />
            <Button
              onPress = {() => this.setState({isVisible:false})}
              buttonStyle={{borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop:25 }}
              title='Go Back' 
            />
          </View>
        </Modal>
        </View>
      );
    }
  }
//Question 3
class PCM_ControlCostsActivity3Screen extends React.Component {

  state = {
      isVisible:false,
      isCorrect:false,
      isPressed1:false,
      isPressed2:false,
      isPressed3:false,
      isPressed4:false,
      points:'',
      progress:'',
}


finishSubTopic(mainTopic, subTopic){

  mainTopicIsValid = false
  subTopicIsValid = false

  //checks if the maintopic and subtopic are non null
  if(mainTopic == null || subTopic == null){
    alert("Faild to update data base\nMain Topic or Sub Topic null")
    return
  }

  //checks if the main topic exists in the data base and gets its reference
  let userid = firebase.auth().currentUser.uid
  let userRef = firebase.database().ref("/module3/Project Cost Management/" + userid)

  userRef.once('value', (snapshot) => {
    if (snapshot.hasChild(mainTopic))
      mainTopicIsValid = true
  });

  if(!mainTopicIsValid){
    alert("\nMain topic is undefined\n(" + mainTopic + ") is not a valid argument")
    return
  }

  let topicRef = firebase.database().ref("/module3/Project Cost Management/" + userid + "/" + mainTopic)
  
  
  //checks if the sub topic exists in the data base and gets its reference
  topicRef.once('value', (snapshot) => {
    if (snapshot.hasChild(subTopic))
      subTopicIsValid = true
  });

  if(!subTopicIsValid){
    alert("\nSub topic is undefined\n(" + subTopic + ") is not a valid argument")
    return
  }

  let subTopicRef = firebase.database().ref("/module3/Project Cost Management/" + userid + "/" + mainTopic + "/" + subTopic)

  //marks the subtopic as completed
  subTopicRef.update({checkmark: true})

  //checks if all subtopics are completed
  allChecked = true
  
  topicRef.orderByChild("id").on("child_added", (data) => {
    if(data.val().displayTitle != null && !data.val().checkmark){
      allChecked = false
    }
  })

  //marks the main topic as completed, if all the subtopics have been completed
  topicRef.update({checkmark: allChecked})

  this.props.navigation.navigate("ListCostManagement")
}


//Receive user information from the database
componentDidMount(){
  let userid = firebase.auth().currentUser.uid
  let usersRef = firebase.database().ref("/users/"+userid);
  
  usersRef.on("value", (data) => {
    let points = (data.val() && data.val().points)
    this.setState({points:points})
    this.setState({progress:data.val().progress})
  });
}
 //Function that analyses if the question is correct
  onPressConfirm()
  {
    //If the answer is corret go to another question
    if(this.state.isCorrect==true)
    {
      //this.onUpdate().then(()=>{
        this.finishSubTopic("Controlling", "CON_Activities")
      //})
    }
    //Shows a modal - Wrong Answer
    else
    {
      this.setState({ isVisible:true})
    }
  }
   //Functions updates user information
  onUpdate()
  {
      let points = this.state.points;
      points = points + 200;
      pointsLeaderboard = (-1)*points
      let userid = firebase.auth().currentUser.uid
      let usersRef = firebase.database().ref("/users/"+userid);
      var usersRefLeaderboard = firebase.database().ref("/leaderbords/"+userid);
      usersRef.update({
        points:points
      });
      //Update leaderboard table
      usersRefLeaderboard.update({
        points:pointsLeaderboard
      })
        //Checkmark Module - Project Cost Management - Control Costs
      firebase.database().ref("/module3/Project Cost Management/" + userid + "/Controlling").update({
        checkmark:true
      })
      //Updating the table statistics
      var upStatistic = firebase.database().ref("/statistics/" +userid)
      upStatistic.once("value",snapshot =>
      {
          //Checks if the day exist at the table statistics
        if(snapshot.hasChild(moment(new Date()).format('YYYY-MM-DD')))
        {
           //Update the points
            let auxPoints = snapshot.child(moment(new Date()).format('YYYY-MM-DD')).val().points
            auxPoints = auxPoints + 200
            firebase.database().ref("/statistics/" +userid + "/" + moment(new Date()).format('YYYY-MM-DD'))
            .update({
              points:auxPoints
            })
        }
        else
        {
             //Create the day at the table statistics
          //Initialize table
          firebase.database().ref("/statistics/" +userid + "/" + moment(new Date()).format('YYYY-MM-DD'))
            .set({
              points:200,
              date:moment(new Date()).format('MM-DD')
            })
        }
      })
  }
   
 
  render() {
    return (
      <View style={styles.container}>
            <Header
            backgroundColor = '#1e272e'
            leftComponent={{
            icon: 'clear',
            color: '#fff',
            onPress: () => Alert.alert(
                'Warning',
                'If you leave, your progress will be lost.',
                [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress:  () => this.props.navigation.navigate("ListCostManagement")},
                ],
                {cancelable: false},
            ),
            }}
            centerComponent={{ text: 'Activity', style: { color: '#fff' } }}
            />
         {/*Question 3 
          Each card represents a choice
        */}
      <Text style={styles.textTitle} >
            Which of the following is not an output of the Control Costs process?
      </Text>
      <Card>
        <Button
            title='Cost Forecasts' 
            onPress = {
              (function(){
                this.setState({ isPressed1:true})
                this.setState({ isPressed2: false })
                this.setState({ isPressed3: false })
                this.setState({ isPressed4: false })
                this.setState({ isCorrect:false})
              }).bind(this)
            }
            buttonStyle={
              this.state.isPressed1
                ? styles.buttonPress
                : styles.button
            }
        />
      </Card>
      <Card>
        <Button
            title='Change Requests' 
            onPress = {
              (function(){
                this.setState({ isPressed2:true})
                this.setState({ isPressed1: false })
                this.setState({ isPressed3: false })
                this.setState({ isPressed4: false })
                this.setState({ isCorrect: false })
              }).bind(this)
            }
            buttonStyle={
              this.state.isPressed2
                ? styles.buttonPress
                : styles.button
            }
        />
      </Card>
      <Card>
        <Button
            title='Activity Cost Estimates' 
            onPress = {
              (function(){
                this.setState({ isPressed3:true})
                this.setState({ isPressed1: false })
                this.setState({ isPressed2: false })
                this.setState({ isPressed4: false })
                this.setState({ isCorrect:true})
              }).bind(this)
            }
            buttonStyle={
              this.state.isPressed3
                ? styles.buttonPress
                : styles.button
            } 
          />
      </Card>
      <Card>
        <Button
            title='Work Performance Information' 
            onPress = {
              (function(){
                this.setState({ isPressed4:true})
                this.setState({ isPressed1: false })
                this.setState({ isPressed2: false })
                this.setState({ isPressed3: false })
                this.setState({ isCorrect:false})
              }).bind(this)
            }
            buttonStyle={
              this.state.isPressed4
                ? styles.buttonPress
                : styles.button
            }
          />
      </Card>
      <Button
            onPress = {this.onPressConfirm.bind(this)}
            buttonStyle={{borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop:20,backgroundColor:'#10ac84'}}
            title='Confirm' />
      {
        /*Modal Wrong Answer */
      }
      <Modal isVisible={this.state.isVisible}>
        <View style={styles.modalContainer}>
          <Image
              style={styles.infoImageOverlay}
              source={{uri: 'https://media.istockphoto.com/illustrations/try-again-label-illustration-id505716206'}}
          />
          <Button
            onPress = {() => this.setState({isVisible:false})}
            buttonStyle={{borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop:25 }}
            title='Go Back' 
          />
        </View>
      </Modal>
      </View>
    );
  }
}
//Final Screen - Shows user reward for finishing the module
class PCM_ControlCostsFinalScreen extends React.Component {

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
});
export default createSwitchNavigator(
  {
    PCM_ControlCostsActivity1:      PCM_ControlCostsActivity1Screen,
    PCM_ControlCostsActivity2:      PCM_ControlCostsActivity2Screen,
    PCM_ControlCostsActivity3:      PCM_ControlCostsActivity3Screen,
    PCM_ControlCostsFinal:          PCM_ControlCostsFinalScreen

  },
  {
    headerMode: 'none'
  }
);