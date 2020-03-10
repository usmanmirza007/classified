import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { AntDesign, MaterialIcons, Feather, Entypo, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window');
import { DrawerActions } from 'react-navigation-drawer';

export default class detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.container} >
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <Image source={require('./../image/cars.jpg')} style={{ width: '100%', height: '60%', }} />
                <View style={{ marginTop: 30, position: 'absolute' }}>
                    <View style={{ marginLeft: 20 }}>
                        <AntDesign name='arrowleft' color='#26ae61' size={26}
                            onPress={
                                () => this.props.navigation.navigate('myProfile')
                            } />
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.mainTextView}>
                        <Text style={styles.name}>2020, Audi  sedan</Text>
                        <Entypo
                            name='star'
                            color='#26ae61'
                            size={26}
                        />
                    </View>
                    <Text style={styles.price}>$ 480000</Text>
                    <View style={styles.locationView}>
                        <MaterialIcons
                            name='location-on'
                            color='#26ae61'
                            size={26}
                            style={{ marginRight: 10 }}
                        />
                        <Text style={styles.city}>United State</Text>
                    </View>
                    <View style={styles.border}></View>
                    <View style={styles.detailView}>
                        <Text style={styles.detailText}>Detail</Text>
                        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                            <Text style={styles.contact1}>Name</Text>
                            <Text>Audi</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.contact}>Contact No.</Text>
                            <Text>+92 346 456 2365</Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={ () => this.props.navigation.navigate('#') }>
                            <Text style={styles.buttonText}>Chat</Text>
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
    mainTextView: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        marginTop: 20
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000'
    },
    price: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 20,
        marginTop: 10
    },
    locationView: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20
    },
    city: {
        fontSize: 15,
        marginTop: 5,
        color: '#000'
    },
    border: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        marginTop: 20,
    },
    contact1: {
        fontSize: 15,
        marginRight: 60
    },
    contact: {
        fontSize: 15,
        marginRight: 20
    },
    detailView: {
        marginHorizontal: 20,
        marginTop: 20
    },
    detailText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
      },
      buttonText: {
        height: 50,
        fontSize: 20,
        color: '#fff',
        textAlignVertical: 'center',
        textAlign: 'center',
        width: WIDTH - 40,
        backgroundColor: '#26ae61',
        borderRadius: 5,
      },
});