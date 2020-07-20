/** Node modules */
import React, { Component } from 'react'
import { View, SafeAreaView, Image, StyleSheet, Dimensions } from 'react-native'

/** Constants */
const SCREEN_SIZE = Dimensions.get('window')

class ScreenContainer extends Component {
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

  render () {
    const { children, backgroundColor } = this.props
    return (
      <View style={[styles.container, backgroundColor && { backgroundColor }]}>
        {this.renderBackgroundImage()}
        <SafeAreaView style={{ flex: 1 }}>
          {children}
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
  }
})

export default ScreenContainer
