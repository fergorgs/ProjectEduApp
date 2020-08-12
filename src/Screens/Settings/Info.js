import React from 'react';
import { ScrollView,StyleSheet,Text,View} from 'react-native';
import {Card,Header} from 'react-native-elements'


class Info extends React.Component {
  
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>

        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: () =>  this.props.navigation.goBack(),
          }}
          centerComponent={{ text: 'ABOUT', style: { color: '#fff' } }}
        />

        <View>
            <Text style={styles.textTitle}>
                More about ProjectEdu
            </Text>
            
            <Text style={styles.textInfo}>
                ProjectEdu is a mobile learning application prototype focused on users who
                want to learn Software Project Management. Several mobile applications can be
                found in order to carry out the management activities throughout the project,
                but ProjectEdu stands out since it focuses on teaching Project Management
                theory as well as its practice.
            </Text>
            <Text style={styles.textInfo}>
                ProjectEdu is in its prototype version, being developed using the React native Framework
            </Text>
            <Text style={styles.textInfo}>
                In its current version, ProjectEdu has the following main features:
            </Text>

            <Card
                title='Activities'
                image={
                    source={uri: 'https://cdn.lynda.com/course/145310/145310-636190593102969217-16x9.jpg'}
                }>
                <Text style={styles.cardInfo}>
                In this area of the app, the learner has access to all the theoretical
                content of Software Project Management and also to some related activities
                and practices.
                </Text>
            
            </Card>

            <Card
                title='Statistics'
                image={
                    source={uri: 'https://www.siteground.com/blog/wp-content/uploads/2016/06/new-statistics.jpg'}
                }>
                <Text style={styles.cardInfo}>
                    This feature allows the learner to check his/her progress since the
                    user may access his/her score and see how much he/she has learned from
                    the application through statistical data.   
                </Text>
            </Card>
        
            <Card
                title='Ranking'
                image={
                    source={uri: 'https://thumbs.jusbr.com/imgs.jusbr.com/publications/images/083ed15e981cd6003e0ba383abf061a2'}
                }>
                <Text style={styles.cardInfo}>
                    This feature allows the learner to compare his/her progress with
                    others learners by participating in competitions and seeing their ranking
                    among other users of the application. 
                </Text>
            </Card>

            <Card
                title='Settings'
                image={
                    source={uri: 'https://winbusinessin.com/wp-content/uploads/2015/08/settings-copy.png'}
                }>
                <Text style={styles.cardInfo}>
                    This feature allows the user to set the app preferences concerning
                    notications, sounds and some system options.
                </Text>
            </Card>

            <Text style={styles.textInfo}>
                Although some of these features are usual in mobile learning apps, ProjectEdu
                has been designed considering two artifacts aimed at systematizing the designing
                of m-learning apps. 
            </Text>
            <Text style={styles.textInfo}>
                We opted for an iterative and incremental development process, with short phases 
                and proximity to the final target audience, so that the application is well 
                accepted by them. 
                In this sense,the features are inserted and tested gradually.
            </Text>
            <Text style={styles.textInfo}>
                In the current version of ProjectEdu, ReqML-Catalog guided the definition of
                learning and usability requirements. 
                Since we want to provide a more attractive approach, it is important to consider
                user interface and usability aspects to achieve this goal.
            </Text>
        </View>
       
      </ScrollView>
    );
  }
}

export default Info;

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#3b5998',
        alignItems:"center",   
      },
    textInfo:{
        margin:15,
        textAlign:'center',
        fontSize:15,
        color:'#ffffff'
    },
    textTopics:{
        margin:15,
        textAlign:'left',
        fontSize:15,
        color:'#ffffff'
    },
    textTitle:{
        margin:15,
        textAlign:'center',
        fontSize:40,
        color:'#ffffff'
    },
    cardInfo:{
        textAlign:'center',
    },
});