import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    Text,
    Alert,
    TouchableHighlight,
} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import Swiper from 'react-native-swiper';
//import { createDrawerNavigator} from 'react-navigation-drawer'
import TopicPage from './components/TopicPage';
import TopicTitle from './components/TopicTitle';
import TopicEnd from './components/TopicEnd';
import Slide from './components/Slide';

import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

function Slides() {
    const navigation = useNavigation();
    const route = useRoute();

    const [slides, setSlides] = useState([]);

    const { topic } = route.params;

    useEffect(() => {
        const fetch = async () => {
            axios
                .get(`http://192.168.0.29:8000/slide/${topic}`)
                .then((res) => {
                    setSlides(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        fetch();
    }, [setSlides, topic, axios]);
    //const { params } = this.props.navigation.state;
    //const topicName = params ? params.topicName : null;
    //const topicTheory = params ? params.topicTheory : null;

    //Para cada item de 'topicTheory' do array de infos,
    //gera um componente página, passando as infos da página
    //através de pageContent
    const temp = slides.map((page) => {
        return (
            <TopicPage
                headerText={'teste'}
                pageContent={page}
                navigation={navigation}
                type={page.type}
            ></TopicPage>
        );
    });

    //const content =
    //    slides !== undefined
    //        ? slides.map((item) => <Slide type={item.type} slide={item.id} />)
    //        : [<Slide type="empty" />];

    //cria um vetor para conter todas as páginas do tópico
    //inicializa ele com a página do título
    const pages = [<TopicTitle topicName={'teste'}></TopicTitle>];
    //const pages = [
    //    <Slide type="begin" title="Nome do tópico" />,
    //    ...content,
    //    <Slide type="end" />,
    //];

    //console.log(pages);
    //adiciona ao vetor as páginas de conteúdo geradas anteriormente
    for (let i = 0; i < temp.length; i++) {
        pages.push(temp[i]);
    }

    //adiciona a página final do tópico
    pages.push(<TopicEnd navigation={navigation}></TopicEnd>);

    return (
        <Swiper showsButtons={false} autoplay={false} loop={false}>
            {pages}
        </Swiper>
    );
}

export default Slides;
