import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

function Block({ content, type, datatype }) {
    return (
        <View style={styles.block}>
            <Text style={styles.blockType}>{type}</Text>
            {datatype === 'image' && (
                <Image
                    source={{ uri: content }}
                    style={styles.infoImage}
                    resizeMode={'contain'}
                ></Image>
            )}
            {datatype === 'video' && (
                <WebView
                    style={styles.videoContainer}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    automaticallyAdjustContentInsets={true}
                    scalesPageToFit={true}
                    source={{ uri: content }}
                />
            )}
            {datatype === 'text' && (
                <Text style={styles.textSubTitle}>{content}</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        width: Dimensions.get('window').width - 60,
        alignItems: 'center',
        margin: 30,
        marginTop: 0,
        padding: 20,
        borderColor: '#54a0ff',
        borderWidth: 2,
        borderRadius: 3,
        backgroundColor: '#e7f1ff'
    },
    blockType: {
        fontSize: 20,
        textAlign: 'left',
        flex: 1,
        alignSelf: 'stretch',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginBottom: 5
    },
    videoContainer: {
        width: Dimensions.get('window').width - 106,
        height: ((Dimensions.get('window').width - 106) * 9) / 16
    },
    infoImage: {
        alignSelf: 'stretch',
        aspectRatio: 1
    },
    textSubTitle: {
        textAlign: 'left',
        alignSelf: 'stretch',
        fontSize: 15,
        marginTop: 5
    }
});

export default Block;
