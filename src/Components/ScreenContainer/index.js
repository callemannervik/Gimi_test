// @flow
/** Node modules */
import React, { Component } from 'react'
import { View, SafeAreaView, Image, StyleSheet, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

/** Constants */
const SCREEN_SIZE = Dimensions.get('window')

type ScreenContainerProps = {
  navigation?: Object,
  showBack?: boolean,
  backgroundImage?: number,
  backgroundColor?: string,
  children?: any
}

class ScreenContainer extends Component<ScreenContainerProps> {
  renderBackgroundImage () {
    const { backgroundImage } = this.props
    if (backgroundImage) {
      return (
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={backgroundImage} />
        </View>
      )
    }
    return null
  }

  renderBackButton () {
    const { navigation, showBack } = this.props
    if (showBack && navigation) {
      return (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          containerStyle={styles.backButton}
        >
          <Image style={styles.backIcon} source={require('../../Resources/Icons/forwardArrow.png')} />
        </TouchableOpacity>
      )
    }
    return null
  }

  render () {
    const { children, backgroundColor } = this.props
    return (
      <View style={[styles.container, backgroundColor && { backgroundColor }]}>
        {this.renderBackgroundImage()}
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            {children}
            {this.renderBackButton()}
          </View>
        </SafeAreaView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  },
  image: {
    height: SCREEN_SIZE.height,
    width: SCREEN_SIZE.width,
    resizeMode: 'cover'
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 50,
    width: 50,
    overflow: 'hidden',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backIcon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    transform: [{ rotate: '180deg' }]
  }
})

export default ScreenContainer
