/** Node modules */
import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

/** Core */
import { COLORS } from 'Core/colors'
import { SHADOW } from 'Core/styles'

/** Constants */
const IMAGE_SIZE = 55
const BORDER_SIZE = 2
const BORDER_CONTAINER_SIZE = IMAGE_SIZE + BORDER_SIZE * 2

class ProfileImage extends Component {
  render () {
    const { source } = this.props
    return (
      <View style={styles.borderContainer}>
        <View style={styles.container}>
          <Image source={source} style={styles.image} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  borderContainer: {
    ...SHADOW,
    height: BORDER_CONTAINER_SIZE,
    width: BORDER_CONTAINER_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDER_CONTAINER_SIZE / 2,
    backgroundColor: COLORS.WHITE_20
  },
  container: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    overflow: 'hidden',
    borderRadius: IMAGE_SIZE / 2
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover'
  }
})

export default ProfileImage
