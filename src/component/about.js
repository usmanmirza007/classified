import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window');
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class about extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.container} >
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <View style={{ height: '10%', backgroundColor: '#fff', flexDirection: 'row', }}>
                    <View style={{ marginLeft: wp('8%'), marginTop: 15 }}>
                        <AntDesign name='arrowleft' color='#26ae61' size={26}
                            onPress={
                                () => this.props.navigation.navigate('Home')
                            } />
                    </View>
                    <View style={{ marginTop: 15, marginLeft: wp('25%') }}>
                        <Text style={{ fontSize: 20, marginLeft: 0, fontWeight: 'bold', color: '#26ae61' }}>About Us</Text>
                    </View>
                </View>
                <ImageBackground source={require('./../image/homeBg5.jpg')} style={{ width: wp('100%'), height: hp('100%') }} resizeMode='stretch'>
                   <View style = {styles.aboutView}>
                        <Text style = {styles.text}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in 
                        laying out print, graphic or web designs. The passage is attributed to an unknown 
                        typesetter </Text>
                         <Text  style = {styles.text1}>The passage is attributed to an unknown 
                         typesetter in the 15th century who is thought to have scrambled parts of 
                         Cicero De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                   </View>
                </ImageBackground>
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
    aboutView:{
        backgroundColor: '#fff',
        width: wp('90%'),
        height: hp('40%'),
        marginHorizontal: wp('5%'),
        marginVertical: hp('22%'),
        borderRadius: 5
    },
    text:{
        padding: wp('5%'),
        fontSize: 15,
        color: '#000'
    },
    text1:{
        marginHorizontal: wp('5%'),
        fontSize: 15,
        color: '#000'
    }
});