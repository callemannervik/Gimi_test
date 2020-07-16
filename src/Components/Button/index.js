/** Node modules */
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

/** Core */
import { COLORS } from 'Core/colors'

/** Components */
import Text from 'Components/Text'

class Button extends Component {
  handleOnPress = () => {
    const { onPress } = this.props
    if (onPress) {
      onPress()
    }
  }

  render () {
    const { title } = this.props
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.handleOnPress}
        activeOpacity={0.8}
      >
        <Text style={styles.text} size='small'>{title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.DARK_BLUE,
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: 'center'
  },
  text: {
    color: COLORS.WHITE
  }
})

export default Button
