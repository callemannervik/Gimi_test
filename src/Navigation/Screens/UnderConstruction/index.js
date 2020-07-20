/** Node modules */
import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native'

/** Core */
import { COLORS } from 'Core/colors'

/** Components */
import Text from 'Components/Text'
import ScreenContainer from 'Components/ScreenContainer'

/** Mocked strings */
import strings from 'Translations/strings'

class UnderConstruction extends Component {
  render () {
    const { navigation } = this.props
    return (
      <ScreenContainer
        backgroundColor={COLORS.DARK_BLUE}
        backgroundImage={require('Resources/Backgrounds/space.png')}
        navigation={navigation}
        showBack
      >
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        >
          <Text style={styles.text} size='large'>{strings.under_construction}</Text>
        </ScrollView>
      </ScreenContainer>
    )
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 50
  },
  text: {
    color: COLORS.WHITE,
    textAlign: 'center',
    fontWeight: '800'
  }
})

export default UnderConstruction
