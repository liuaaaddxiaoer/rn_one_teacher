import React, { Component } from 'react'
import {
    Text,
    Image
} from 'react-native'

import { TabNavigator } from 'react-navigation'
import App from './App'
import Homes from './Home'

const Home = ({navigation}) => (
    <Homes navigation={navigation}/>
);

const Screen = () => (
    // <App/>
    <Text>1</Text>
);

const TabBarNavigator = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'ahha11',
            tabBarVisible: true,
            tabBarIcon: () => (<Image source={require('./src/images/tabbar_groupAll_normal.png')} style={{ width: 16, height: 16 }} />)
        }
    },
    Screen: {

        screen: Screen,
        navigationOptions: {
            title: 'ahha',
            tabBarVisible: true,
            tabBarIcon: () => (<Image source={require('./src/images/tabbar_groupAll_normal.png')} style={{ width: 16, height: 16 }} />)
        }
    }
}, {

        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#0abd15',
            inactiveTintColor: 'gray',
            allowFontScaling: true,
            style: {
                height: 49,
                backgroundColor: 'white',
            },
            activeBackgroundColor: 'white',
            inactiveBackgroundColor: 'white',
            labelStyle: {
                fontSize: 15,
            },
            scrollEnabled: false,
            showIcon: true,
            upperCaseLabel: false,
            indicatorStyle: {
                backgroundColor: 'transparent'
            },
            pressOpacity: 0,
            pressColor: 'transparent',
            tabStyle: {
            }
        },
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
    }
);

export default class TabBar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <TabBarNavigator></TabBarNavigator>
        );
    }

}
