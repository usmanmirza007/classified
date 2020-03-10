import React from 'react';
import { StyleSheet, Text, View, TextInput, Modal, Image, Picker, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { AntDesign, Entypo, FontAwesome5, FontAwesome, Ionicons } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window');

export default class createAds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            type1: '',
            showMe: false
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <View style={{ height: '10%', backgroundColor: '#f0f0f0', }}>
                    <View style={{ marginTop: 18, flexDirection: 'row', }}>
                        <View style={{ marginLeft: 20 }}>
                            <AntDesign name='arrowleft' color='#26ae61' size={26}
                                onPress={
                                    () => this.props.navigation.navigate('Home')
                                } />
                        </View>
                        <View style={{}}>
                            <Text style={{ fontSize: 20, marginLeft: 90, fontWeight: 'bold', color: '#26ae61' }}>Create Ads</Text>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.step1}>
                        <Text style={styles.step1Text}>STEP 1. Overview</Text>
                    </View>

                    <View style={styles.pickerView}>
                        <Text style={styles.category}>CATEGORY</Text>
                        <Picker
                            style={styles.Picker}
                            selectedValue={this.state.type}
                            onValueChange={(item2) => this.setState({ type: item2 })}>
                            <Picker.Item label='Car' value='Car' />
                            <Picker.Item label='Van' value='Van' />
                            <Picker.Item label='Bus' value='Bus' />
                        </Picker>
                        <View style={styles.bottomBorder}></View>
                    </View>
                    <View style={styles.pickerView2}>
                        <Text style={styles.category}>COMPANY</Text>
                        <Picker
                            style={styles.Picker}
                            selectedValue={this.state.type1}
                            //mode = {'dropdown'}
                            onValueChange={(item2) => this.setState({ type1: item2 })}>
                            <Picker.Item label='Car' value='Car' />
                            <Picker.Item label='Van' value='Van' />
                            <Picker.Item label='Bus' value='Bus' />
                        </Picker>
                        <View style={styles.bottomBorder}></View>
                    </View>
                    <View style={styles.pickerView2}>
                        <Text style={styles.category}>MODAL</Text>
                        <TextInput
                            style={[styles.input, { marginBottom: -5, }]}
                            placeholder={'Enter modal'}

                        />
                        <View style={styles.bottomBorder}></View>
                    </View>
                    <View style={styles.pickerView2}>
                        <Text style={styles.category}>FUEL</Text>
                        <Picker
                            style={styles.Picker}
                            selectedValue={this.state.type1}
                            //mode = {'dropdown'}
                            onValueChange={(item2) => this.setState({ type1: item2 })}>
                            <Picker.Item label='Car' value='Car' />
                            <Picker.Item label='Van' value='Van' />
                            <Picker.Item label='Bus' value='Bus' />
                        </Picker>
                        <View style={styles.bottomBorder}></View>
                    </View>
                    <View style={styles.pickerView2}>
                        <Text style={styles.category}>YEAR</Text>
                        <Picker
                            style={styles.Picker}
                            selectedValue={this.state.type1}
                            //mode = {'dropdown'}
                            onValueChange={(item2) => this.setState({ type1: item2 })}>
                            <Picker.Item label='Car' value='Car' />
                            <Picker.Item label='Van' value='Van' />
                            <Picker.Item label='Bus' value='Bus' />
                        </Picker>
                        <View style={styles.bottomBorder}></View>
                    </View>
                    <View style={styles.pickerView2}>
                        <Text style={styles.category}>COLOR</Text>
                        <TextInput
                            style={[styles.input, { marginBottom: -5, }]}
                            placeholder={'Enter color'}

                        />
                        <View style={styles.bottomBorder}></View>
                    </View>
                    <View style={styles.pickerView2}>
                        <Text style={styles.category}>Ads Name</Text>
                        <Picker
                            style={styles.Picker}
                            selectedValue={this.state.type1}
                            //mode = {'dropdown'}
                            onValueChange={(item2) => this.setState({ type1: item2 })}>
                            <Picker.Item label='Car' value='Car' />
                            <Picker.Item label='Van' value='Van' />
                            <Picker.Item label='Bus' value='Bus' />
                        </Picker>
                        <View style={styles.bottomBorder}></View>
                    </View>
                    <View style={styles.step1}>
                        <Text style={styles.step1Text}>STEP 2. Photos</Text>
                    </View>
                    <View style={styles.pickerView2}>
                        <View style={styles.uploadView}>
                            <FontAwesome5 name='upload' color='#26ae61' size={26}
                                onPress={
                                    () => this.props.navigation.navigate('Home')
                                } />
                            <Text style={styles.uploadText}>UPLOAD PHOTOS</Text>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <View style={styles.outerViewPic}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('#', { categoryImage: './../image/1phoneIcon.png', categoryName: 'Phone' }) }}>

                                    <View style={styles.innerCategory}>
                                        <Image source={require('./../image/cars.jpg')} style={styles.categoryImage} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('#', { categoryImage: './../image/2ApplianceIcon.png', categoryName: 'Appliance' }) }}>
                                    <View style={styles.innerCategory}>
                                        <Image source={require('./../image/cars.jpg')} style={styles.categoryImage} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('#', { categoryImage: './../image/3TVMountIcon.png', categoryName: 'TV Mount' }) }}>
                                    <View style={styles.innerCategory}>
                                        <Image source={require('./../image/cars.jpg')} style={styles.categoryImage} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.outerViewPic}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('#', { categoryImage: './../image/1phoneIcon.png', categoryName: 'Phone' }) }}>

                                    <View style={styles.innerCategory}>
                                        <Image source={require('./../image/cars.jpg')} style={styles.categoryImage} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('#', { categoryImage: './../image/2ApplianceIcon.png', categoryName: 'Appliance' }) }}>
                                    <View style={styles.innerCategory}>
                                        <Image source={require('./../image/cars.jpg')} style={styles.categoryImage} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('#', { categoryImage: './../image/3TVMountIcon.png', categoryName: 'TV Mount' }) }}>
                                    <View style={styles.innerCategory}>
                                        <Image source={require('./../image/cars.jpg')} style={styles.categoryImage} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.bottomBorder}></View>
                    </View>
                    <TouchableOpacity onPress = {() => {this.props.navigation.navigate('termAndCondition')}} style = {{marginLeft: 20, marginTop: 10}}>
                        <Text style = {{fontSize: 15,textDecorationLine: 'underline', textDecorationColor: '#000'}}>Term and condition</Text>
                    </TouchableOpacity>
                    <View style={styles.offerRide}>
                        <TouchableOpacity onPress={
                            () => this.setState({ showMe: false })}
                            style={styles.buttonContainer}>
                            <AntDesign style={{ marginTop: 10, marginRight: 10 }} name='check' color='#fff' size={26} />
                            <Text style={styles.buttonText}>Send</Text>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={this.state.showMe}
                                onRequestClose={() => this.setState({ showMe: false })}>
                                <View style={{ backgroundColor: '#f0f0f0', height: '90%', marginHorizontal: 20, marginVertical: 30 }}>
                                    <Text>•	All HPO vfjhfjhfj</Text>
                                </View>
                            </Modal>

                        </TouchableOpacity>
                    </View> 
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
    step1: {
        height: 60,
        borderLeftWidth: 5,
        borderLeftColor: '#ccc',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        marginTop: 20,
        marginHorizontal: 20
    },
    step1Text: {
        marginLeft: 20,
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold'
    },
    pickerView: {
        marginHorizontal: 20,
        borderLeftColor: '#f0f0f0',
        borderLeftWidth: 5,
        marginTop: 20
    },
    pickerView2: {
        marginHorizontal: 20,
        borderLeftColor: '#f0f0f0',
        borderLeftWidth: 5,
        marginTop: 10
    },
    category: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 20,
        color: '#ccc',
        marginTop: 10
    },
    Picker: {
        marginLeft: 20,

    },
    bottomBorder: {
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: 2,
        marginLeft: 20
    },
    input: {
        width: WIDTH - 55,
        height: 50,
        padding: 10,
        marginLeft: 15,
        marginBottom: 10,

    },
    uploadView: {
        borderColor: '#f0f0f0',
        borderWidth: 2,
        marginTop: 10,
        marginLeft: 20,
        flexDirection: 'row',
        height: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    uploadText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 10
    },
    outerViewPic: {
        flexDirection: 'row',
        marginLeft: 20
    },
    innerCategory: {
        flexDirection: 'column',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderEndWidth: 1,
        borderEndColor: '#ccc',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryImage: {
        width: 97,
        height: 98
    },
    buttonContainer: {
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
        width: WIDTH - 220,
        backgroundColor: '#26ae61',
        flexDirection: 'row',
        marginLeft: 200
    },
    buttonText: {
        height: 50,
        fontSize: 20,
        color: '#fff',
        textAlignVertical: 'center',

        borderRadius: 5,
    },
});