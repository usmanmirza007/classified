import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, Ionicons } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window');

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: true
    };
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={{ backgroundColor: '#000', height: '4%' }}></View>
        <ScrollView>
          <View style={{ alignItems: 'center', marginTop: 30 }}>
            <Image source={require('./../image/logo2.png')} style={{ width: 150, height: 150 }} resizeMode='stretch' />
          </View>
          <View style={{ marginTop: 0, marginLeft: 20 }}>
            <Text style={{ fontSize: 25, }}>Sign Up</Text>
          </View>
          <View style={styles.firstInput}>
            <View style={{ marginTop: 13, }}>
              <Ionicons
                name='md-person'
                type='font-awesome'

                color='#26ae61'
                size={22}
                containerStyle={{ width: width(10) }}
              />
            </View>
            <TextInput
              style={[styles.input, { marginBottom: -5, }]}
              placeholder={'Enter your full name'}

            />
          </View>
          <View style={styles.firstInput}>
            <View style={{ marginTop: 13, }}>
              <Ionicons
                name='md-mail'
                type='font-awesome'

                color='#26ae61'
                size={22}
                containerStyle={{ width: width(10) }}
              />
            </View>
            <TextInput
              style={[styles.input, { marginBottom: -5, }]}
              placeholder={'Enter your email '}

            />
          </View>
          <View style={styles.firstInput}>
            <View style={{ marginTop: 13, }}>
              <Ionicons
                name='md-lock'
                type='font-awesome'
                color='#26ae61'
                size={22}
                containerStyle={{ width: width(10) }}
              />
            </View>
            <TextInput
              style={[styles.input, { marginBottom: -5, }]}
              placeholder={'Enter your password'}
              keyboardType={"numeric"}
              secureTextEntry={true}
              maxLength={13}

            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={
                () => this.props.navigation.navigate('SignIn')

              }
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View >


        </ScrollView>
      </KeyboardAvoidingView>
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
  input: {
    width: WIDTH - 55,
    height: 50,
    padding: 10,
    marginBottom: 10,

  },
  button: {

  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    height: 50,
    fontSize: 20,
    color: '#fff',
    textAlignVertical: 'center',
    textAlign: 'center',
    width: WIDTH - 50,
    backgroundColor: '#26ae61',
    borderRadius: 5,
  },
  firstInput: {
    flexDirection: 'row',
    marginBottom: 30,
    marginTop: 0,
    borderBottomColor: '#EAEAEAEA',
    borderBottomWidth: 2,
    marginRight: 25,
    marginLeft: 25
  },
});