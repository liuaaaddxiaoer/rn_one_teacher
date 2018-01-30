import React, { Component } from 'react'
import {
  Text
} from 'react-native'

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  }
  constructor(props) {
    super(props)
  }
  render() {
    const {navigate} = this.props.navigation
    return (
      <Text onPress={()=>this.props.navigation.navigate('Detail', { user: 'Lucy' })}>home</Text>
    );

  }
}