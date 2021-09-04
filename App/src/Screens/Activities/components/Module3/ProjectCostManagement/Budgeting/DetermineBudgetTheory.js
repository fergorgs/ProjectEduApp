import React from 'react';
import {  View,StyleSheet,Dimensions,Image,Text,Alert,TouchableHighlight} from 'react-native';
import {Header,Icon} from 'react-native-elements'
import Swiper from 'react-native-swiper';
import { createDrawerNavigator} from 'react-navigation-drawer'

//Project Cost Management - Module Determine Budget - Introduction
class  PCM_DetermineBudgetIntroScreen extends React.Component {
    
  render() {
  
    return (
      //Swiper for the Screens
      <Swiper
        showsButtons={false} 
        autoplay={false}
        loop = {true}
    >
    {/*Initial Screen - Types of Costs */}
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
              centerComponent={{ text: 'Determine the Budget', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'menu', 
                color: '#fff',
                onPress: () => this.props.navigation.openDrawer()
                }}
              />
          </View>
          
          <Text style={styles.textTitle}>
             Determining the Budget
          </Text>
          <Text style={styles.textInfo}>
              Determines the cost baseline, against which project
              performance, can be monitored and controlled.
          </Text>
          <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://bano.eu/wp-content/uploads/2018/07/budget-bepalen-evenement.jpg'}}
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
              centerComponent={{ text: 'Determine the Budget', style: { color: '#fff' } }}
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
                source={{uri: 'https://whatispmp.com/wp-content/uploads/2018/02/7-2-Determine-Budget-Process-Decomposition.png'}}
            />
          </View>
  
        </View>
  
        {/*Last Screen - Project Cost Management - Module Determine Budget - Introduction */}
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
          
          {/*Button - Project Cost Management - Module Determine Budget - Inputs */}
          <TouchableHighlight style={[styles.buttonContainer, styles.activitiesButton]} 
            onPress={() => this.props.navigation.navigate("PCM_DetermineBudgetInputs")}>
              <Text style={styles.buttonText}>Continue studying</Text>
          </TouchableHighlight>
          
      </View>

        </Swiper>
        )
    }
}
//Project Cost Management - Module Determine Budget - Inputs
class  PCM_DetermineBudgetInputsScreen extends React.Component {
     
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
            centerComponent={{ text: 'Determine the Budget', style: { color: '#fff' } }}
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
           Activity Cost Estimates
        </Text>
        <Text style={styles.textInfo}>
           Basis of Estimates
        </Text>
        <Text style={styles.textInfo}>
           Scope Baseline
        </Text>
        <Text style={styles.textInfo}>
           Project Schedule
        </Text>
        <Text style={styles.textInfo}>
           Resources Calendars
        </Text>
        <Text style={styles.textInfo}>
           Contracts
        </Text>
        <Text style={styles.textInfo}>
           Organizational Process Assets
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
              centerComponent={{ text: 'Determine the Budget', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'menu', 
                color: '#fff',
                onPress: () => this.props.navigation.openDrawer()
                }}
              />
        </View>
          
          <Text style={styles.textTitle}>
             Activity Costs Estimates
          </Text>
          <Text style={styles.textInfo}>
            Determined for each activity within
            a work package, nd the summed to determine
            the total estimate for a work package.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://www.impala.pt/wp-content/uploads/fly-images/145695/aumentos-2018-entre-no-novo-ano-com-a-carteira-apertada-750x501-lt.jpg'}}
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
              centerComponent={{ text: 'Determine the Budget', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'menu', 
                color: '#fff',
                onPress: () => this.props.navigation.openDrawer()
                }}
              />
        </View>
          
          <Text style={styles.textTitle}>
            Basis of Estimates
          </Text>
          <Text style={styles.textInfo}>
            Should be considered assumptions
            regarding indirect costs, will be
            included in the project budget.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://abrilexame.files.wordpress.com/2016/09/size_960_16_9_casal-documento3.jpg'}}
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
              centerComponent={{ text: 'Determine the Budget', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'menu', 
                color: '#fff',
                onPress: () => this.props.navigation.openDrawer()
                }}
              />
        </View>
          
          <Text style={styles.textTitle}>
            Scope Baseline
          </Text>
          <Text style={styles.textInfo}>
            The scope statement describes the constraints of 
            the project, should be considered when developing
            the budget.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://cdn.lynda.com/course/724785/724785-636922938175320617-16x9.jpg'}}
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
              centerComponent={{ text: 'Determine the Budget', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'menu', 
                color: '#fff',
                onPress: () => this.props.navigation.openDrawer()
                }}
              />
        </View>
          
          <Text style={styles.textTitle}>
            Project Schedule
          </Text>
          <Text style={styles.textInfo}>
            Contains information, such as, start and end for activities,milestones.
          </Text>
          <Text style={styles.textInfo}>
            Based on the information in the schedule can be determined 
            budget expenditures for calendar periods.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://blog.tailwindapp.com/wp-content/uploads/2019/03/blog-post-header-no-text-how-toschedule-pins-on-pinterest.png'}}
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
            Resource Calendars
          </Text>
          <Text style={styles.textInfo}>
            Resource Calendars help determine costs in calendar periods
            and over the lenght of the project because they describe what
            resources are needed when on the project.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXw9cd48F9QxI5MQNZwwVzO1cR0biFvYenS71wvg1jL_3E_5-a'}}
            />
        </View>  
    </View>
  {/*7th Screen */}
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
            Contracts
          </Text>
          <Text style={styles.textInfo}>
            If contracts are being used on the project,
            they will show the costs that the project is
            obliged to incur under the terms of the contract.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://cdn-images-1.medium.com/max/1600/1*zS6k4a6dyr_72A6ltGrr-A.png'}}
            />
        </View>  
    </View>
    {/*8th Screen */}
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
            Organizational Process Assets
          </Text>
          <Text style={styles.textInfo}>
            Include cost budgeting tools, the policies and procedures regarding
            budgeting exercises and reporting methods
          </Text> 
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://pmsczone-na1401781608.netdna-ssl.com/wp-content/uploads/2012/08/Functional-Organization-Structure.png'}}
            />
        </View>  
    </View>

     {/*Last Screen - Project Cost Management - Module Determine Budget - Inputs */}
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
          {/*Button - Project Cost Management - Module Determine Budget - Tools and Techniques */}
          <TouchableHighlight style={[styles.buttonContainer, styles.activitiesButton]} 
            onPress={() => this.props.navigation.navigate("PCM_DetermineBudgetTools")}>
              <Text style={styles.buttonText}>Continue studying</Text>
          </TouchableHighlight>
          
      </View>


    </Swiper>
        )
    }
}
//Project Cost Management - Module Determine Budget - Tools and Techniques
class PCM_DetermineBudgetToolsScreen extends React.Component {
     
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
            centerComponent={{ text: 'Estimate Costs', style: { color: '#fff' } }}
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
            Cost Aggregation
        </Text>
        <Text style={styles.textInfo}>
            Reserve Analysis
        </Text>
        <Text style={styles.textInfo}>
           Historical Relationships
        </Text>
        <Text style={styles.textInfo}>
           Funding Limit Reconcialition
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
              centerComponent={{ text: 'Determine the Budget', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'menu', 
                color: '#fff',
                onPress: () => this.props.navigation.openDrawer()
                }}
              />
        </View>
          
          <Text style={styles.textTitle}>
            Cost Aggregation
          </Text>
          <Text style={styles.textInfo}>
            Cost estimates are aggregated by work packages in accordance
            with the Work Breakdown Structure.
          </Text>
          <Text style={styles.textInfo}>
            The work package cost estimates are then aggregated for the higher
            component levels of the WBS, such as, control accounts, and
            ultimately for the entire project.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://st.depositphotos.com/1635204/3240/i/950/depositphotos_32408123-stock-photo-glasses-calculator-and-pencil-on.jpg'}}
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
              centerComponent={{ text: 'Determine the Budget', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'menu', 
                color: '#fff',
                onPress: () => this.props.navigation.openDrawer()
                }}
              />
        </View>
          
          <Text style={styles.textTitle}>
            Reseve Analysis
          </Text>
          <Text style={styles.textInfo}>
            Works the same for the Determine Budget process,only you are
            planning contingency reserves for unplanned project scope and
            project costs. 
          </Text>
          <Text style={styles.textInfo}>
            Reserve analysis may be calculated on a porcentage basis,
            or may only be applied to activities, or work packages
            with high risk
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://www.blbbrasil.com.br/blog/wp-content/uploads/2017/12/03-02-17-fundo-e1486123507924.jpg'}}
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
              centerComponent={{ text: 'Determine the Budget', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'menu', 
                color: '#fff',
                onPress: () => this.props.navigation.openDrawer()
                }}
              />
        </View>
          
          <Text style={styles.textTitle}>
            Historical Relationships
          </Text>
          <Text style={styles.textInfo}>
            Refer to parametric estimating which is based on historical data.
          </Text>
          <Text style={styles.textInfo}>
            Implemented by factoring in the cost of project activities and
            multiplying them based on the ratio of this current activity.
          </Text>
          <Text style={styles.textInfo}>
            For example, if there is 100 mile road and a previous similar project
            found that, construction costs were $300,000 per mile, then the cost
            of this current project could be determined based upon lenght.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:300,
                    height:100,
                    marginTop:10
                }}
                source={{uri: 'https://blog.cedrotech.com/wp-content/uploads/2015/08/analise-tecnica.png'}}
            />
        </View>  
    </View>

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
            Funding Limit Reconciliation
          </Text>
          <Text style={styles.textInfo}>
            The expandture of founds in reconciled with the funding limits
            set by the customer
          </Text>
          <Text style={styles.textInfo}>
            Reconcialition will necessitate the scheduling of work to
            be adjusted to smooth or regulate those expanditures
          </Text>
          <Text style={styles.textInfo}>
            Rescheduling can impact the allocation of resources
          </Text>
          <Text style={styles.textInfo}>
           
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:300,
                    height:150,
                }}
                source={{uri: 'https://www.nextadvisor.com/blog/wp-content/uploads/2016/09/bigstock-Max-Credit-Means-Debit-Card-An-72625759.jpg'}}
            />
        </View>  
    </View>

                

      {/*Last Screen - Project Cost Management - Module Determine Budget - Tools and Techniques */}
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
          {/*Button - Project Cost Management - Module Determine Budget - Outputs */}
          <TouchableHighlight style={[styles.buttonContainer, styles.activitiesButton]} 
            onPress={() => this.props.navigation.navigate("PCM_DetermineBudgetOutputs")}>
              <Text style={styles.buttonText}>Continue studying</Text>
          </TouchableHighlight>
          
      </View>



    </Swiper>
        )
    }
}
//Project Cost Management - Module Determine Budget - Outputs
class  PCM_DetermineBudgetOutputsScreen extends React.Component {
     
    render() {
  
    return (
    //Swiper Screens
    <Swiper
        showsButtons={false} 
        autoplay={false}
        loop = {true}
    >
    {/*initial Screen - Outputs */}
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
                centerComponent={{ text: 'Determine the Budget', style: { color: '#fff' } }}
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
           Cost Perfomance Baseline
        </Text>
        <Text style={styles.textInfo}>
            Project Funding Requirements
        </Text>
        <Text style={styles.textInfo}>
            Project Document Updates
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 300, 
                height: 300
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
              centerComponent={{ text: 'Determine the Budget', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'menu', 
                color: '#fff',
                onPress: () => this.props.navigation.openDrawer()
                }}
              />
        </View>
          
          <Text style={styles.textTitle}>
            Cost Perfomance Baseline
          </Text>
          <Text style={styles.textInfo}>
            Specifies what costs will be incurred and when they
            will occur.
          </Text>
          <Text style={styles.textInfo}>
            It is developed by adding the costs of WBS by time periods.
          </Text>
          <Text style={styles.textInfo}>
            A time-phased budget that is used as a basis against which to measure,
            monitor, and control overall cost perfomance on the project. 
          </Text>
        <View style={styles.containerImages}>
            <Image
                resizeMode = "contain"
                style={{
                    width:350,
                    height:200,
                    marginTop:5
                }}
                source={{uri: 'https://pmpsuperguide.com/wp-content/uploads/2018/06/Cost-performance-format-768x486.png'}}
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
              centerComponent={{ text: 'Determine the Budget', style: { color: '#fff' } }}
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
            Describe the need for funding over the course of the project
            and are derived from the cost perfomance baseline.
          </Text>
          <Text style={styles.textInfo}>
            The difference between the funding requirements, 
            and the cost perfomance baseline at the end of the
            project is the management reserve.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:30
                }}
                source={{uri: 'https://pmhut.com/wp-content/uploads/2011/03/project-funding.png'}}
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
            Project documents that may be updated include:
          </Text>
          <Text style={styles.textInfo}>
            Risk Register
          </Text>
          <Text style={styles.textInfo}>
            Activity Cost Estimates
          </Text>
          <Text style={styles.textInfo}>
            Project Schedule
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'http://3.bp.blogspot.com/-XSzAkpW-W9s/Vmg6d0H2xTI/AAAAAAAAEMI/8vvP_vPolBc/s1600/update.jpg'}}
            />
        </View>  
    </View>

      {/*Last Screen - Project Cost Management - Module Determine Budget - Outputs*/}
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
          {/*Project Cost Management - Module Determine Budget - Activities */}
          <TouchableHighlight style={[styles.buttonContainer, styles.activitiesButton]} 
            onPress={() => this.props.navigation.navigate("DetermineBudgetActivities")}>
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

        PCM_DetermineBudgetIntro: {
          screen: PCM_DetermineBudgetIntroScreen,
          navigationOptions : {
            title:"Introduction",
          }
        },
        PCM_DetermineBudgetInputs: {
          screen: PCM_DetermineBudgetInputsScreen,
          navigationOptions : {
            title:"Inputs",
          }
        },
        PCM_DetermineBudgetTools: {
          screen: PCM_DetermineBudgetToolsScreen,
          navigationOptions : {
            title:"Tools and Techniques",
          }
        },
        PCM_DetermineBudgetOutputs: {
          screen:   PCM_DetermineBudgetOutputsScreen,
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
  
  