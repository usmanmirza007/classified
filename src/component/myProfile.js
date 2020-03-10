import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { AntDesign, Feather, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window');
import { DrawerActions } from 'react-navigation-drawer';

export default class myProfile extends React.Component {
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
                    <View style={{ marginTop: 18, alignItems: 'flex-start' }}>
                        <View style={{ marginLeft: 20 }}>
                            <Icon name='menu' color='#26ae61' size={26}
                                onPress={
                                    () => this.props.navigation.dispatch(DrawerActions.openDrawer())
                                } />
                        </View>
                    </View>
                </View>
                <Image source={require('./../image/menu1.png')} style={{ width: '100%', height: '55%', }} />
                <View style={{ position: 'absolute' }}>
                    <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 110 }}>
                        <Image source={require('./../image/user1.png')} style={{ width: width(20), height: width(20), }}></Image>

                        <View style={{ marginLeft: '5%', marginTop: '5%' }}>
                            <Text style={styles.headerTextName}>Ben Parker</Text>
                            <Text style={styles.headerTextCity}>New Yark, United State</Text>
                        </View>
                    </View>
                    <View style={styles.categoryContainer}>
                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ads', { categoryImage: './../image/1phoneIcon.png', categoryName: 'Phone' }) }}>

                                <View style={styles.innerCategory}>
                                    <Image source={require('./../image/1phoneIcon.png')} style={styles.categoryImage} />
                                    <Text style={styles.categoryText}>My Ads</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('message', { categoryImage: './../image/2ApplianceIcon.png', categoryName: 'Appliance' }) }}>
                                <View style={styles.innerCategory}>
                                    <Image source={require('./../image/1phoneIcon.png')} style={styles.categoryImage} />
                                    <Text style={styles.categoryText}>Messages</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('manageProfile', { categoryImage: './../image/3TVMountIcon.png', categoryName: 'TV Mount' }) }}>
                                <View style={styles.innerCategory}>
                                    <Image source={require('./../image/1phoneIcon.png')} style={styles.categoryImage} />
                                    <Text style={styles.categoryText}>Profile</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ads', { categoryImage: './../image/1phoneIcon.png', categoryName: 'Phone' }) }}>

                                <View style={styles.innerCategory}>
                                    <Image source={require('./../image/1phoneIcon.png')} style={styles.categoryImage} />
                                    <Text style={styles.categoryText}>Bookmarks</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ads', { categoryImage: './../image/2ApplianceIcon.png', categoryName: 'Appliance' }) }}>
                                <View style={styles.innerCategory}>
                                    <Image source={require('./../image/1phoneIcon.png')} style={styles.categoryImage} />
                                    <Text style={styles.categoryText}>Settings</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ backgroundColor: '#fff', height: 100, width: 100 }}>

                            </View>
                        </View>
                    </View>
                </View>
                <ScrollView>

                    <View style={styles.featuredAds}>
                        <View style={{ flexDirection: 'row', }}>
                            <Ionicons
                                name='md-mail'
                                type='font-awesome'
                                color='#26ae61'
                                size={24}
                                containerStyle={{ width: width(10) }} />
                            <View style={styles.featuredTextView}>
                                <Text style={styles.featuredText}>RECENT MESSAGES</Text>
                            </View>
                        </View>
                        <View>
                            <SimpleLineIcons
                                name='options'
                                type='font-awesome'
                                color='#000'
                                size={24}
                                containerStyle={{ width: width(10) }} />
                        </View>
                    </View>
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
    categoryContainer: {
        marginLeft: 30,
        marginTop: 20
    },
    innerCategory: {
        flexDirection: 'column',
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: 1,
        borderEndWidth: 1,
        borderEndColor: '#f0f0f0',
        backgroundColor: '#fff',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryImage: {
        width: 30,
        height: 30
    },
    categoryText: {
        color: 'black',
        fontSize: 13
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
        marginTop: 20
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
    borderBottom:{ 
        borderBottomColor: '#ccc',
         borderBottomWidth: 1,
          marginBottom: 20, 
          marginTop: 20
         }
});