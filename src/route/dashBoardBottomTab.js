import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import Home from './../component/Home';
import add from './../component/add';
import save from './../component/save';
import notification from './../component/notification';
import search from './../component/search';
import DashBoard from './DashBoard';
const TabScreens = createMaterialBottomTabNavigator({
    search: {
        screen: search,
        navigationOptions:  {
            title: 'Search',
        }, 
    },
    notification: {
        screen: notification,
        navigationOptions:  {
            title: 'Notification',
        }, 
    },
    Home:{
        screen: DashBoard,
        navigationOptions:  {
            title:'Home',
        }
    },
    Home:{
        screen: Home,
        navigationOptions:  {
            title:'Home',
        }
    },
    add: {
        screen: add,
        navigationOptions:  {
            title: 'Add',
        }, 
    },
    save: {
        screen: save,
        navigationOptions:  {
            title: 'Save',
        }, 
    },
}, {
    order: ['Home', 'search', 'add', 'save', 'notification'],
    initialRouteName: 'add',
    activeColor: '#26ae61',
    inactiveColor: '#9e9e9e',
    
    barStyle: { backgroundColor: '#fff' },
  },);

export default (TabScreens);