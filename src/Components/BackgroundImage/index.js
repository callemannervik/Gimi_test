/** Node modules */
import React, { Component } from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'

/** Constants */
const SCREEN_SIZE = Dimensions.get('window')

class BackgroundImage extends Component {
  render () {
    const { source } = this.props
    return (
      <View style={styles.container}>
        <Image source={source} style={styles.image} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
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

export default BackgroundImage
