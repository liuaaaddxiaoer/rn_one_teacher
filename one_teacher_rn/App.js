/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,

} from 'react-native';
// react-navigation
import { StackNavigator } from 'react-navigation'
import STNavigation from './src/Pages/Base/STNavigation'


export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <STNavigation/>
    );
  }
}

const styles = StyleSheet.create({

});