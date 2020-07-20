/** Node modules */
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

/** Core */
import { COLORS } from 'Core/colors'

/** Components */
import ScreenContainer from 'Components/ScreenContainer'

class LaunchScreen extends Component {
  componentDidMount () {
    const { navigation } = this.props
    setTimeout(() => {
      navigation.navigate('App')
    }, 2000)
  }

  render () {
    return (
      <ScreenContainer backgroundColor={COLORS.PINK} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DARK_BLUE
  }
})

export default LaunchScreen
