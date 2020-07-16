/** Node modules */
import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

/** Core */
import { COLORS } from '../../Core/colors'

/** Components */
import { Text } from '../../Components/Text'

class LaunchScreen extends Component {
  render () {
    return (
      <TouchableOpacity>
        <Text>LaunchScreen</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.LIGHT_BLUE
  }
})

export default LaunchScreen
