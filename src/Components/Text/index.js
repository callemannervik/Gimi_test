/** Node modules */
import React, { Component } from 'react'
import { Text as ReactNativeText, StyleSheet } from 'react-native'

/** Core */
import { FONT_FAMILY, FONT_SIZES, FONT_WEIGHTS } from 'Core/fonts'

class Text extends Component {
  getTextStyle = () => {
    const { size, weight } = this.props
    const textStyle = {}
    if (size && FONT_SIZES[size.toUpperCase()]) {
      textStyle.fontSize = FONT_SIZES[size.toUpperCase()]
    }
    if (weight && FONT_WEIGHTS[weight.toUpperCase()]) {
      textStyle.fontWeight = FONT_WEIGHTS[weight.toUpperCase()]
    }
    return textStyle
  }

  render () {
    const { children, style } = this.props
    const textStyle = this.getTextStyle()
    return (
      <ReactNativeText
        style={[
          styles.text,
          textStyle,
          style && style
        ]}
      >
        {children}
      </ReactNativeText>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: FONT_FAMILY.DEFAULT,
    fontWeight: FONT_WEIGHTS.REGULAR,
    fontSize: FONT_SIZES.DEFAULT
  }
})

export default Text
