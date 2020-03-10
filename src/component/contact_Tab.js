import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign,MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window');


export default class contact_Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.container} >
            <ScrollView>
                <View style={styles.outerView}>
                    <View style={styles.IconView}>
                        <MaterialIcons name='location-on' color='#26ae61' size={26}
                            onPress={() => this.props.navigation.navigate('Home')} />
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.IconName}>ADDRESS</Text>
                        <Text style={styles.Address}>3-2277-10, Susan Apartment</Text>
                        <Text style={styles.country}>Liverpool, United Kingdoom</Text>
                    </View>
                </View>
                <View style={styles.border}></View>
                <View style={styles.outerView}>
                    <View style={styles.IconView}>
                        <Ionicons name='ios-call' color='#26ae61' size={26}
                            onPress={() => this.props.navigation.navigate('Home')} />
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.IconName}>PHONE</Text>
                        <Text style={styles.Address}>3-2277-10, Susan Apartment</Text>
                        <Text style={styles.country}>Liverpool, United Kingdoom</Text>
                    </View>
                </View>
                <View style={styles.border}></View>
                <View style={styles.outerView}>
                    <View style={styles.IconView}>
                        <Ionicons name='md-mail' color='#26ae61' size={26}
                            onPress={() => this.props.navigation.navigate('Home')} />
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.IconName}>EMAIL</Text>
                        <Text style={styles.Address}>3-2277-10, Susan Apartment</Text>
                        <Text style={styles.country}>Liverpool, United Kingdoom</Text>
                    </View>
                </View>
                <View style={styles.border}></View>
                <View style={styles.outerView}>
                    <View style={styles.IconView}>
                        <MaterialCommunityIcons name='web' color='#26ae61' size={26}
                            onPress={() => this.props.navigation.navigate('Home')} />
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.IconName}>WEBSITE</Text>
                        <Text style={styles.Address}>3-2277-10, Susan Apartment</Text>
                        <Text style={styles.country}>Liverpool, United Kingdoom</Text>
                    </View>
                </View>
                <View style={styles.border}></View>
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
    outerView: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 20,

    },
    IconView: {
        marginTop: 5,

    },
    textView: {
        marginLeft: 15
    },
    IconName: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5
    },
    Address: {
        fontSize: 15,
        color: '#ccc'
    },
    country: {
        fontSize: 15,
        color: '#ccc'
    },
    border: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginTop: 15,
        marginLeft: 20
    },

});