import React, { useState, useEffect } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import Swiper from 'react-native-swiper';

import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

import Slide from './components/Slide';

function Slides() {
    const navigation = useNavigation();
    const route = useRoute();

    const [slides, setSlides] = useState(undefined);

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

    const content =
        slides !== undefined && slides?.length > 0
            ? slides.map((page) => <Slide slide={page.id} type={page.type} />)
            : [<Slide type="empty" />];

    const pages = [
        <Slide type="begin" topicName="teste" />,
        ...content,
        <Slide type="end" />
    ];

    return (
        <Swiper showsButtons={false} autoplay={false} loop={false}>
            {pages}
        </Swiper>
    );
}

export default Slides;
