import React from 'react';
import {  View,StyleSheet,Dimensions,Image,Text,Alert,TouchableHighlight} from 'react-native';
import {Header,Icon} from 'react-native-elements'
import Swiper from 'react-native-swiper';
import { createDrawerNavigator} from 'react-navigation-drawer'
import TopicPage from './Lessons_Components/TopicPage'
import TopicTitle from './Lessons_Components/TopicTitle'
import TopicEnd from './Lessons_Components/TopicEnd'

class TopicSwiper extends React.Component {
     
    render() {

    const { params } = this.props.navigation.state;
    const topicName = params ? params.topicName : null;
    const topicTheory = params ? params.topicTheory : null;


    //Para cada item de 'topicTheory' do array de infos,
    //gera um componente página, passando as infos da página
    //através de pageContent
    const temp = topicTheory.map((page) => {

      return <TopicPage headerText={topicName} pageContent={page} navigation={this.props.navigation}></TopicPage>
    })


    //cria um vetor para conter todas as páginas do tópico
    //inicializa ele com a página do título
    const pages = [<TopicTitle topicName={topicName}></TopicTitle>]


    //adiciona ao vetor as páginas de conteúdo geradas anteriormente
    for(let i = 0; i < temp.length; i++){
      pages.push(temp[i])
    }


    //adiciona a página final do tópico
    pages.push(<TopicEnd navigation={this.props.navigation}></TopicEnd>)
  
    return (
      <Swiper
        showsButtons={false} 
        autoplay={false}
        loop = {true}
      >
        {pages}
      </Swiper>
        )
    }
}
  
export default TopicSwiper