/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
} from 'react-native';
// react-navigation
import { StackNavigator } from 'react-navigation'

import TabBars from './tabbar'
const HomeScreen = ({ navigation }) => (
  <TabBars></TabBars>
)

const DetailScreen = ({navigation}) => (
  <Text onPress={()=>{navigation.goBack()}}>Detail</Text>
)
const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home2',
      headerTitleStyle: {
        color: 'red',
        textDecorationLine: 'underline'
      },
      headerTintColor: 'yellow',
      headerLeft: <Text onPress={() => { 1}}>左边按钮</Text>,
      headerBackTitle: 'pop',
      headerStyle: {
        backgroundColor: 'yellow',
        // backfaceVisibility: 'hidden'
      },
      gesturesEnabled: false
    }
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      headerTitle: 'Detail',
      headerTitleStyle: {
        color: 'red',
        textDecorationLine: 'underline'
      },
      headerTintColor: 'yellow',
      headerLeft: <Text onPress={() => { alert(1) }}>左边按钮</Text>,
      headerBackTitle: 'pop',
      headerStyle: {
        backgroundColor: 'yellow',
        // backfaceVisibility: 'hidden'
      },
      gesturesEnabled: true
    }
  }
})


export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <RootNavigator />
    );
  }
}

const styles = StyleSheet.create({

});