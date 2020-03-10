import React from 'react';
import { StyleSheet, Modal, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { Entypo ,MaterialIcons} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';


export default class notification extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <MaterialIcons
                name='notifications'
                type='font-awesome'
                style={{ color: tintColor }}
                size={24}
                containerStyle={{ width: width(10) }}
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
               
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
});