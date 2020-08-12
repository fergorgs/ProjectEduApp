import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';

import Swiper from 'react-native-swiper';
import { Icon,Header} from 'react-native-elements';

export default class Help extends React.Component {

  render(){
    //Renders a swiper describing the mains componentes of the app
    return (
      <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>

        <View style={styles.slide1}>

        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: () =>  this.props.navigation.goBack(),
          }}
          centerComponent={{ text: 'ACTIVITIES', style: { color: '#fff' } }}
        />

          <Icon 
                name='work'
                size = {300}
                />
          <Text style={styles.text}>Activities</Text>
          <Text style={styles.text1}>Content modules and activities</Text>
        </View>
        <View style={styles.slide2}>

          <Header
            backgroundColor = '#1e272e'
            leftComponent={{
            icon: 'arrow-back',
            color: '#fff',
            onPress: () =>  this.props.navigation.goBack(),
            }}
            centerComponent={{ text: 'RANKING', style: { color: '#fff' } }}
          />
          <Icon 
                    name='sort'
                    size = {300}
                    />
          <Text style={styles.text}>Ranking</Text>
          <Text style={styles.text1}>Show the current position in the ranking</Text>
        </View>
        <View style={styles.slide3}>

          <Header
            backgroundColor = '#1e272e'
            leftComponent={{
            icon: 'arrow-back',
            color: '#fff',
            onPress: () =>  this.props.navigation.goBack(),
            }}
            centerComponent={{ text: 'STATISTICS', style: { color: '#fff' } }}
          />
            <Icon 
              name='graphic-eq' 
              size = {300}
              />
          <Text style={styles.text}>Statistics</Text>
          <Text style={styles.text1}>Show the efficiency of each person</Text>
        </View>
        <View style={styles.slide4}>

          <Header
            backgroundColor = '#1e272e'
            leftComponent={{
            icon: 'arrow-back',
            color: '#fff',
            onPress: () =>  this.props.navigation.goBack(),
            }}
            centerComponent={{ text: 'SETTINGS', style: { color: '#fff' } }}
          />
          <Icon 
                  name='settings'
                  size = {300}
                  />
          <Text style={styles.text}>Settings</Text>
          <Text style={styles.text1}>Show the main settings</Text>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide2: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  slide3: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#92BB',
  },
  slide4: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFC312',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  text1: {
    textAlign: 'center',
    color: '#fff',
    fontSize:15,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  }
})