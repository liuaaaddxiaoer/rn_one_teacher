import React, {Component} from 'react';
import {
  Text
} from 'react-native';
import UMNavigator from './UMNavigation'


class Root extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <UMNavigator />
    );
  }
}

export default Root;