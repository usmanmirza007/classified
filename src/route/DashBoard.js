import SafeAreaView from 'react-native-safe-area-context';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Home from './../component/Home';
import ads from './../component/ads';
import adsMember from './../component/adsMember';
import myProfile from './../component/myProfile';
import contact_Us from './../component/contact_Us';
import SideMenu from './../route/SideMenu';
import detail from './../component/detail';
import about from './../component/about';

const DashBoard = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  about: {
    screen: about,
    navigationOptions: {
      header: null,
    },
  },
  detail: {
    screen: detail,
    navigationOptions: {
      header: null,
    },
  },
  adsMember: {
    screen: adsMember,
    navigationOptions: {
      header: null,
    },
  },
  contact_Us: {
    screen: contact_Us,
    navigationOptions: {
      header: null,
    },
  },
  myProfile: {
    screen: myProfile,
    navigationOptions: {
      header: null,
    },
  },
  ads: {
    screen: ads,
    navigationOptions: {
      header: null,
    },
  },

}, {
  drawerWidth: 300,
  initialRouteName: 'Home',
  contentComponent: SideMenu,
});


export default (DashBoard);

