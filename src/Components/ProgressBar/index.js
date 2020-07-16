/** Node modules */
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

/** Core */
import { COLORS } from 'Core/colors'
import { SHADOW } from 'Core/styles'

/** Constants */
const BAR_HEIGHT = 14

class ProgressBar extends Component {
  getProgressWidth = () => {
    const { progress } = this.props
    if (progress && progress >= 0 && progress <= 100) {
      return `${progress}%`
    }
    return null
  }

  render () {
    const progressWidth = this.getProgressWidth()
    return (
      <View style={styles.container}>
        <View style={[styles.progress, { width: progressWidth }]} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: BAR_HEIGHT,
    backgroundColor: COLORS.WHITE_20
  },
  progress: {
    ...SHADOW,
    height: '100%',
    backgroundColor: COLORS.GREEN,
    borderTopRightRadius: BAR_HEIGHT / 2,
    borderBottomRightRadius: BAR_HEIGHT / 2
  }
})

export default ProgressBar
