// @flow
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

type UnderConstructionProps = {
  navigation: Object
}

class UnderConstruction extends Component<UnderConstructionProps> {
  render () {
    const { navigation } = this.props
    return (
      <ScreenContainer
        backgroundColor={COLORS.DARK_BLUE}
        backgroundImage={require('../../../Resources/Backgrounds/space.png')}
        navigation={navigation}
        showBack
      >
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.contentContainer}
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
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  text: {
    color: COLORS.WHITE,
    textAlign: 'center',
    fontWeight: '800'
  }
})

export default UnderConstruction
