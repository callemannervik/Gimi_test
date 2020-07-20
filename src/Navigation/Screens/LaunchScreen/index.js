/** Node modules */
import React, { Component } from 'react'
import { View, Image, StyleSheet, Animated, Dimensions } from 'react-native'

/** Core */
import { COLORS } from 'Core/colors'

/** Components */
import ScreenContainer from 'Components/ScreenContainer'
import AnimatedContainer from 'Components/AnimatedContainer'

/** Constants */
const SCREEN_SIZE = Dimensions.get('window')

class LaunchScreen extends Component {
  constructor () {
    super()
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount () {
    /*
      Simulate fetching data before launching app.
    */
    const { navigation } = this.props
    setTimeout(() => {
      navigation.navigate('App')
    }, 2000)
  }

  render () {
    return (
      <ScreenContainer backgroundColor={COLORS.PINK}>
        <View style={styles.container}>
          <AnimatedContainer animate>
            <Image source={require('Resources/Icons/gimiLogo.png')} style={styles.image} />
          </AnimatedContainer>
        </View>
      </ScreenContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: SCREEN_SIZE.width / 2,
    height: SCREEN_SIZE.height / 2,
    resizeMode: 'contain'
  }
})

export default LaunchScreen
