/** Node modules */
import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

/** Core */
import { COLORS } from 'Core/colors'

class ContentCard extends Component {
  renderHeader () {
    const { headerComponent } = this.props
    if (headerComponent) {
      return headerComponent
    }
    return null
  }

  renderNavigationIcon () {
    const { pressEnabled } = this.props
    if (pressEnabled) {
      return (
        <View style={styles.iconContainer}>
          <Image source={require('Resources/Icons/forwardArrow.png')} />
        </View>
      )
    }
    return null
  }

  render () {
    const { children, pressEnabled, containerStyle, onPress } = this.props
    return (
      <TouchableOpacity
        style={[styles.container, containerStyle && containerStyle]}
        containerStyle={{ flex: 1 }}
        activeOpacity={0.8}
        disabled={!pressEnabled}
        onPress={onPress}
      >
        {this.renderHeader()}
        <View style={styles.contentContainer}>
          <View style={{ flex: 1 }}>
            {children}
          </View>
          {this.renderNavigationIcon()}
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_BLUE,
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: 7
  },
  contentContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  iconContainer: {
    justifyContent: 'center',
    paddingLeft: 20
  }
})

export default ContentCard
