// @flow
/** Node modules */
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'

/** Core */
import { COLORS } from 'Core/colors'
import { SHADOW } from 'Core/styles'

/** Constants */
const DEFAULT_SIZE = 60
const DEFAULT_PROGRESS = 0
const LINE_WIDTH = 10
const BACKGROUND_LINE_WIDTH = 2

type ProgressCircleProps = {
  progress: number,
  size?: number,
  children?: any
}

class ProgressCircle extends Component<ProgressCircleProps> {
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
            style={{ ...SHADOW }}
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
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default ProgressCircle
