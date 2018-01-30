import { StackNavigator } from 'react-navigation'
import Home from './Home'
import UMTabBar from './UMTabbar'
import React from 'react'
import {
  Text
} from 'react-native'
const UMNavigator = StackNavigator({
  Home: {
    screen: UMTabBar
  },
  Detail2: {
    screen: () => (<Text>detail2</Text>),
    navigationOptions: {
      headerTitle: 'detail2'
    }
  }
}, {
    mode: 'card',
    headerMode: 'screen',
    cardStyle:{
      backgroundColor:'red',
    },
    transitionConfig: ()=> { return {
      duration: 5000,
    }
    },
    onTransitionStart: ()=> {
      // alert(1)
    }
  });

export default UMNavigator;