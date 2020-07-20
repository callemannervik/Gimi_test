// @flow
/** Node modules */
import React, { Component } from 'react'
import { Text as ReactNativeText, StyleSheet, Platform } from 'react-native'

/** Core */
import { FONT_FAMILY, FONT_SIZES, FONT_WEIGHTS } from 'Core/fonts'

type TextProps = {
  size?: string,
  style?: any,
  children?: any
}

class Text extends Component<TextProps> {
  getTextStyle = () => {
    const { size, style } = this.props
    const textStyle = {}
    if (size && FONT_SIZES[size.toUpperCase()]) {
      textStyle.fontSize = FONT_SIZES[size.toUpperCase()]
    }
    if (Platform.OS === 'android' && style && style.fontWeight) {
      const { fontWeight } = style
      if (fontWeight === '300') {
        textStyle.fontFamily = FONT_WEIGHTS.LIGHT
      } else if (fontWeight === '400') {
        textStyle.fontFamily = FONT_WEIGHTS.REGULAR
      } else if (fontWeight === '500') {
        textStyle.fontFamily = FONT_WEIGHTS.BOLD
      } else if (fontWeight === '800') {
        textStyle.fontFamily = FONT_WEIGHTS.BLACK
      }
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
