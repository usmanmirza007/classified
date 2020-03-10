import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, Ionicons } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window');


export default class message_Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.container} >
                <ScrollView>
                    <View style={styles.OuterInput}>
                        <View style={styles.firstInput}>
                            <TextInput
                                numberOfLines={6}
                                placeholderTextColor='#9e9e9e'
                                style={styles.input}
                                placeholder={'First Name'}
                                containerStyle={{ marginVertical: '5%' }} />
                        </View>
                        <View style={styles.firstInput}>
                            <TextInput
                                numberOfLines={6}
                                placeholderTextColor='#9e9e9e'
                                style={styles.input}
                                placeholder={'Last Name'}
                                containerStyle={{ marginVertical: '5%' }} />
                        </View>
                    </View>
                    <View style={styles.emailInput}>
                        <TextInput
                            numberOfLines={6}
                            placeholderTextColor='#9e9e9e'
                            style={styles.input}
                            placeholder={'Your Email Address'}
                            containerStyle={{ marginVertical: '5%' }} />
                    </View>
                    <View style={styles.emailInput}>
                        <TextInput
                            numberOfLines={6}
                            placeholderTextColor='#9e9e9e'
                            style={styles.input}
                            placeholder={'Your Moible No'}
                            containerStyle={{ marginVertical: '5%' }} />
                    </View>
                    <View style={styles.messageInput}>
                        <TextInput
                            numberOfLines={6}
                            placeholderTextColor='#9e9e9e'
                            style={styles.messageTextInput}
                            placeholder={'Your Message'}
                            containerStyle={{ marginVertical: '5%' }} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={
                                () => this.props.navigation.navigate('#')}>
                            <Text style={styles.buttonText}>Send</Text>
                        </TouchableOpacity>
                    </View >
                </ScrollView>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    OuterInput: {
        flexDirection: 'row',
        marginTop: 20
    },
    input: {
        fontSize: 15,
        marginLeft: 20,
        width: '100%',
        marginRight: -80
    },
    firstInput: {
        width: width(43),
        height: height(9),
        borderRadius: 3,
        marginTop: 5,
        marginLeft: 20,
        marginRight: -10,
        backgroundColor: '#fff',
        backgroundColor: '#f0f0f0',
    },
    emailInput: {
        width: width(89),
        height: height(9),
        borderRadius: 3,
        marginTop: 10,
        marginLeft: 20,
        marginRight: -10,
        backgroundColor: '#fff',
        backgroundColor: '#f0f0f0',
    },
    messageInput: {
        width: width(89),
        height: height(20),
        borderRadius: 3,
        marginTop: 10,
        marginLeft: 20,
        marginRight: -10,
        backgroundColor: '#fff',
        backgroundColor: '#f0f0f0',
    },
    messageTextInput: {
        fontSize: 15,
        marginLeft: 20,
        marginTop: -25,
        width: '100%',
        marginRight: -80
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    buttonText: {
        width: width(89),
        height: height(9),
        fontSize: 20,
        color: '#fff',
        textAlignVertical: 'center',
        textAlign: 'center',
        backgroundColor: '#26ae61',
        borderRadius: 5,
    },
});