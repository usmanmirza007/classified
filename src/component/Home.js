import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Image, Modal, KeyboardAvoidingView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign, SimpleLineIcons, MaterialIcons, Feather, Ionicons, Entypo } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
const { width: WIDTH } = Dimensions.get('window')
import { DrawerActions } from 'react-navigation-drawer';
import Enquiry_form_Tab from './enquiry_form';
import Info_Tab from './Information';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      enquiry_form: true,
      info: false,
      showMe: false,
      showMe1: false,
      showMe2: false,
      showMe3: false,
      showMe4: false,
      showMe6: false,
      responseData: [
        { img: require('./../image/cars.jpg') },
      ],
      fbImage2: '',
    }
  }


  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <AntDesign
        name='home'
        type='font-awesome'
        style={{ color: tintColor }}
        size={24}
        containerStyle={{ width: width(10) }}
      />
    )
  }
  renderRow = ({ item }) => {
    // console.log(item.englishName);
    return (
      <View>
        <Text style={{ marginTop: 20, marginLeft: 20, color: '#000', fontWeight: 'bold', marginBottom: 10 }}>Photo Gallery</Text>
        <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 0 }}>
          <TouchableOpacity onPress={() => this.setState({ showMe6: true, fbImage2: item.img })}>
            {item && <Image source={item.img} style={{ width: 100, height: 95, marginRight: 10 }} />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ showMe6: true, fbImage2: item.img })}>
            {item && <Image source={item.img} style={{ width: 100, height: 95, marginRight: 10 }} />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ showMe6: true, fbImage2: item.img })}>
            {item && <Image source={item.img} style={{ width: 100, height: 95, }} />}
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>
          <TouchableOpacity onPress={() => this.setState({ showMe6: true, fbImage2: item.img })}>
            {item && <Image source={item.img} style={{ width: 100, height: 95, marginRight: 10 }} />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ showMe6: true, fbImage2: item.img })}>
            {item && <Image source={item.img} style={{ width: 100, height: 95, marginRight: 10 }} />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ showMe6: true, fbImage2: item.img })}>
            {item && <Image source={item.img} style={{ width: 100, height: 95, }} />}
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>
          <TouchableOpacity onPress={() => this.setState({ showMe6: true, fbImage2: item.img })}>
            {item && <Image source={item.img} style={{ width: 100, height: 95, marginRight: 10 }} />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ showMe6: true, fbImage2: item.img })}>
            {item && <Image source={item.img} style={{ width: 100, height: 95, marginRight: 10 }} />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ showMe6: true, fbImage2: item.img })}>
            {item && <Image source={item.img} style={{ width: 100, height: 95, }} />}
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  ScreenView() {
    if (this.state.enquiry_form) {
      return (
        <Enquiry_form_Tab navigation={this.props.navigation} />
      )
    }
    else {
      return (
        <Info_Tab navigation={this.props.navigation} />
      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#000', height: '4%' }}></View>

        <View style={{ height: '10%', backgroundColor: '#fff', }}>
          <View style={{ marginTop: 18, flexDirection: 'row' }}>
            <View style={{ marginLeft: 20 }}>
              <Icon name='menu' color='#26ae61' size={26}
                onPress={
                  () => this.props.navigation.dispatch(DrawerActions.openDrawer())
                } />
            </View>
            <View style={{ marginTop: 0, }}>
              <Text style={{ fontSize: 20, marginLeft: 100, fontWeight: 'bold', color: '#26ae61' }}>Home</Text>
            </View>
          </View>
        </View>


        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.showMe6}
          onRequestClose={() => this.setState({ showMe6: false })}>
          <View style={{ flex: 1, width: '100%', height: '100%' }}>
            {this.state.fbImage2 && <Image source={this.state.fbImage2} style={{ width: '100%', height: '100%' }} />}
            <View style={{ position: 'absolute', }}>
              <Entypo style={{ color: '#fff', marginLeft: '90%' }} name="cross" size={30}
                onPress={() => this.setState({ showMe6: false })}
              />
            </View>
          </View>
        </Modal>

        <ScrollView>
          <ImageBackground source={require('./../image/homeBg5.jpg')} style={{ width: '100%', height: '100%' }} resizeMode='stretch'>

            <View style={styles.inputContainer}>
              <TextInput
                numberOfLines={6}
                placeholderTextColor='#9e9e9e'
                style={styles.searchInput}
                placeholder={'Search'}
                containerStyle={{ marginVertical: '5%' }}
              />
              <AntDesign
                // reverse
                name='search1'
                type='font-awesome'
                color='#9e9e9e'
                size={22}

                style={{ marginHorizontal: 10 }}
              />
            </View>
            <View style={styles.categoryContainer}>
            <ScrollView horizontal >
              <View style={{ flexDirection: 'row', }}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ads', { categoryImage: './../image/1phoneIcon.png', categoryName: 'Phone' }) }}>

                  <View style={styles.innerCategory}>
                    <Image source={require('./../image/1phoneIcon.png')} style={styles.categoryImage} />
                    <Text style={styles.categoryText}>Real Estate</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ads', { categoryImage: './../image/2ApplianceIcon.png', categoryName: 'Appliance' }) }}>
                  <View style={styles.innerCategory}>
                    <Image source={require('./../image/1phoneIcon.png')} style={styles.categoryImage} />
                    <Text style={styles.categoryText}>Cars</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ads', { categoryImage: './../image/3TVMountIcon.png', categoryName: 'TV Mount' }) }}>
                  <View style={styles.innerCategory}>
                    <Image source={require('./../image/1phoneIcon.png')} style={styles.categoryImage} />
                    <Text style={styles.categoryText}>Electronics</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ads', { categoryImage: './../image/1phoneIcon.png', categoryName: 'Phone' }) }}>

                  <View style={styles.innerCategory}>
                    <Image source={require('./../image/1phoneIcon.png')} style={styles.categoryImage} />
                    <Text style={styles.categoryText}>Fashion</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity  style = {{}} onPress={() => { this.props.navigation.navigate('ads', { categoryImage: './../image/2ApplianceIcon.png', categoryName: 'Appliance' }) }}>
                  <View style={styles.innerCategory}>
                    <Image source={require('./../image/1phoneIcon.png')} style={styles.categoryImage} />
                    <Text style={styles.categoryText}>Books</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ads', { categoryImage: './../image/3TVMountIcon.png', categoryName: 'TV Mount' }) }}>
                  <View style={styles.innerCategory}>
                    <Image source={require('./../image/1phoneIcon.png')} style={styles.categoryImage} />
                    <Text style={styles.categoryText}>Household</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ads', { categoryImage: './../image/1phoneIcon.png', categoryName: 'Phone' }) }}>

                  <View style={styles.innerCategory}>
                    <Image source={require('./../image/1phoneIcon.png')} style={styles.categoryImage} />
                    <Text style={styles.categoryText}>Pets</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ads', { categoryImage: './../image/2ApplianceIcon.png', categoryName: 'Appliance' }) }}>
                  <View style={styles.innerCategory}>
                    <Image source={require('./../image/1phoneIcon.png')} style={styles.categoryImage} />
                    <Text style={styles.categoryText}>Jobs</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ads', { categoryImage: './../image/3TVMountIcon.png', categoryName: 'TV Mount' }) }}>
                  <View style={styles.innerCategory}>
                    <Image source={require('./../image/1phoneIcon.png')} style={styles.categoryImage} />
                    <Text style={styles.categoryText}>Services</Text>
                  </View>
                </TouchableOpacity>
              </View>
              </ScrollView>
            </View>

            <View style={styles.featuredAds}>
              <View style={{ flexDirection: 'row', }}>
                <Feather
                  name='clock'
                  type='font-awesome'
                  color='#000'
                  size={24}
                  containerStyle={{ width: width(10) }} />
                <View style={styles.featuredTextView}>
                  <Text style={styles.featuredText}>FEATURED ADS</Text>
                </View>
              </View>
              <View>
                <SimpleLineIcons
                  name='options'
                  type='font-awesome'
                  color='#000'
                  size={24}
                  containerStyle={{ width: width(10) }} />
              </View>
            </View>

            <ScrollView horizontal>
              <TouchableOpacity onPress = {() => this.props.navigation.navigate('detail')}
               style={styles.outerViewAds}>
                <Image source={require('./../image/cars.jpg')} style={styles.adsImage} />
                <View style={styles.outerTextView}>
                  <Text style={styles.adsName}>Audi R8</Text>
                  <Text style={styles.adsCity}>New York US</Text>
                  <View style={styles.adsPriceOuterView}>
                    <View>
                      <Text style={styles.adsPrice}>$480000</Text>
                    </View>
                    <View style={{ marginLeft: 40 }}>
                      <AntDesign
                        name='calendar'
                        type='font-awesome'
                        color='#ccc'
                        size={24}
                        containerStyle={{ width: width(10) }} />
                    </View>
                    <Text style={styles.adsDate}>5 Aug</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.outerViewAds}>
                <Image source={require('./../image/cars.jpg')} style={styles.adsImage} />
                <View style={styles.outerTextView}>
                  <Text style={styles.adsName}>Audi R8</Text>
                  <Text style={styles.adsCity}>New York US</Text>
                  <View style={styles.adsPriceOuterView}>
                    <View>
                      <Text style={styles.adsPrice}>$480000</Text>
                    </View>
                    <View style={{ marginLeft: 40 }}>
                      <AntDesign
                        name='calendar'
                        type='font-awesome'
                        color='#ccc'
                        size={24}
                        containerStyle={{ width: width(10) }} />
                    </View>
                    <Text style={styles.adsDate}>5 Aug</Text>
                  </View>
                </View>
              </View>
            </ScrollView>

            <View style={{}}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, width: WIDTH - 40, marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', }}>
                  <MaterialIcons
                    name='location-on'
                    type='font-awesome'
                    color='#000'
                    size={24}
                    containerStyle={{ width: width(10) }} />
                  <View style={{ marginLeft: 5, marginTop: 1, justifyContent: 'center' }}>
                    <Text style={{ color: '#000', fontSize: 13, fontWeight: 'bold' }}>AD LOCATIONS</Text>
                  </View>
                </View>
                <View>
                  <SimpleLineIcons
                    name='options'
                    type='font-awesome'
                    color='#000'
                    size={24}
                    containerStyle={{ width: width(10) }} />
                </View>
              </View>



              {/**

              <View style={styles.offerRide}>
                <TouchableOpacity onPress={
                  () => this.setState({ showMe: true })}
                  style={styles.listButton}>
                  <Image source={require('./../image/cars.jpg')} style={{ marginBottom: 10, width: 150, height: 95 }} />

                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.showMe}
                    onRequestClose={() => this.setState({ showMe: false })}>
                    <View style={{ flex: 1, }}>
                      <View style={{
                        position: 'absolute',
                        zIndex: 1,
                        marginVertical: 20,
                        marginLeft: '88%'
                      }}>
                        <Entypo
                          name='cross'
                          type='font-awesome'
                          color='#000'
                          size={26}
                          onPress={() => this.setState({ showMe: false })}
                          containerStyle={{ width: width(10) }} />
                      </View>
                      <Image source={require('./../image/cars.jpg')} style={{ width: '100%', height: '100%', marginRight: 10 }} />

                    </View>
                  </Modal>

                </TouchableOpacity>
              </View> */}


              <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>
                <TouchableOpacity onPress={
                  () => this.setState({ showMe: true })}
                  style={styles.listButton}>
                  <Image source={require('./../image/home.jpg')} style={{ width: 160, height: 200, marginRight: 10 }} />

                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.showMe}
                    onRequestClose={() => this.setState({ showMe: false })}>
                    <View style={{ flex: 1, }}>
                      <View style={{
                        position: 'absolute',
                        zIndex: 1,
                        marginVertical: 20,
                        marginLeft: '88%'
                      }}>
                        <Entypo
                          name='cross'
                          type='font-awesome'
                          color='#fff'
                          size={26}
                          onPress={() => this.setState({ showMe: false })}
                          containerStyle={{ width: width(10) }} />
                      </View>
                      <Image source={require('./../image/home.jpg')} style={{ width: '100%', height: '100%', marginRight: 10 }} />

                    </View>
                  </Modal>

                </TouchableOpacity>
                <View style={{ flexDirection: 'column' }}>
                  <TouchableOpacity onPress={
                    () => this.setState({ showMe1: true })}
                    style={styles.listButton}>
                    <Image source={require('./../image/cars.jpg')} style={{ marginBottom: 10, width: 150, height: 95 }} />

                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={this.state.showMe1}
                      onRequestClose={() => this.setState({ showMe1: false })}>
                      <View style={{ flex: 1, }}>
                        <View style={{
                          position: 'absolute',
                          zIndex: 1,
                          marginVertical: 20,
                          marginLeft: '88%'
                        }}>
                          <Entypo
                            name='cross'
                            type='font-awesome'
                            color='#fff'
                            size={26}
                            onPress={() => this.setState({ showMe1: false })}
                            containerStyle={{ width: width(10) }} />
                        </View>
                        <Image source={require('./../image/cars.jpg')} style={{ width: '100%', height: '100%', marginRight: 10 }} />

                      </View>
                    </Modal>

                  </TouchableOpacity>
                  <TouchableOpacity onPress={
                    () => this.setState({ showMe2: true })}
                    style={styles.listButton}>
                    <Image source={require('./../image/cars.jpg')} style={{ width: 150, height: 95 }} />

                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={this.state.showMe2}
                      onRequestClose={() => this.setState({ showMe2: false })}>
                      <View style={{ flex: 1, }}>
                        <View style={{
                          position: 'absolute',
                          zIndex: 1,
                          marginVertical: 20,
                          marginLeft: '88%'
                        }}>
                          <Entypo
                            name='cross'
                            type='font-awesome'
                            color='#fff'
                            size={26}
                            onPress={() => this.setState({ showMe2: false })}
                            containerStyle={{ width: width(10) }} />
                        </View>
                        <Image source={require('./../image/cars.jpg')} style={{ width: '100%', height: '100%', marginRight: 10 }} />

                      </View>
                    </Modal>

                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>
                <TouchableOpacity onPress={
                  () => this.setState({ showMe3: true })}
                  style={styles.listButton}>
                  <Image source={require('./../image/cars.jpg')} style={{ marginBottom: 10, width: 160, height: 95 }} />

                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.showMe3}
                    onRequestClose={() => this.setState({ showMe3: false })}>
                    <View style={{ flex: 1, }}>
                      <View style={{
                        position: 'absolute',
                        zIndex: 1,
                        marginVertical: 20,
                        marginLeft: '88%'
                      }}>
                        <Entypo
                          name='cross'
                          type='font-awesome'
                          color='#fff'
                          size={26}
                          onPress={() => this.setState({ showMe3: false })}
                          containerStyle={{ width: width(10) }} />
                      </View>
                      <Image source={require('./../image/cars.jpg')} style={{ width: '100%', height: '100%', marginRight: 10 }} />

                    </View>
                  </Modal>

                </TouchableOpacity>
                <TouchableOpacity onPress={
                  () => this.setState({ showMe4: true })}
                  style={styles.listButton}>
                  <Image source={require('./../image/cars.jpg')} style={{ width: 150, marginLeft: 10, height: 95 }} />

                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.showMe4}
                    onRequestClose={() => this.setState({ showMe4: false })}>
                    <View style={{ flex: 1, }}>
                      <View style={{
                        position: 'absolute',
                        zIndex: 1,
                        marginVertical: 20,
                        marginLeft: '88%'
                      }}>
                        <Entypo
                          name='cross'
                          type='font-awesome'
                          color='#fff'
                          size={26}
                          onPress={() => this.setState({ showMe4: false })}
                          containerStyle={{ width: width(10) }} />
                      </View>
                      <Image source={require('./../image/cars.jpg')} style={{ width: '100%', height: '100%', marginRight: 10 }} />

                    </View>
                  </Modal>

                </TouchableOpacity>
              </View>
            </View>
            {/** flatlist */}
            <FlatList
              // style={{ marginBottom:125 }}
              showsHorizontalScrollIndicator={false}
              data={this.state.responseData}
              renderItem={this.renderRow}
              numColumns={3}
              keyExtractor={(item, index) => index.toString()}
            />
            <View>
              <Text style={{ marginTop: 20, marginLeft: 20, color: '#000', fontWeight: 'bold', marginBottom: 10 }}>Contact</Text>
              <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                <Image source={require('./../image/user1.png')} style={{ width: width(20), height: width(20), }}></Image>

                <View style={{ marginLeft: '5%', marginTop: '5%' }}>
                  <Text style={{ fontSize: 13, marginTop: 0, color: '#000', fontWeight: 'bold' }}>Ben Parker</Text>
                  <Text style={{ fontSize: 13, marginTop: 0, color: '#ccc', }}>New Yark, United State</Text>
                </View>
              </View>
            </View>
            <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginBottom: 20, marginHorizontal: 20, marginTop: 20 }} ></View>

            <View style={{ flexDirection: 'row', }}>
              <View>
                <TouchableOpacity
                  onPress={() => this.setState({ enquiry_form: true, info: false, })}
                  style={{
                    padding: 15,
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    width: WIDTH - 180,
                    borderBottomColor: this.state.enquiry_form ? '#ea6311' : '#fff',
                    borderBottomWidth: this.state.enquiry_form ? 4 : 0,
                  }}>
                  <Text style={styles.loginText}>Enquiry form</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.borderEnd}></View>
              <View>
                <TouchableOpacity
                  onPress={() => this.setState({ enquiry_form: false, info: true, })}
                  style={{
                    padding: 15,
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    width: WIDTH - 180,
                    borderBottomColor: this.state.info ? '#ea6311' : '#fff',
                    borderBottomWidth: this.state.info ? 4 : 0,
                  }}>
                  <Text style={styles.loginText}>Info</Text>
                </TouchableOpacity>
              </View>
            </View>
            {this.ScreenView()}
          </ImageBackground>
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
  inputContainer: {
    width: width(90),
    height: height(8),
    borderRadius: 3,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchInput: {
    margin: 4,
    fontSize: 15,
    marginLeft: 20,
    width: '100%',
    marginRight: -80
  },
  categoryContainer: {
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#ccc',
    width: WIDTH - 62,
    marginLeft: 31
  },
  innerCategory: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: 30,
    height: 30
  },
  categoryText: {
    color: 'black',
    fontSize: 13
  },
  featuredAds: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: WIDTH - 40,
    marginLeft: 20
  },
  featuredTextView: {
    marginLeft: 5,
    marginTop: 1,
    justifyContent: 'center'
  },
  featuredText: {
    color: '#000',
    fontSize: 13,
    fontWeight: 'bold'
  },
  outerViewAds: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20
  },
  adsImage: {
    width: 200,
    height: 100
  },
  outerTextView: {
    backgroundColor: '#fff',
    width: 200,
  },
  adsName: {
    marginTop: 10,
    marginLeft: 10,
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold'
  },
  adsCity: {
    marginTop: 5,
    marginLeft: 10,
    color: '#ccc'
  },
  adsPriceOuterView: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 20
  },
  adsPrice: {
    color: '#000',
    fontSize: 15, fontWeight: 'bold'
  },
  adsDate: { marginLeft: 10, color: '#ccc' }
});