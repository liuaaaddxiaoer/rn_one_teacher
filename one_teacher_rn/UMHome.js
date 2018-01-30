import React, {Component} from 'react'
import {Text}  from 'react-native'

class UMHome extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <Text onPress={()=>this.props.navigation.navigate('Detail2')}>hom1e</Text>
    );
  }
}

export default UMHome;