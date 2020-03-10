import React from 'react';
import { StyleSheet, Text, View, TextInput, Image,KeyboardAvoidingView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import {  ScrollView } from 'react-native-gesture-handler';
import ToggleSwitch from 'toggle-switch-react-native';
import Switch from "react-switch";
const {width: WIDTH} = Dimensions.get('window')
export default class Setting extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checked: false
        }
        this.handleChagne = this.handleChagne.bind(this)
      }
      handleChagne(changed){
          this.setState({checked})
      }
    render(){
        return (
            <View style={styles.container}>
            <ImageBackground source = {require('./../image/background.png')} style = {{width: '100%', height: '100%'}} resizeMode= 'stretch'>
                <View style = {{backgroundColor: '#000', height: '4%'}}></View>
                <View style = {{ marginTop: 15, height: '10%', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style = {{marginLeft: 20}}>
                        <Icon  name = 'menu' color = '#FFA726' size = {35} 
                    onPress={
                        () => this.props.navigation.openDrawer()
                      }/>
                    </View>
                    <View style = {{marginTop: 5}}>
                        <Text style = {{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Setting</Text>
                    </View>
                    <View style = {{marginRight: 20, marginTop: 7}}>
                        <Text style = {{fontSize: 20, color: '#fff'}} onPress={()=>{this.props.navigation.navigate('home')}}>Edit</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style = {{flexDirection: 'row', marginBottom: 40}}>
                        <View style={{ justifyContent:'center', alignItems: 'center',}}>
                            <Image source={require('./../image/user1.png')} style={{ marginLeft: 50, width: 50, height: 50}}></Image>
                        </View>
                        <View style = {{justifyContent:'center', alignItems: 'center', marginLeft: 20}}>
                            <Text style = {{fontSize: 20, alignSelf: 'flex-start', fontWeight: 'bold', color: '#fff'}}>Alex Rowe</Text>
                            <Text style = {{ color: '#fff'}}>example@gmail.com</Text>
                        </View>
                        <View>
                        <MaterialIcons name = 'edit' color = '#fff' size = {22} 
                        style = {{marginLeft: 60, marginTop: 10}}
                        onPress={
                            () => this.props.navigation.openDrawer()
                            }/>
                        </View>
                    </View>
                    
                    <View style = {{backgroundColor: '#EAEAEAEA', alignItems: 'center', height: 50, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style = {{marginLeft: 90}}>
                            <Text style = {{fontSize: 18, fontWeight: 'bold'}}>Personal Information</Text>
                        </View>
                        <View style = {{marginRight: 25, }}>
                        <MaterialIcons name = 'edit' color = '#000' size = {22} 
                        style = {{}}
                        onPress={
                            () => this.props.navigation.openDrawer()
                            }/>
                        </View>
                    </View>
                    <View style = {{flexDirection: 'row', padding: 20}}>
                        <View style = {{marginLeft: 8,}}>
                            <Text style = {{fontSize: 18, marginBottom: 10, color: '#fff'}}>Name:</Text>
                            <Text style = {{fontSize: 18, color: '#fff'}}>Number:</Text>
                        </View>
                        <View style = {{marginLeft: 50}}>
                            <Text style = {{fontSize: 18, marginBottom: 10, color: '#fff'}}>Alex Rowe</Text>
                            <Text style = {{fontSize: 18, color: '#fff'}}>+92 236 4569875</Text>
                        </View>
                    </View>
                    <View style = {{backgroundColor: '#EAEAEAEA', alignItems: 'center', height: 50, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style = {{marginLeft: 140}}>
                            <Text style = {{fontSize: 18, fontWeight: 'bold'}}>Password</Text>
                        </View>
                        <View style = {{marginRight: 25, }}>
                        <MaterialIcons name = 'edit' color = '#000' size = {22} 
                        style = {{}}
                        onPress={
                            () => this.props.navigation.openDrawer()
                            }/>
                        </View>
                    </View>
                    <View style = {{ padding: 20}}>
                        <View style = {{marginLeft: 8,flexDirection: 'row',}}>
                            <Text style = {{fontSize: 18, marginBottom: 10, color: '#fff'}}>Pass:</Text>
                            <View style = {{marginLeft: 50, marginLeft: 70}}>
                                <TextInput
                                    style={{ height: 40, color: '#fff' }}
                                    placeholder = "Enter your password"
                                    placeholderTextColor = '#fff'
                                    secureTextEntry = {true}
                                    defaultValue = "10ebjdjsdjkjsjhd"
                                />
                            </View>
                        </View>
                        <View style = {{marginLeft: 8,flexDirection: 'row',}}>
                            <Text style = {{fontSize: 18, marginBottom: 10, color: '#fff'}}>New Pass:</Text>
                            <View style = {{marginLeft: 50, marginLeft: 30}}>
                                <TextInput
                                    style={{ height: 40, color: '#fff', }}
                                    placeholder = "Enter your password"
                                    placeholderTextColor = '#fff'
                                    secureTextEntry = {true}
                                    defaultValue = 'jkshfjksdhfkjshh'
                                />
                            </View>
                        </View>
                    </View>
                    <View style = {{backgroundColor: '#EAEAEAEA', alignItems: 'center', height: 50, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style = {{marginLeft: 150}}>
                            <Text style = {{fontSize: 18, fontWeight: 'bold'}}>Country</Text>
                        </View>
                        <View style = {{marginRight: 25, }}>
                        <MaterialIcons name = 'edit' color = '#000' size = {22} 
                        style = {{}}
                        onPress={
                            () => this.props.navigation.openDrawer()
                            }/>
                        </View>
                    </View>
                    <View style = {{flexDirection: 'row', padding: 20, marginLeft: 8,}}>
                            <Text style = {{fontSize: 18, marginBottom: 10, color: '#fff'}}>Country:</Text>
                            <Text style = {{fontSize: 18, marginLeft: 50, color: '#fff'}}>Spain</Text>
                    </View>
                    <View style = {{backgroundColor: '#EAEAEAEA', alignItems: 'center', height: 50, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style = {{marginLeft: 115}}>
                            <Text style = {{fontSize: 18, fontWeight: 'bold'}}>Account Setting</Text>
                        </View>
                        <View style = {{marginRight: 25, }}>
                        <MaterialIcons name = 'edit' color = '#000' size = {22} 
                        style = {{}}
                        onPress={
                            () => this.props.navigation.openDrawer()
                            }/>
                        </View>
                    </View>
                    <View style = {{ padding: 20}}>
                        <View style = {{marginLeft: 8,flexDirection: 'row',}}>
                        <Text style = {{fontSize: 18, marginBottom: 10, color: '#fff'}}>Send Push Notifications:</Text>
                            <View style = {{marginLeft: 50, marginLeft: 70, marginTop: 5}}>
                                <ToggleSwitch
                                    isOn={false}
                                    onColor="green"
                                    offColor="#F07638"
                                    // label="Example label"
                                    // labelStyle={{ color: "black", fontWeight: "900" }}
                                    size="small"
                                    onToggle={isOn => console.log("changed to : ", isOn)}
                                />
                            </View>
                        </View>
                        <View style = {{marginLeft: 8,flexDirection: 'row',}}>
                            <Text style = {{fontSize: 18, marginBottom: 10, color: '#fff'}}>Send Push Notifications:</Text>
                            <View style = {{marginLeft: 50, marginLeft: 70, marginTop: 5}}>
                                <ToggleSwitch
                                    isOn={false}
                                    onColor="green"
                                    offColor="#F07638"
                                    // label="Example label"
                                    // labelStyle={{ color: "black", fontWeight: "900" }}
                                    size="small"
                                    onToggle={isOn => console.log("changed to : ", isOn)}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
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
});