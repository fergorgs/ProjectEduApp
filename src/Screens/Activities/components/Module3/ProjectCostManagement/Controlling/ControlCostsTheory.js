import React from 'react';
import {  View,StyleSheet,Dimensions,Image,Text,Alert,TouchableHighlight} from 'react-native';
import {Header,Icon} from 'react-native-elements'
import Swiper from 'react-native-swiper';
import { createDrawerNavigator} from 'react-navigation-drawer'

//Project Cost Management - Module Control Costs - Introduction
class  PCM_ControlCostIntroScreen extends React.Component {
    
  render() {
  
    return (
      //Swiper for the Screens
      <Swiper
        showsButtons={false} 
        autoplay={false}
        loop = {true}
    >
    {/*Initial Screen - Introduction */}
    <View style={{
           flex:1,
           width:Dimensions.get("window").width,
           justifyContent: 'center',
           alignItems:"center",
           marginTop:-70,
           backgroundColor:"#0abde3"
        }}>
          <View style = {{alignItems:"center"}}>
            <Text style = {{textAlign:"center",fontSize:40}}>
              Introduction
            </Text>
          </View>
          
        </View>
      
      {/*1th Screen */}
      <View style={styles.container}>

          <View style = {{ alignItems:"center"}}>
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
              centerComponent={{ text: 'Control Costs', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'menu', 
                color: '#fff',
                onPress: () => this.props.navigation.openDrawer()
                }}
              />
          </View>
          
          <Text style={styles.textTitle}>
             Controlling the Costs
          </Text>
          <Text style={styles.textInfo}>
            Provides the means to recognize variance, from the plan
            in order to take corrective action, and minimize risk.
          </Text>
          <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://managecasa.com/wp-content/uploads/2018/09/canstockphotocosts-700x460.jpg'}}
            />
          </View>  
  
        </View>
        
        {/*2th Screen */}
        <View style={styles.container}>
          <View style = {{ alignItems:"center"}}>
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
              centerComponent={{ text: 'Control Costs', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'menu', 
                color: '#fff',
                onPress: () => this.props.navigation.openDrawer()
                }}
              />
          </View>
          
  
          <Text style={styles.textTitle}>
             Decomposition Process
          </Text>
          
          <View style = {{marginTop:40}}>
            <Text style={styles.textInfo}>
                Inputs
            </Text>
            <Text style={styles.textInfo}>
                Tools and Techniques
            </Text>
            <Text style={styles.textInfo}>
                Outputs
          </Text>
  
          </View>
      
          <View style = {{marginTop:50}}>
            <Image
                resizeMode = 'stretch'
                style={{
                    width:350,
                    height:200
                }}
                source={{uri: 'https://i0.wp.com/www.whatispmp.com/wp-content/uploads/2018/02/7-3-Control-Costs-Process-Decomposition.png?resize=800%2C330&ssl=1'}}
            />
          </View>
  
        </View>
  
      {/*Last Screen - Project Cost Management - Module Control Costs - Introduction */}
        <View style={{
          flex:1,
          width:Dimensions.get("window").width,
          justifyContent: 'center',
          alignItems:"center",
          marginTop:-60,
          backgroundColor:"#97CAE5"
      }}>
        <View style = {{marginTop:-100, alignItems:"center",}}>
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
            centerComponent={{ text: 'Inputs', style: { color: '#fff' } }}
          />
        </View>
        
        <View style = {{alignItems:"center",marginTop:40}}>
          <Icon 
              name='work'
              size = {300}
          />
        </View>
          {/*Button - Project Cost Management - Module Control Costs - Inputs */}
          <TouchableHighlight style={[styles.buttonContainer, styles.activitiesButton]} 
            onPress={() => this.props.navigation.navigate("PCM_ControlCostInputs")}>
              <Text style={styles.buttonText}>Continue studying</Text>
          </TouchableHighlight>
          
      </View>

        </Swiper>
        )
    }
}
//Project Cost Management - Module Control Costs - Inputs
class  PCM_ControlCostInputsScreen extends React.Component {
     
    render() {
  
    return (
    //Swiper for the Screens
    <Swiper
        showsButtons={false} 
        autoplay={false}
        loop = {true}
    >
    {/*Initial Screen - Inputs */}
    <View style={{
           flex:1,
           width:Dimensions.get("window").width,
           justifyContent: 'center',
           alignItems:"center",
           marginTop:-70,
           backgroundColor:"#0abde3"
        }}>
          <View style = {{alignItems:"center"}}>
            <Text style = {{textAlign:"center",fontSize:40}}>
              Inputs
            </Text>
          </View>
          
        </View>
  
    {/*1th Screen */}
    <View style={styles.container}>
        
        <View style = {{ alignItems:"center"}}>
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
            centerComponent={{ text: 'Control Costs', style: { color: '#fff' } }}
            rightComponent={{ 
              icon: 'menu', 
              color: '#fff',
              onPress: () => this.props.navigation.openDrawer()
              }}
            />
        </View>

        <Text style={styles.textTitle}>
           Inputs
        </Text>
        <Text style={styles.textInfo}>
           Cost Baseline
        </Text>
        <Text style={styles.textInfo}>
           Project Funding Requirements
        </Text>
        <Text style={styles.textInfo}>
           Work Performance Data
        </Text>
        <Text style={styles.textInfo}>
            Organization Process Assets
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode = "contain"
              style={{
                width: 150, 
                height: 150
              }}
              source={{uri: 'http://otimizeseunegocio.com/wp-content/uploads/2018/03/seta-icon.png'}}
          />
        </View>    
    </View>
    {/*2th Screen */}
    <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
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
              centerComponent={{ text: 'Control Costs', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'menu', 
                color: '#fff',
                onPress: () => this.props.navigation.openDrawer()
                }}
              />
        </View>
          
          <Text style={styles.textTitle}>
            Cost Baseline
          </Text>
          <Text style={styles.textInfo}>
            Compared with actual results to determine if a
            change,corrective action, or preventive action
            is necessary.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://image.freepik.com/fotos-gratis/cortar-pessoas-analisando-graficos_23-2147707826.jpg'}}
            />
        </View>  
    </View>
    {/*3rd Screen */}
     <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
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
              centerComponent={{ text: 'Control Costs', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'menu', 
                color: '#fff',
                onPress: () => this.props.navigation.openDrawer()
                }}
              />
        </View>
          
          <Text style={styles.textTitle}>
            Project Funding Requirements
          </Text>
          <Text style={styles.textInfo}>
            Include projected expenditures plus anticipated
            liabilities.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://static9.depositphotos.com/1021974/1241/i/450/depositphotos_12412565-stock-photo-banking.jpg'}}
            />
        </View>  
    </View>
    {/*4th Screen */}
    <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
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
              centerComponent={{ text: 'Control Costs', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'menu', 
                color: '#fff',
                onPress: () => this.props.navigation.openDrawer()
                }}
              />
        </View>
          
          <Text style={styles.textTitle}>
            Work Perfomance Data
          </Text>
          <Text style={styles.textInfo}>
            Includes inforation about project progress,
            such as which activities have started, their
            progress, and which deliverables have finished.
          </Text>
          <Text style={styles.textInfo}>
            Information also includes costs that have been
            authorized and incurred.
          </Text>
        <View style={styles.containerImages}>
            <Image
                resizeMode = "contain"
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://www.projectcubicle.com/wp-content/uploads/2018/02/Work-Performance-DataWPD-and-Work-Performance-InformationWPI.png'}}
            />
        </View>  
    </View>
    {/*5th Screen */}
    <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
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
              centerComponent={{ text: 'Control Costs', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'menu', 
                color: '#fff',
                onPress: () => this.props.navigation.openDrawer()
                }}
              />
        </View>
          
          <Text style={styles.textTitle}>
            Organization Process Assets 
          </Text>
          <Text style={styles.textInfo}>
            Existing formal and informal cost control-related
            policies, procedures, and guidelines.
          </Text>
          <Text style={styles.textInfo}>
            Control cost tools, monitoring and reporting 
            are methods to be used.
          </Text>
          <Text style={styles.textInfo}>
          
          </Text>
        <View style={styles.containerImages}>
            <Image
                resizeMode = "contain"
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://i.pinimg.com/originals/32/97/64/32976453331fd4f85d41040b5df126ad.png'}}
            />
        </View>  
    </View>

    {/*Last Screen - Project Cost Management - Module Control Costs - Inputs */}
      <View style={{
        flex:1,
        width:Dimensions.get("window").width,
        justifyContent: 'center',
        alignItems:"center",
        marginTop:-70,
        backgroundColor:"#97CAE5"
      }}>
        <View style = {{marginTop:-100, alignItems:"center",}}>
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
            centerComponent={{ text:"Tools and Techniques", style: { color: '#fff' } }}
          />
        </View>
        
        <View style = {{alignItems:"center",marginTop:40}}>
          <Icon 
              name='work'
              size = {300}
          />
        </View>
          {/*Button - Project Cost Management - Module Control Costs - Tools and Techniques */}
          <TouchableHighlight style={[styles.buttonContainer, styles.activitiesButton]} 
            onPress={() => this.props.navigation.navigate("PCM_ControlCostTools")}>
              <Text style={styles.buttonText}>Continue studying</Text>
          </TouchableHighlight>
          
      </View>


    </Swiper>
        )
    }
}
//Project Cost Management - Module Control Costs - Tools and Techniques
class PCM_ControlCostToolsScreen extends React.Component {
     
    render() {
  
    return (
    //Swiper for the Screens
    <Swiper
        showsButtons={false} 
        autoplay={false}
        loop = {true}
    >
    {/*Initial Screen - Tools and Techniques */}
    <View style={{
         flex:1,
         width:Dimensions.get("window").width,
         justifyContent: 'center',
         alignItems:"center",
         marginTop:-70,
         backgroundColor:"#0abde3"
      }}>
        <View style = {{alignItems:"center"}}>
          <Text style = {{textAlign:"center",fontSize:40}}>
            Tools and Techniques
          </Text>
        </View>
        
      </View>
      {/*1th Screen */}
      <View style={styles.container}>
        <View style = {{ alignItems:"center",}}>
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
            centerComponent={{ text: 'Control Costs', style: { color: '#fff' } }}
            rightComponent={{ 
              icon: 'menu', 
              color: '#fff',
              onPress: () => this.props.navigation.openDrawer()
              }}
            />
        </View>
        
        <Text style={styles.textTitle}>
           Tools and Techniques
        </Text>
        <Text style={styles.textInfo}>
            Earned Value Management(EVM)
        </Text>
        <Text style={styles.textInfo}>
            Forecasting
        </Text>
        <Text style={styles.textInfo}>
           To-Complete Performance Index (TCPI)
        </Text>
        <Text style={styles.textInfo}>
           Perfomance Reviews
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 300, 
                height: 300
              }}
              source={{uri: 'https://optimalidm.com/wp-content/uploads/2019/05/tools-techniques-optimal-idm-1.bmp'}}
          />
        </View>
        
      </View>
      {/*2th Screen */}   
       <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
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
              centerComponent={{ text: 'Control Costs', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'menu', 
                color: '#fff',
                onPress: () => this.props.navigation.openDrawer()
                }}
              />
        </View>
          
          <Text style={styles.textTitle}>
            Earned Value Management
          </Text>
          <Text style={styles.textInfo}>
            A technique which helps the project management team
            to assess and measure the project performance e progres.
          </Text>
          <Text style={styles.textInfo}>
            Compares the amount of work that was planned with whats was
            actualy accomplished to determine if cost and schedule performance
            is as planned.
          </Text>
        <View style={styles.containerImages}>
            <Image
                resizeMode = "contain"
                style={{
                    width:350,
                    height:200,
                    marginTop:20
                }}
                source={{uri: 'https://www.projectengineer.net/wp-content/uploads/2016/06/earned-value-management-forecasting.png'}}
            />
        </View>  
    </View>
        {/*3rd Screen */}
         <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
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
              centerComponent={{ text: 'Control Costs', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'menu', 
                color: '#fff',
                onPress: () => this.props.navigation.openDrawer()
                }}
              />
        </View>
          
          <Text style={styles.textTitle}>
            Forecasting 
          </Text>
          <Text style={styles.textInfo}>
            Develop a forecast for the estimate at completion(EAC)
            that may differ from the budget at completion(BAC) based
            on the project perfomance.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://22xmcq37bnw82iclyj35wony-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/sales-forecasting-metrics-1024x768.jpg'}}
            />
        </View>  
    </View>
    {/*4th Screen */}
     <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
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
              centerComponent={{ text: 'Control Costs', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'menu', 
                color: '#fff',
                onPress: () => this.props.navigation.openDrawer()
                }}
              />
        </View>
          
          <Text style={styles.textTitle}>
            To-Complete Perfomance Index(TCPI)
          </Text>
          <Text style={styles.textInfo}>
            The calculated projection of cost perfomance that must
            be achieved on the remaining work to meet a specified
            management goal, such as the Budget At Completion (BAC) or
            the Estimate at Completion (EAC).
          </Text>
          <Text style={styles.textInfo}>
            TCPI(under budget) = (BAC-EV)/(BAC-AC)
          </Text>
          <Text style={styles.textInfo}>
            TCPI(over budget) = (BAC-EV)/(EAC-AC)
          </Text>
          <Text style={styles.textInfo}>
            A good TCPI is lower than 1
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:300,
                    height:100,
                }}
                source={{uri: 'https://previews.123rf.com/images/morganka/morganka1509/morganka150900233/46009357-close-up-of-female-accountant-or-banker-making-calculations-savings-finances-and-economy-concept.jpg'}}
            />
        </View>  
    </View>
    {/*5th Screen */}
     <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
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
              centerComponent={{ text: 'Control Costs', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'menu', 
                color: '#fff',
                onPress: () => this.props.navigation.openDrawer()
                }}
              />
        </View>
          
          <Text style={styles.textTitle}>
            Perfomance Reviews
          </Text>
          <Text style={styles.textInfo}>
            Compare cost perfomance over time, and the estimates
            of funds needed, to complete the remaining work.
          </Text>
          <Text style={styles.textInfo}>
            Determines whether project performance is improving, or
            worsening over time, by periodically analyzing project
            results.
          </Text>

        <View style={styles.containerImages}>
            <Image
                resizeMode = "contain"
                style={{
                    width:200,
                    height:150,
                }}
                source={{uri: 'https://cdn-images-1.medium.com/max/1200/1*qkrjlbEBCHmiybWMKGkmvw.png'}}
            />
              <Image
                resizeMode = "contain"
                style={{
                    width:200,
                    height:150,
                }}
                source={{uri: 'https://cdn.wallstreetmojo.com/wp-content/uploads/2018/12/Variance-Analysis.jpg'}}
            />
        </View>  
        
        <View style={styles.containerImages}>
            <Image
                resizeMode = "contain"
                style={{
                    width:300,
                    height:150,
                }}
                source={{uri: 'https://i.udemycdn.com/course/750x422/1025206_6a33_6.jpg'}}
            />
        </View>  
    </View>

                

      {/*Last Screen - Project Cost Management - Module Control Costs - Tools and Techniques  */}
      <View style={{
       flex:1,
       width:Dimensions.get("window").width,
       justifyContent: 'center',
       alignItems:"center",
       marginTop:-70,
       backgroundColor:"#97CAE5"
      }}>
        <View style = {{marginTop:-90, alignItems:"center",}}>
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
            centerComponent={{ text:"Outputs", style: { color: '#fff' } }}
          />
        </View>
        
        <View style = {{alignItems:"center",marginTop:40}}>
          <Icon 
              name='work'
              size = {300}
          />
        </View>
          {/*Button - Project Cost Management - Module Control Costs - Outputs */}
          <TouchableHighlight style={[styles.buttonContainer, styles.activitiesButton]} 
            onPress={() => this.props.navigation.navigate("PCM_ControlCostOutputs")}>
              <Text style={styles.buttonText}>Continue studying</Text>
          </TouchableHighlight>
          
      </View>



    </Swiper>
        )
    }
}
//Project Cost Management - Module Control Costs - Outputs
class PCM_ControlCostOutputsScreen extends React.Component {
     
    render() {
  
    return (
    //Swiper for the Screens
    <Swiper
        showsButtons={false} 
        autoplay={false}
        loop = {true}
    >
    {/*Initial Screen - Outputs */}
    <View style={{
         flex:1,
         width:Dimensions.get("window").width,
         justifyContent: 'center',
         alignItems:"center",
         marginTop:-70,
         backgroundColor:"#0abde3"
      }}>
        <View style = {{alignItems:"center"}}>
          <Text style = {{textAlign:"center",fontSize:40}}>
            Outputs
          </Text>
        </View>
        
      </View>
      
      {/*1th Screen */}
      <View style={styles.container}>
        <View style = {{ alignItems:"center"}}>
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
                centerComponent={{ text: 'Control Costs', style: { color: '#fff' } }}
                rightComponent={{ 
                  icon: 'menu', 
                  color: '#fff',
                  onPress: () => this.props.navigation.openDrawer()
                  }}
            />
        </View>

        <Text style={styles.textTitle}>
          Outputs
        </Text>
        <Text style={styles.textInfo}>
          Work Perfomance Information
        </Text>
        <Text style={styles.textInfo}>
          Cost Forecasts
        </Text>
        <Text style={styles.textInfo}>
          Change Requests
        </Text>
        <Text style={styles.textInfo}>
          Project Management Plan Updates
        </Text>
        <Text style={styles.textInfo}>
          Project Document Updates
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 250, 
                height: 250
              }}
              source={{uri: 'https://3.bp.blogspot.com/-hh062BRLH_A/Wq24w680M0I/AAAAAAAAubU/oWO9r7S4oY8Yn-bgojyMwjaixWJq-P_ngCLcBGAs/s320/SETA%2B12.fw.png'}}
          />
        </View>
      </View>
      {/*2th Screen */}
      <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
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
              centerComponent={{ text: 'Control Costs', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'menu', 
                color: '#fff',
                onPress: () => this.props.navigation.openDrawer()
                }}
              />
        </View>
          
          <Text style={styles.textTitle}>
            Work Perfomance Information
          </Text>
          <Text style={styles.textInfo}>
            The calculated CV, SV,CPI, SPI, SPI, TCPI, and
            VAC,for WBS components, in particular the work 
            packages and control accounts, are documented and
            communicated to stakeholders.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:5
                }}
                source={{uri: 'https://2.bp.blogspot.com/_sUIZr_HLePk/SrN7yywdyCI/AAAAAAAAA9k/jdP2od6csKw/s400/Performance_Reports_Lumaxart.jpg'}}
            />
        </View>  
    </View>
    {/*3rd Screen */}
    <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
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
              centerComponent={{ text: 'Control Costs', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'menu', 
                color: '#fff',
                onPress: () => this.props.navigation.openDrawer()
                }}
              />
        </View>
          
          <Text style={styles.textTitle}>
            Cost Forecasts
          </Text>
          <Text style={styles.textInfo}>
            Either, a calculated Estimate At Completion(EAC)
            value, or a bottom-up EAC value is documented, and
            communicated to stakeholders.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:30
                }}
                source={{uri: 'http://185.87.220.131/~nozeyparkers/wp-content/uploads/2016/02/forecast.jpg'}}
            />
        </View>  
    </View>
    {/*4th Screen */}
    <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
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
              centerComponent={{ text: 'Control Costs', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'menu', 
                color: '#fff',
                onPress: () => this.props.navigation.openDrawer()
                }}
              />
        </View>
          
          <Text style={styles.textTitle}>
            Change Requests
          </Text>
          <Text style={styles.textInfo}>
            An analysis of project perfomance, may result
            in a change request to the cost baseline, or other
            components of the project management plan.
          </Text>
        <View style={styles.containerImages}>
            <Image
                resizeMode = "contain"
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://cccapplyproject.org/images/Backlog-Grooming.png'}}
            />
        </View>  
    </View>

    {/*5th Screen */}
    <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
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
              centerComponent={{ text: 'Control Costs', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'menu', 
                color: '#fff',
                onPress: () => this.props.navigation.openDrawer()
                }}
              />
        </View>
          
          <Text style={styles.textTitle}>
            Project Management Plan Updates
          </Text>
          <Text style={styles.textInfo}>
            Changes to the cost baseline are incorporated, in
            response to approved changes in scope, activity
            resources, control thresholds or cost estimates.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:300,
                    marginTop:50
                }}
                source={{uri: 'https://img.bhs4.com/b3/8/b38e8d919b5d030413b4b3428277c38bdf3da6bb_large.jpg'}}
            />
        </View>  
    </View>

    {/*6th Screen */}
    <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
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
              centerComponent={{ text: 'Determine the Budget', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'menu', 
                color: '#fff',
                onPress: () => this.props.navigation.openDrawer()
                }}
              />
        </View>
          
          <Text style={styles.textTitle}>
            Project Document Updates
          </Text>
          <Text style={styles.textSubTitle}>
            It includes:
          </Text>
          <Text style={styles.textInfo}>
            Cost estimates
          </Text>
          <Text style={styles.textInfo}>
            Basis of estimates
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://executivecareerbrand.com/wp-content/uploads/2018/06/update-1672346_640.png'}}
            />
        </View>  
    </View>

      {/*Last Screen - Project Cost Management - Module Control Costs - Outputs */}
      <View style={{
        flex:1,
        width:Dimensions.get("window").width,
        justifyContent: 'center',
        alignItems:"center",
        marginTop:-70,
        backgroundColor:"#97CAE5"
      }}>
        <View style = {{marginTop:-90, alignItems:"center",}}>
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
            centerComponent={{ text: 'Activities', style: { color: '#fff' } }}
          />
        </View>
        
        <View style = {{alignItems:"center",marginTop:40}}>
          <Icon 
              name='work'
              size = {300}
          />
        </View>
          {/*Button Project Cost Management - Module Control Costs - Activities */}
          <TouchableHighlight style={[styles.buttonContainer, styles.activitiesButton]} 
            onPress={() => this.props.navigation.navigate("ControlCostsActivities")}>
              <Text style={styles.buttonText}>Continue to Activities</Text>
          </TouchableHighlight>
          
      </View>

    </Swiper>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        width:Dimensions.get("window").width,
        alignItems:"center",
    },
      textInfo:
      {
        textAlign:'center',
        fontSize:20,
        margin:10,
        marginTop:20,
        color:"white",
        backgroundColor:"#54a0ff"   
      },
      textTitle:{
        textAlign:'center',
        fontSize:25,
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
        fontSize:20,
        margin:5
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
    buttonContainer: {
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

    
export default createDrawerNavigator(
//Drawer Navigator for the beginning of the following modules:
//Introduction
//Inputs
//Tools an Techniques
//Outputs
      {

        PCM_ControlCostIntro: {
          screen: PCM_ControlCostIntroScreen,
          navigationOptions : {
            title:"Introduction",
          }
        },
        PCM_ControlCostInputs: {
          screen: PCM_ControlCostInputsScreen,
          navigationOptions : {
            title:"Inputs",
          }
        },
        PCM_ControlCostTools: {
          screen: PCM_ControlCostToolsScreen,
          navigationOptions : {
            title:"Tools and Techniques",
          }
        },
        PCM_ControlCostOutputs: {
          screen:   PCM_ControlCostOutputsScreen,
          navigationOptions : {
            title:"Outputs",
          }
        },
      },
      {
        headerMode: 'none',
        drawerLockMode:"locked-closed",
        drawerPosition: "right",
      }
    );
  
  