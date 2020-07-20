// @flow
/** Node modules */
import React, { Component } from 'react'
import { Animated } from 'react-native'

type AnimatedContainerProps = {
  animate?: boolean,
  delay?: number,
  children?: any,
  style?: any
}

type AnimatedContainerState = {
  animatedValue: Object
}

class AnimatedContainer extends Component<AnimatedContainerProps, AnimatedContainerState> {
  constructor (props: Object) {
    super()
    const { animate } = props
    this.state = {
      animatedValue: new Animated.Value(animate ? 0 : 1)
    }
  }

  componentDidMount () {
    const { animate, delay } = this.props
    if (animate) {
      this.animateContainer(1, delay || 0)
    }
  }

  animateContainer = (toValue: number, delay: number) => {
    Animated.spring(this.state.animatedValue, {
      toValue,
      delay: delay,
      speed: 15,
      useNativeDriver: true
    }).start()
  }

  render () {
    const { children, style } = this.props
    const translateY = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [50, 0]
    })
    const opacity = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    })
    return (
      <Animated.View
        style={[
          {
            opacity,
            transform: [{ translateY }]
          },
          style && style
        ]}
      >
        {children}
      </Animated.View>
    )
  }
}

export default AnimatedContainer
