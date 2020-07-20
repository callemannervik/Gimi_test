// @flow
/** Node modules */
import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

/** Core */
import { COLORS } from 'Core/colors'

/** Components */
import AnimatedContainer from 'Components/AnimatedContainer'

type ContentCardProps = {
  onPress?: Function,
  animate?: boolean,
  delay?: number,
  pressEnabled?: boolean,
  containerStyle?: any,
  headerComponent?: any,
  children?: any
}

class ContentCard extends Component<ContentCardProps> {
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
          <Image source={require('../../Resources/Icons/forwardArrow.png')} />
        </View>
      )
    }
    return null
  }

  render () {
    const { children, pressEnabled, containerStyle, onPress, animate, delay } = this.props
    return (
      <AnimatedContainer animate={animate} delay={delay} style={{ flex: 1 }}>
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
      </AnimatedContainer>
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
