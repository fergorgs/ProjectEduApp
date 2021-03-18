import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, Button, Header } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

function Modules() {
    const navigation = useNavigation();
    const [modules, setModules] = useState(undefined);

    useEffect(() => {
        const fetch = async () => {
            axios
                .get('http://192.168.0.29:8000/module')
                .then((res) => {
                    setModules(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        fetch();
    }, [setModules, axios]);

    const cards = modules?.length
        ? modules.map((mod, index) => (
              <Card
                  key={mod.id}
                  image={{ uri: mod.image ? mod.image : 'a' }}
                  imageProps={{
                      placeholderStyle: {
                          backgroundColor: '#03A9F4',
                      },
                  }}
                  title={mod.name}
              >
                  {/*
                    <Text style={{marginBottom: 10, textAlign: 'center'}}>
                        Generic Module Title
                    </Text>
                    */}
                  <Button
                      type="solid"
                      onPress={() => {
                          console.log('click');
                          navigation.navigate('Topics', {
                              mod: mod.id,
                          });
                      }}
                      backgroundColor="#03A9F4"
                      buttonStyle={{
                          borderRadius: 0,
                          marginLeft: 0,
                          marginRight: 0,
                          marginBottom: 0,
                      }}
                      title="View now"
                  />
              </Card>
          ))
        : null;

    return (
        <View>
            <Header
                backgroundColor="#1e272e"
                leftComponent={{
                    icon: 'menu',
                    color: '#fff',
                    onPress: () => navigation.openDrawer(),
                }}
                centerComponent={{
                    text: 'ACTIVITIES',
                    style: { color: '#fff' },
                }}
                rightComponent={{
                    icon: 'portrait',
                    color: '#fff',
                    onPress: () => navigation.navigate('Perfil'),
                }}
            />
            <ScrollView style={{ marginBottom: 80 }}>{cards}</ScrollView>
        </View>
    );
}

export default Modules;
