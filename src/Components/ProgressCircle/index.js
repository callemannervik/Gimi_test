/** Node modules */
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'

/** Core */
import { COLORS } from 'Core/colors'

/** Constants */
const DEFAULT_SIZE = 60
const DEFAULT_PROGRESS = 0
const LINE_WIDTH = 10
const BACKGROUND_LINE_WIDTH = 2

class ProgressCircle extends Component {
    getActiveProgress = () => {
      const { progress } = this.props
      const activeProgress = progress || DEFAULT_PROGRESS
      return activeProgress
    }

    getActiveSize = () => {
      const { size } = this.props
      const activeSize = size || DEFAULT_SIZE
      return activeSize
    }

    renderChildren () {
      const { children } = this.props
      if (children) {
        const activeSize = this.getActiveSize()
        const containerSize = activeSize - LINE_WIDTH
        const offset = LINE_WIDTH / 2
        return (
          <View style={[
            styles.childrenContainer,
            {
              height: containerSize,
              width: containerSize,
              top: offset,
              left: offset,
              borderRadius: containerSize / 2
            }
          ]}
          >
            {children}
          </View>
        )
      }
      return null
    }

    render () {
      const activeProgress = this.getActiveProgress()
      const activeSize = this.getActiveSize()
      return (
        <View>
          {this.renderChildren()}
          <AnimatedCircularProgress
            fill={activeProgress}
            size={activeSize}
            width={LINE_WIDTH}
            backgroundWidth={BACKGROUND_LINE_WIDTH}
            rotation={360}
            lineCap='round'
            tintColor={COLORS.GREEN}
            backgroundColor={COLORS.WHITE_20}
          />
        </View>
      )
    }
}

const styles = StyleSheet.create({
  childrenContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden'
  }
})

export default ProgressCircle
