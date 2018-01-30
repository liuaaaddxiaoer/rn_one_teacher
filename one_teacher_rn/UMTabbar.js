import React from 'react'
import {Text} from 'react-native'
import { TabNavigator } from 'react-navigation'
import UMHome from './UMHome'
const UMTabBar = TabNavigator({
  Home: {
    screen: UMHome,
    navigationOptions: {
      tabBarLabel:'home',
      headerTitle: 'h'
    }
  },
  Detail: {
    screen: ({navigation})=>(<Text onPress={()=>navigation.navigate('Detail2')}>12233</Text>),
    navigationOptions: {
      // tabBarLabel:'detail',
      headerTitle: 'detail'
    }
  }
},{
  tabBarPosition:'bottom'
})

export default UMTabBar;