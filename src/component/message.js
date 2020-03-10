import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { AntDesign, Feather, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window');
import { DrawerActions } from 'react-navigation-drawer';

export default class message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: true
        };
    }
    render() {
        return (
            <View style={styles.container} >
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <View style={{ height: '10%', backgroundColor: '#f0f0f0', }}>
                    <View style={{ marginTop: 18, flexDirection: 'row' }}>
                        <View style={{ marginLeft: 20 }}>
                            <AntDesign name='arrowleft' color='#26ae61' size={26}
                                onPress={
                                    () => this.props.navigation.navigate('myProfile')
                                } />
                        </View>
                        <View style={{ marginTop: 0, }}>
                            <Text style={{ fontSize: 20, marginLeft: 100, fontWeight: 'bold', color: '#26ae61' }}>Message</Text>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.messageView}>
                        <Image source={require('./../image/user1.png')} style={{ width: width(20), height: width(20), }}></Image>
                        <View style={styles.mainTextView}>
                            <View style={styles.nameView}>
                                <Text style={styles.headerTextName}>Ben Parker</Text>
                                <Text style={styles.headerTextCity}>1 hr ago</Text>
                            </View>
                            <Text style={styles.headerTextCity}>Lorem ipsum dolor sit consectetur</Text>
                            <Text style={styles.headerTextCity}>adipiscing elit</Text>
                        </View>
                    </View>
                    <View style={styles.borderBottom} ></View>
                    <View style={styles.messageView1}>
                        <Image source={require('./../image/user1.png')} style={{ width: width(20), height: width(20), }}></Image>
                        <View style={styles.mainTextView}>
                            <View style={styles.nameView}>
                                <Text style={styles.headerTextName}>Ben Parker</Text>
                                <Text style={styles.headerTextCity}>1 hr ago</Text>
                            </View>
                            <Text style={styles.headerTextCity}>Lorem ipsum dolor sit consectetur</Text>
                            <Text style={styles.headerTextCity}>adipiscing elit</Text>
                        </View>
                    </View>
                    <View style={styles.borderBottom} ></View>
                    <View style={styles.messageView1}>
                        <Image source={require('./../image/user1.png')} style={{ width: width(20), height: width(20), }}></Image>
                        <View style={styles.mainTextView}>
                            <View style={styles.nameView}>
                                <Text style={styles.headerTextName}>Ben Parker</Text>
                                <Text style={styles.headerTextCity}>1 hr ago</Text>
                            </View>
                            <Text style={styles.headerTextCity}>Lorem ipsum dolor sit consectetur</Text>
                            <Text style={styles.headerTextCity}>adipiscing elit</Text>
                        </View>
                    </View>
                    <View style={styles.borderBottom} ></View>
                    <View style={styles.messageView1}>
                        <Image source={require('./../image/user1.png')} style={{ width: width(20), height: width(20), }}></Image>
                        <View style={styles.mainTextView}>
                            <View style={styles.nameView}>
                                <Text style={styles.headerTextName}>Ben Parker</Text>
                                <Text style={styles.headerTextCity}>1 hr ago</Text>
                            </View>
                            <Text style={styles.headerTextCity}>Lorem ipsum dolor sit consectetur</Text>
                            <Text style={styles.headerTextCity}>adipiscing elit</Text>
                        </View>
                    </View>
                    <View style={styles.borderBottom} ></View>
                    <View style={styles.messageView1}>
                        <Image source={require('./../image/user1.png')} style={{ width: width(20), height: width(20), }}></Image>
                        <View style={styles.mainTextView}>
                            <View style={styles.nameView}>
                                <Text style={styles.headerTextName}>Ben Parker</Text>
                                <Text style={styles.headerTextCity}>1 hr ago</Text>
                            </View>
                            <Text style={styles.headerTextCity}>Lorem ipsum dolor sit consectetur</Text>
                            <Text style={styles.headerTextCity}>adipiscing elit</Text>
                        </View>
                    </View>
                    <View style={styles.borderBottom} ></View>
                    <View style={styles.messageView1}>
                        <Image source={require('./../image/user1.png')} style={{ width: width(20), height: width(20), }}></Image>
                        <View style={styles.mainTextView}>
                            <View style={styles.nameView}>
                                <Text style={styles.headerTextName}>Ben Parker</Text>
                                <Text style={styles.headerTextCity}>1 hr ago</Text>
                            </View>
                            <Text style={styles.headerTextCity}>Lorem ipsum dolor sit consectetur</Text>
                            <Text style={styles.headerTextCity}>adipiscing elit</Text>
                        </View>
                    </View>
                    <View style={styles.borderBottom} ></View>
                    <View style={styles.messageView1}>
                        <Image source={require('./../image/user1.png')} style={{ width: width(20), height: width(20), }}></Image>
                        <View style={styles.mainTextView}>
                            <View style={styles.nameView}>
                                <Text style={styles.headerTextName}>Ben Parker</Text>
                                <Text style={styles.headerTextCity}>1 hr ago</Text>
                            </View>
                            <Text style={styles.headerTextCity}>Lorem ipsum dolor sit consectetur</Text>
                            <Text style={styles.headerTextCity}>adipiscing elit</Text>
                        </View>
                    </View>
                    <View style={styles.borderBottom} ></View>
                    <View style={styles.messageView1}>
                        <Image source={require('./../image/user1.png')} style={{ width: width(20), height: width(20), }}></Image>
                        <View style={styles.mainTextView}>
                            <View style={styles.nameView}>
                                <Text style={styles.headerTextName}>Ben Parker</Text>
                                <Text style={styles.headerTextCity}>1 hr ago</Text>
                            </View>
                            <Text style={styles.headerTextCity}>Lorem ipsum dolor sit consectetur</Text>
                            <Text style={styles.headerTextCity}>adipiscing elit</Text>
                        </View>
                    </View>
                    <View style={styles.borderBottom} ></View>
                    <View style={styles.messageView1}>
                        <Image source={require('./../image/user1.png')} style={{ width: width(20), height: width(20), }}></Image>
                        <View style={styles.mainTextView}>
                            <View style={styles.nameView}>
                                <Text style={styles.headerTextName}>Ben Parker</Text>
                                <Text style={styles.headerTextCity}>1 hr ago</Text>
                            </View>
                            <Text style={styles.headerTextCity}>Lorem ipsum dolor sit consectetur</Text>
                            <Text style={styles.headerTextCity}>adipiscing elit</Text>
                        </View>
                    </View>
                    <View style={styles.borderBottom} ></View>
                    <View style={styles.messageView1}>
                        <Image source={require('./../image/user1.png')} style={{ width: width(20), height: width(20), }}></Image>
                        <View style={styles.mainTextView}>
                            <View style={styles.nameView}>
                                <Text style={styles.headerTextName}>Ben Parker</Text>
                                <Text style={styles.headerTextCity}>1 hr ago</Text>
                            </View>
                            <Text style={styles.headerTextCity}>Lorem ipsum dolor sit consectetur</Text>
                            <Text style={styles.headerTextCity}>adipiscing elit</Text>
                        </View>
                    </View>
                    <View style={styles.borderBottom} ></View>
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
    featuredAds: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: WIDTH - 40,
        marginLeft: 20
    },
    featuredTextView: {
        marginLeft: 5,
        marginTop: 1,
        justifyContent: 'center'
    },
    featuredText: {
        color: '#000',
        fontSize: 13,
        fontWeight: 'bold'
    },
    headerTextName: {
        fontSize: 13,
        marginTop: 0,
        color: '#000',
        fontWeight: 'bold'
    },
    headerTextCity: {
        fontSize: 13,
        marginTop: 0,
        color: '#ccc',
    },
    nameView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    messageView: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 15
    },
    messageView1: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 0
    },
    mainTextView: {
        marginLeft: '5%',
        marginTop: '5%'
    },
    borderBottom: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 10,
        marginTop: 10
    }
});