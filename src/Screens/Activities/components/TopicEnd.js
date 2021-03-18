import React from 'react';
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
import LessonHeader from './LessonHeader.js';

class TopicEnd extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    width: Dimensions.get('window').width,
                    alignItems: 'center',
                    backgroundColor: '#97CAE5',
                }}
            >
                <View style={{ alignItems: 'center' }}>
                    <LessonHeader
                        centerText="Estimate Costs"
                        navigation={this.props.navigation}
                    />
                </View>

                <View style={{ alignItems: 'center', marginTop: 40 }}>
                    <Icon name="work" size={300} />
                </View>

                <TouchableHighlight
                    style={[styles.buttonContainer, styles.activitiesButton]}
                    onPress={() => {
                        this.props.navigation.goBack();
                    }}
                >
                    <Text style={styles.buttonText}>Finish topic</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        alignItems: 'center',
    },
    containerProgress: {
        marginTop: 5,
        alignItems: 'center',
    },
    textInfo: {
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
        marginTop: 20,
        color: 'white',
        backgroundColor: '#54a0ff',
    },
    textTitle: {
        textAlign: 'center',
        fontSize: 25,
        marginTop: 10,
        marginBottom: 5,
    },
    containerImages: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoImage: {
        width: 150,
        height: 100,
    },
    textSubTitle: {
        textAlign: 'center',
        fontSize: 15,
        marginTop: 0,
        marginBottom: 5,
    },
    button: {
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
    },
    buttonPress: {
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        backgroundColor: '#f40331',
    },
    modalContainer: {
        backgroundColor: '#ffffff',
        flex: 1,
        alignItems: 'center',
        marginTop: 200,
    },
    infoImageOverlay: {
        width: 300,
        height: 300,
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 40,
        width: 280,
        borderRadius: 30,
    },
    buttonText: {
        color: 'white',
    },
    activitiesButton: {
        backgroundColor: '#3498db',
    },
});

export default TopicEnd;
