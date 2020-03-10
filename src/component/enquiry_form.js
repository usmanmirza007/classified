import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window');

export default class enquiry_form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: true
        };
    }
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.OuterInput}>
                    <View style={styles.firstInput}>
                        <TextInput
                            numberOfLines={6}
                            placeholderTextColor='#9e9e9e'
                            style={styles.input}
                            placeholder={'First Name'}
                            containerStyle={{ marginVertical: '5%' }}
                        />
                    </View>
                    <View style={styles.firstInput}>
                        <TextInput
                            numberOfLines={6}
                            placeholderTextColor='#9e9e9e'
                            style={styles.input}
                            placeholder={'Second Name'}
                            containerStyle={{ marginVertical: '5%' }}
                        />
                    </View>
                </View>
                <TouchableOpacity>
                    <View style={styles.outerViewSend}>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Send</Text>
                        </View >
                        <View style={{ marginRight: 20 }}>
                            <Ionicons
                                name='md-mail'
                                type='font-awesome'
                                color='#fff'
                                size={22}
                                containerStyle={{ width: width(10) }}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, width: WIDTH - 40, marginLeft: 20 }}>
                    <View style={{ marginLeft: 0, marginBottom: 10, marginTop: 1, justifyContent: 'center' }}>
                        <Text style={{ color: '#000', fontSize: 15, fontWeight: 'bold' }}>SIMILAR ADS</Text>
                    </View>
                    <View>
                        <SimpleLineIcons
                            name='options'
                            type='font-awesome'
                            color='#9e9e9e'
                            size={24}
                            containerStyle={{ width: width(10) }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                    <Image source={require('./../image/home.jpg')} style={{ width: width(40), height: width(30), }}></Image>
                    <View style={{ marginLeft: '5%', marginTop: '0%' }}>
                        <Text style={{ fontSize: 13, marginTop: 0, color: '#000', fontWeight: 'bold' }}>Ben Parker</Text>
                        <Text style={{ fontSize: 13, marginTop: 5, color: '#ccc', }}>New Yark, United State</Text>
                        <Text style={{ fontSize: 13, marginTop: 10, color: '#000', fontWeight: 'bold' }}>Ben Parker</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View style={{ marginLeft: 0 }}>
                                <AntDesign
                                    name='calendar'
                                    type='font-awesome'
                                    color='#ccc'
                                    size={24}
                                    containerStyle={{ width: width(10) }} />
                            </View>
                            <Text style={{ marginLeft: 10, color: '#ccc' }}>5 Aug</Text>
                        </View>
                    </View>
                </View>
                <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginBottom: 20, marginHorizontal: 20, marginTop: 20 }} ></View>
                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                    <Image source={require('./../image/home.jpg')} style={{ width: width(40), height: width(30), }}></Image>
                    <View style={{ marginLeft: '5%', marginTop: '0%' }}>
                        <Text style={{ fontSize: 13, marginTop: 0, color: '#000', fontWeight: 'bold' }}>Ben Parker</Text>
                        <Text style={{ fontSize: 13, marginTop: 5, color: '#ccc', }}>New Yark, United State</Text>
                        <Text style={{ fontSize: 13, marginTop: 10, color: '#000', fontWeight: 'bold' }}>Ben Parker</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View style={{ marginLeft: 0 }}>
                                <AntDesign
                                    name='calendar'
                                    type='font-awesome'
                                    color='#ccc'
                                    size={24}
                                    containerStyle={{ width: width(10) }} />
                            </View>
                            <Text style={{ marginLeft: 10, color: '#ccc' }}>5 Aug</Text>
                        </View>
                    </View>
                </View>
                <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginBottom: 20, marginHorizontal: 20, marginTop: 20 }} ></View>
                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                    <Image source={require('./../image/home.jpg')} style={{ width: width(40), height: width(30), }}></Image>
                    <View style={{ marginLeft: '5%', marginTop: '0%' }}>
                        <Text style={{ fontSize: 13, marginTop: 0, color: '#000', fontWeight: 'bold' }}>Ben Parker</Text>
                        <Text style={{ fontSize: 13, marginTop: 5, color: '#ccc', }}>New Yark, United State</Text>
                        <Text style={{ fontSize: 13, marginTop: 10, color: '#000', fontWeight: 'bold' }}>Ben Parker</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View style={{ marginLeft: 0 }}>
                                <AntDesign
                                    name='calendar'
                                    type='font-awesome'
                                    color='#ccc'
                                    size={24}
                                    containerStyle={{ width: width(10) }} />
                            </View>
                            <Text style={{ marginLeft: 10, color: '#ccc' }}>5 Aug</Text>
                        </View>
                    </View>
                </View>
                <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginBottom: 20, marginHorizontal: 20, marginTop: 20 }} ></View>
                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                    <Image source={require('./../image/home.jpg')} style={{ width: width(40), height: width(30), }}></Image>
                    <View style={{ marginLeft: '5%', marginTop: '0%' }}>
                        <Text style={{ fontSize: 13, marginTop: 0, color: '#000', fontWeight: 'bold' }}>Ben Parker</Text>
                        <Text style={{ fontSize: 13, marginTop: 5, color: '#ccc', }}>New Yark, United State</Text>
                        <Text style={{ fontSize: 13, marginTop: 10, color: '#000', fontWeight: 'bold' }}>Ben Parker</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View style={{ marginLeft: 0 }}>
                                <AntDesign
                                    name='calendar'
                                    type='font-awesome'
                                    color='#ccc'
                                    size={24}
                                    containerStyle={{ width: width(10) }} />
                            </View>
                            <Text style={{ marginLeft: 10, color: '#ccc' }}>5 Aug</Text>
                        </View>
                    </View>
                </View>
                <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginBottom: 20, marginHorizontal: 20, marginTop: 20 }} ></View>
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
    firstInput: {
        width: width(43),
        height: height(8),
        borderRadius: 3,
        marginTop: 5,
        marginLeft: 20,
        marginRight: -10,
        backgroundColor: '#fff',
        backgroundColor: '#f0f0f0',
    },
    input: {
        fontSize: 15,
        marginLeft: 20,
        width: '100%',
        marginRight: -80
    },
    outerViewSend: {
        flexDirection: 'row', 
        width: WIDTH - 40,
        backgroundColor: '#26ae61',
        height: 50,
        marginLeft: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    buttonContainer: {
        alignItems: 'center',
        marginLeft: 20,
    },
    buttonText: {

        fontSize: 20,
        color: '#fff',
    },
});