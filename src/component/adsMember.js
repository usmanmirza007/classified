import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, Ionicons } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window');
import Member_Tab from './member_Tab';
import Message_Tab from './message_Tab';
import Contact_Tab from './contact_Tab';


export default class adsMember extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            member: true,
            message: false,
            contact: false,
        };
    }

    ScreenView() {
        if (this.state.member) {
            return (
                <Member_Tab navigation={this.props.navigation} />
            )
        }
        else if(this.state.message) {
            return (
                <Message_Tab navigation={this.props.navigation} />
            )
        }
        else {
            return (
                <Contact_Tab navigation={this.props.navigation} />
            )
        }
    }
    render() {
        return (
            <View style={styles.container} >
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <Image source={require('./../image/sideMenu.png')} style={{ width: '100%', height: '30%', }} />
                <View style={{ marginTop: 30, position: 'absolute' }}>
                    <View style={{ marginLeft: 20 }}>
                        <AntDesign name='arrowleft' color='#26ae61' size={26}
                            onPress={
                                () => this.props.navigation.navigate('Home')
                            } />
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 40 }}>
                        <Image source={require('./../image/user1.png')} style={{ width: width(20), height: width(20), }}></Image>

                        <View style={{ marginLeft: '5%', marginTop: '5%' }}>
                            <Text style={styles.headerTextName}>Ben Parker</Text>
                            <Text style={styles.headerTextCity}>New Yark, United State</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row',backgroundColor: '#f0f0f0', justifyContent: 'center' }}>
                    <View>
                        <TouchableOpacity
                            onPress={() => this.setState({ member: true, message: false, contact: false })}
                            style={{
                                padding: 15,
                                alignItems: 'center',
                                width: WIDTH - 250,
                                borderBottomColor: this.state.member ? '#ea6311' : '#fff',
                                borderBottomWidth: this.state.member ? 4 : 0,
                            }}>
                            <Text style={styles.loginText}>Member Ads</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => this.setState({ member: false, message: true, contact: false })}
                            style={{
                                padding: 15,
                                alignItems: 'center',
                                width: WIDTH - 250,
                                borderBottomColor: this.state.message ? '#ea6311' : '#fff',
                                borderBottomWidth: this.state.message ? 4 : 0,
                            }}>
                            <Text style={styles.loginText}>Message</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => this.setState({ member: false, message: false, contact: true })}
                            style={{
                                padding: 15,
                                alignItems: 'center',
                                width: WIDTH - 250,
                                borderBottomColor: this.state.contact ? '#ea6311' : '#fff',
                                borderBottomWidth: this.state.contact ? 4 : 0,
                            }}>
                            <Text style={styles.loginText}>Contact</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {this.ScreenView()}
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
headerTextName:{ fontSize: 13, marginTop: 0, color: '#000', fontWeight: 'bold'
 },
 headerTextCity:{ fontSize: 13, marginTop: 0, color: '#ccc', }
});