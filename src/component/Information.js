import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, Ionicons } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window');

export default class Information extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: true
    };
  }
  render() {
    return (
      <View style={styles.container} >
        <Text>Info</Text>
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

});