import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

export default class splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {

    setTimeout(() => { this.props.navigation.navigate('SignIn') }, 2000);

  }

  render() {
    return (
      <ImageBackground source={require('./../image/splash.jpg')} style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Image source = {require('./../image/logo2.png')} style={{  width: 150, height: 150, alignSelf: 'center'}} resizeMode='stretch' />
      </ImageBackground>
    );
  }
}

