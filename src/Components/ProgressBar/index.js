// @flow
/** Node modules */
import React, { Component } from 'react'
import { View, Animated, StyleSheet } from 'react-native'

/** Core */
import { COLORS } from 'Core/colors'
import { SHADOW } from 'Core/styles'

/** Constants */
const BAR_HEIGHT = 14

type ProgressBarProps = {
  progress: number,
  animate?: boolean,
}

type ProgressBarState = {
  animatedValue: Object
}

class ProgressBar extends Component<ProgressBarProps, ProgressBarState> {
  constructor (props: Object) {
    super()
    const { animate, progress } = props
    this.state = {
      animatedValue: new Animated.Value(animate ? 0 : progress)
    }
  }

  componentDidMount () {
    const { animate, progress } = this.props
    if (animate) {
      this.animateProgress(progress)
    }
  }

  animateProgress = (toValue: number) => {
    Animated.timing(this.state.animatedValue, {
      toValue,
      delay: 200,
      duration: 400,
      useNativeDriver: false
    }).start()
  }

  render () {
    const width = this.state.animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%']
    })
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.progress, { width }]} />
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
