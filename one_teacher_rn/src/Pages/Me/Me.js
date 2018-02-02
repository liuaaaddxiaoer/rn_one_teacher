import React, {Component} from 'react'
import {
  Text,
  StyleSheet,
  View,
  Image,
  Platform
} from 'react-native'
import {mainColor, bgColor} from '../../Constants/Colors'

class Me extends React.Component {
  static navigationOptions = (options) => {

  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.meContainer}>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={require('../../images/4.png')}/>
            <View style={styles.headerMiddleContainer}>
              <View style={styles.nameContainer}>
                <Text style={styles.realName}>刘小二</Text>
                <Image/>
              </View>
              <Text style={styles.commonBottomFontSize}>查看或编辑个人资料</Text>
            </View>
            <Image
              style={styles.arrow}
              source={require('../../images/4.png')}
              resizeMode={Platform.OS === 'ios' ? 'contain' : 'center'}
            />
          </View>
          <View style={styles.postContainer}>
            <View style={styles.headerColumnList}>
              <Text style={styles.commonTopFontSize}>12</Text>
              <Text style={styles.commonBottomFontSize}>发布</Text>
            </View>
            <View style={styles.headerColumnList}>
              <Text style={styles.commonTopFontSize}>967.32</Text>
              <Text style={styles.commonBottomFontSize}>余额</Text>
            </View>
            <View style={styles.headerColumnList}>
              <Text style={styles.commonTopFontSize}>7</Text>
              <Text style={styles.commonBottomFontSize}>收藏</Text>
            </View>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <View>
            <View style={styles.sectionCell}>
              <Image/>
              <Text>我买入的</Text>
              <Image/>
            </View>
            <View style={styles.sectionCell}>
              <Image/>
              <Text>我卖出的</Text>
              <Image/>
            </View>
          </View>
          <View style={[styles.groupContainer, styles.sectionCell]}>
            <Image/>
            <Text>我创建的社群</Text>
            <Image/>
          </View>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  meContainer: {
    backgroundColor: mainColor,
    height: '100%',
    flexDirection: 'column'
  },
  header: {
    flexDirection: 'column',
    // alignItems: 'center'
  },
  avatarContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: bgColor,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  arrow: {
    width: 48,
    height: 25,
    alignSelf: 'center',
  },
  headerMiddleContainer: {
    flexDirection: 'column',
    marginLeft: 10,
    flex: 1
  },
  nameContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  realName: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 5,
    color: '#000'
  },
  postContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
  },
  headerColumnList: {
    flex: 1,
    alignItems: 'center'
  },
  commonTopFontSize: {
    fontSize: 19,
    fontWeight: "500",
    marginBottom: 2,
    color: '#000'
  },
  commonBottomFontSize: {
    color: '#787878',
    fontSize: 15,
  },
  sectionContainer: {
    marginTop: 10,
  },
  groupContainer: {
    marginTop: 10,
  },
  sectionCell: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default Me;