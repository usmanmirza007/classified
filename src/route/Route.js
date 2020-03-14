import SignIn from '../component/SignIn';
import SignUp from '../component/SignUp';
import Forget from '../component/Forget';
import splash from '../component/splash';
import message from '../component/message';
import Slider from '../component/Slider';
import DashBoard from './DashBoard';
import createAds from './../component/createAds';
import manageProfile from './../component/manageProfile';
import termAndCondition from './../component/termAndCondition';
import dashBoardBottomTab from './dashBoardBottomTab';
import {createStackNavigator} from 'react-navigation-stack';
//import SafeAreaView from 'react-native-safe-area-view';
import SafeAreaView from 'react-native-safe-area-context';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const Route =  createStackNavigator({
    
    Slider: {
        screen: Slider,
        navigationOptions: {
            header: null,
        },
    },
    splash: {
        screen: splash,
        navigationOptions: {
            header: null,
        },
    },
   
    termAndCondition: {
        screen: termAndCondition,
        navigationOptions: {
            header: null,
        },
    },
    message: {
        screen: message,
        navigationOptions: {
            header: null,
        },
    },
    manageProfile: {
        screen: manageProfile,
        navigationOptions: {
            header: null,
        },
    },
    createAds: {
        screen: createAds,
        navigationOptions: {
            header: null,
        },
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            header: null,
        },
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            header: null,
        },
       
    },
    Forget: {
        screen: Forget,
        navigationOptions: {
            header: null,
        },
    },
    tabs: {
        screen: DashBoard,
        navigationOptions: {
            header: null,
        },
    },
    tab:{
        screen: dashBoardBottomTab,
        navigationOptions: {
            header: null,
        },
    }
  },
  {
      initialRouteName: 'splash'
  })

export default createAppContainer(Route);

