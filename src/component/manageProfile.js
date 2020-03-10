import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, Ionicons } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window');
import { Collapse,AccordionList, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Thumbnail, List, ListItem, Separator } from 'native-base';

export default class manageProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    render() {
        return (
            <View style={styles.container} >
                <KeyboardAvoidingView style={styles.container} behavior="padding">
                    <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                    <Image source={require('./../image/sideMenu.png')} style={{ width: '100%', height: '40%', }} />
                    <View style={{ marginTop: 30, position: 'absolute' }}>
                        <View style={{ marginLeft: 20 }}>
                            <AntDesign name='arrowleft' color='#26ae61' size={26}
                                onPress={
                                    () => this.props.navigation.navigate('Home')
                                } />
                        </View>
                        <View style={{ alignItems: 'center', marginLeft: 100, marginTop: 40 }}>
                            <Image source={require('./../image/user1.png')} style={{ width: width(20), height: width(20), }}></Image>
                            <View style={{ alignItems: 'center', marginLeft: '5%', marginTop: '5%' }}>
                                <Text style={styles.headerTextName}>Ben Parker</Text>
                                <Text style={styles.headerTextCity}>New Yark, United State</Text>
                            </View>
                        </View>
                    </View>
                    <ScrollView>
                            <Collapse style={{ marginHorizontal: 18, marginTop: 20, marginBottom: 3 }}>
                                <CollapseHeader style={{ flexDirection: 'row', alignItems: 'center', width: width(90), padding: 10, backgroundColor: '#f0f0f0' }}>
                                    <View style={{ marginLeft: 20, alignItems: 'center' }}>
                                        <Text>Basic</Text>
                                    </View>
                                    <View style={{ marginLeft: 210 }}>
                                        <Ionicons name='ios-arrow-down' color='#26ae61' size={26}
                                            onPress={
                                                () => this.props.navigation.navigate('#')
                                            } />
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    <View style={styles.OuterInput}>
                                        <View style={styles.firstInput}>
                                            <TextInput
                                                numberOfLines={6}
                                                placeholderTextColor='#9e9e9e'
                                                style={styles.input}
                                                placeholder={'First Name'}
                                            />
                                        </View>
                                        <View style={styles.firstInput}>
                                            <TextInput
                                                numberOfLines={6}
                                                placeholderTextColor='#9e9e9e'
                                                style={styles.input}
                                                placeholder={'Second Name'}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.emailInput}>
                                        <TextInput
                                            numberOfLines={6}
                                            placeholderTextColor='#9e9e9e'
                                            style={styles.input}
                                            placeholder={'Enter Email'}
                                        />
                                    </View>
                                </CollapseBody>
                            </Collapse>
                            <Collapse style={{ marginHorizontal: 18, marginTop: 0, marginBottom: 3 }}>
                                <CollapseHeader style={{ flexDirection: 'row', alignItems: 'center', width: width(90), padding: 10, backgroundColor: '#f0f0f0' }}>
                                    <View style={{ marginLeft: 20, alignItems: 'center' }}>
                                        <Text>Address Information</Text>
                                    </View>
                                    <View style={{ marginLeft: 117 }}>
                                        <Ionicons name='ios-arrow-down' color='#26ae61' size={26}
                                            onPress={
                                                () => this.props.navigation.navigate('#')
                                            } />
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    <View style={styles.emailInput}>
                                        <TextInput
                                            numberOfLines={6}
                                            placeholderTextColor='#9e9e9e'
                                            style={styles.input}
                                            placeholder={'Address'}
                                        />
                                    </View>
                                    <View style={styles.OuterInput}>
                                        <View style={styles.firstInput}>
                                            <TextInput
                                                numberOfLines={6}
                                                placeholderTextColor='#9e9e9e'
                                                style={styles.input}
                                                placeholder={'City'}
                                            />
                                        </View>
                                        <View style={styles.firstInput}>
                                            <TextInput
                                                numberOfLines={6}
                                                placeholderTextColor='#9e9e9e'
                                                style={styles.input}
                                                placeholder={'State'}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.emailInput}>
                                        <TextInput
                                            numberOfLines={6}
                                            placeholderTextColor='#9e9e9e'
                                            style={styles.input}
                                            placeholder={'Country'}
                                        />
                                    </View>
                                    <View style={styles.emailInput}>
                                        <TextInput
                                            numberOfLines={6}
                                            placeholderTextColor='#9e9e9e'
                                            style={styles.input}
                                            placeholder={'PostCode'}
                                        />
                                    </View>
                                </CollapseBody>
                            </Collapse>
                            <Collapse style={{ marginHorizontal: 18, marginTop: 0, marginBottom: 3 }}>
                                <CollapseHeader style={{ flexDirection: 'row', alignItems: 'center', width: width(90), padding: 10, backgroundColor: '#f0f0f0' }}>
                                    <View style={{ marginLeft: 20, alignItems: 'center' }}>
                                        <Text>Contact Information</Text>
                                    </View>
                                    <View style={{ marginLeft: 120 }}>
                                        <Ionicons name='ios-arrow-down' color='#26ae61' size={26}
                                            onPress={
                                                () => this.props.navigation.navigate('#')
                                            } />
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                <View style={styles.emailInput}>
                                        <TextInput
                                            numberOfLines={6}
                                            placeholderTextColor='#9e9e9e'
                                            style={styles.input}
                                            placeholder={'Contact No.'}
                                        />
                                    </View>
                                </CollapseBody>
                            </Collapse>
                    </ScrollView>
                </KeyboardAvoidingView>
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
    headerTextName: {
        fontSize: 13,
        marginTop: 0,
        color: '#000',
        fontWeight: 'bold'
    },
    headerTextCity: {
        fontSize: 13,
        marginTop: 0,
        color: '#ccc',
    },
    OuterInput: {
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: -5
    },
    firstInput: {
        width: width(44.5),
        height: height(8),
        marginLeft: 5,
        backgroundColor: '#f0f0f0',
    },
    emailInput: {
        width: width(90),
        height: height(8),
        marginTop: 5,
        backgroundColor: '#f0f0f0',
    },
    input: {
        fontSize: 15,
        marginLeft: 20,
        width: '100%',
    },
});