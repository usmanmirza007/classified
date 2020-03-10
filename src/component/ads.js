import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window');

export default class ads extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: true
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <View style={{ height: '10%', backgroundColor: '#fff', }}>
                    <View style={{ marginTop: 18, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ marginLeft: -30 }}>
                            <AntDesign name='arrowleft' color='#26ae61' size={26}
                                onPress={
                                    () => this.props.navigation.navigate('Home')
                                } />
                        </View>
                        <View style={{ marginTop: 0, }}>
                            <Text style={{ fontSize: 20, marginLeft: 0, fontWeight: 'bold', color: '#26ae61' }}>Ads</Text>
                        </View>
                        <View style={{ marginRight: -30 }}>
                            <Ionicons name='md-add' color='#26ae61' size={26}
                                onPress={
                                    () => this.props.navigation.navigate('createAds')
                                } />
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <ImageBackground source={require('./../image/homeBg5.jpg')} style={styles.BGImage} resizeMode='stretch'>
                        <View style={styles.outerAdsView}>
                            <Image source={require('./../image/cars.jpg')} style={styles.adsImage} />
                            <View style={styles.innerAdsView}>
                                <View style={styles.outerAdsText}>
                                    <Text style={{ color: '#ccc' }}>Automobile/car</Text>
                                    <View style={styles.adsNameView}>
                                        <Text style={styles.AdsName}>Audi R8</Text>
                                        <Text style={styles.AdsPrice}>$650</Text>
                                    </View>
                                    <Text style={styles.adsCity}>New York US</Text>
                                    <View style={styles.adsIconView}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <FontAwesome
                                                // reverse
                                                name='edit'
                                                type='font-awesome'
                                                color='#26ae61'
                                                size={22}
                                                style={{ marginHorizontal: 0 }}
                                            />
                                            <AntDesign
                                                // reverse
                                                name='delete'
                                                type='font-awesome'
                                                color='#26ae61'
                                                size={22}
                                                style={{ marginHorizontal: 10 }}
                                            />
                                        </View>
                                        <View style={{ marginTop: -10 }}>
                                            <Text style={styles.postText}>Posted on:</Text>
                                            <Text style={styles.date}>15 Aug 2018</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.outerAdsView}>
                            <Image source={require('./../image/cars.jpg')} style={styles.adsImage} />
                            <View style={styles.innerAdsView}>
                                <View style={styles.outerAdsText}>
                                    <Text style={{ color: '#ccc' }}>Automobile/car</Text>
                                    <View style={styles.adsNameView}>
                                        <Text style={styles.AdsName}>Audi R8</Text>
                                        <Text style={styles.AdsPrice}>$650</Text>
                                    </View>
                                    <Text style={styles.adsCity}>New York US</Text>
                                    <View style={styles.adsIconView}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <FontAwesome
                                                // reverse
                                                name='edit'
                                                type='font-awesome'
                                                color='#26ae61'
                                                size={22}
                                                style={{ marginHorizontal: 0 }}
                                            />
                                            <AntDesign
                                                // reverse
                                                name='delete'
                                                type='font-awesome'
                                                color='#26ae61'
                                                size={22}
                                                style={{ marginHorizontal: 10 }}
                                            />
                                        </View>
                                        <View style={{ marginTop: -10 }}>
                                            <Text style={styles.postText}>Posted on:</Text>
                                            <Text style={styles.date}>15 Aug 2018</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </ImageBackground>
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
    BGImage: { width: '100%', height: '100%' },
    outerAdsView: {
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 10,
        width: WIDTH - 40
    },
    adsImage: {
        width: WIDTH - 40, height: 200
    },
    innerAdsView: {
        backgroundColor: '#fff',
    },
    outerAdsText: {
        marginTop: 10,
        marginHorizontal: 15
    },
    adsNameView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    adsName: {
        marginTop: 10,
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold'
    },
    adsPrice: {
        marginTop: 10,
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold'
    },
    adsCity: {
        marginTop: 0,
        color: '#ccc'
    },
    adsIconView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 20
    },
    postText: {
        alignSelf: 'flex-end',
        marginTop: 0,
        color: '#ccc'
    },
    date: {
        marginTop: 0,
        color: '#ccc'
    }
});