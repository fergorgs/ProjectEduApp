import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';
import { useForm } from 'react-hook-form';

function Exercise({ content, type }) {
    const { register, handleSubmit, setValue, getValues, errors } = useForm();
    const [answered, setAnswered] = useState(undefined);
    useEffect(() => {
        register('answer');
    }, [register]);

    const checkAnswerText = (ans) => {
        if (ans === content.answer) setAnswered(true);
        else setAnswered(false);
    };

    return (
        <View style={styles.block}>
            <Text style={styles.blockType}>{`Exercício: ${type}`}</Text>
            {type === 'texto' && (
                <View>
                    <Text style={styles.textSubTitle}>{content.question}</Text>
                    <TextInput
                        defaultValue={getValues('answer')}
                        placeholder="Resposta"
                        style={[
                            answered === false && styles.wrong,
                            answered === true && styles.correct,
                            styles.singleLineInput
                        ]}
                        onChangeText={(text) => {
                            setValue('answer', text);
                        }}
                        editable={answered === undefined}
                    />
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={handleSubmit(({ answer }) =>
                            checkAnswerText(answer)
                        )}
                    >
                        <Text>Submeter</Text>
                    </TouchableOpacity>
                </View>
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
    submitButton: {
        backgroundColor: '#54a0ff',
        marginTop: 10,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
        //elevation: 2
    },
    correct: {
        backgroundColor: '#aaffaa',
        borderWidth: 2,
        borderColor: '#66aa66'
    },
    wrong: {
        backgroundColor: '#ffaaaa',
        borderWidth: 2,
        borderColor: '#aa6666'
    },
    singleLineInput: {
        marginTop: 10,
        padding: 8,
        backgroundColor: 'white',
        //elevation: 2,
        borderRadius: 3
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

export default Exercise;
