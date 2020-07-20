/** Node modules */
import React, { Component } from 'react'
import { View, Image, StyleSheet, Animated, Dimensions } from 'react-native'

/** Core */
import { COLORS } from 'Core/colors'

/** Components */
import ScreenContainer from 'Components/ScreenContainer'

/** Constants */
const SCREEN_SIZE = Dimensions.get('window')

class LaunchScreen extends Component {
  constructor () {
    super()
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount () {
    const { navigation } = this.props
    this.animateLogo(1)
    /*
      Simulate fetching data before launching app.
    */
    setTimeout(() => {
      navigation.navigate('App')
    }, 2000)
  }

  animateLogo = (value = 0) => {
    Animated.spring(this.animatedValue, {
      toValue: value,
      useNativeDriver: true
    }).start()
  }

  render () {
    const translateY = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 0]
    })
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    })
    return (
      <ScreenContainer backgroundColor={COLORS.PINK}>
        <View style={styles.container}>
          <Animated.View
            style={{ transform: [{ translateY }], opacity }}
          >
            <Image source={require('Resources/Icons/gimiLogo.png')} style={styles.image} />
          </Animated.View>
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
