/** Node modules */
import React, { Component } from 'react'
import { Animated } from 'react-native'

class AnimatedContainer extends Component {
  constructor (props) {
    super()
    const { animate } = props
    this.animatedValue = new Animated.Value(animate ? 0 : 1)
  }

  componentDidMount () {
    const { animate, delay } = this.props
    if (animate) {
      this.animateContainer(1, delay)
    }
  }

  animateContainer = (toValue = 0, delay = 0) => {
    Animated.spring(this.animatedValue, {
      toValue,
      delay: delay,
      speed: 15,
      useNativeDriver: true
    }).start()
  }

  render () {
    const { children, style } = this.props
    const translateY = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [50, 0]
    })
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    })
    return (
      <Animated.View
        style={[
          {
            opacity,
            transform: [
              { translateY }
            ]
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
