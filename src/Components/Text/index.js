/** Node modules */
import React, { Component } from 'react'
import { Text as ReactNativeText, StyleSheet } from 'react-native'

/** Core */
import { FONT_FAMILY, FONT_SIZES } from 'Core/fonts'

class Text extends Component {
  getTextStyle = () => {
    const { size } = this.props
    const textStyle = {}
    if (size && FONT_SIZES[size.toUpperCase()]) {
      textStyle.fontSize = FONT_SIZES[size.toUpperCase()]
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
    fontSize: FONT_SIZES.DEFAULT
  }
})

export default Text
