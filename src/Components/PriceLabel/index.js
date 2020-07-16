/** Node modules */
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

/** Core */
import { COLORS } from 'Core/colors'

/** Components */
import Text from 'Components/Text'

class PriceLabel extends Component {
  getInteger = () => {
    const { value } = this.props
    if (typeof value === 'number') {
      return Math.floor(value)
    }
    return null
  }

  getDecimals = () => {
    const { value } = this.props
    if (typeof value === 'number') {
      const integer = this.getInteger()
      const remaining = value - integer
      const decimals = Math.round(remaining * 100)
      return decimals
    }
    return null
  }

  render () {
    const integer = this.getInteger()
    const decimals = this.getDecimals()
    const showDecimals = typeof decimals === 'number' && decimals > 0
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.prefix} size='xlarge'>{integer}</Text>
        {showDecimals
          ? <Text style={styles.suffix} size='small'>.{decimals} KR</Text>
          : <Text style={styles.suffix} size='small'>KR</Text>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  prefix: {
    fontWeight: '800',
    color: COLORS.WHITE
  },
  suffix: {
    fontWeight: '400',
    color: COLORS.WHITE,
    marginTop: 3,
    marginLeft: 2
  }
})

export default PriceLabel
