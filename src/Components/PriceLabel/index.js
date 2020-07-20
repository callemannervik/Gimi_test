/** Node modules */
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

/** Core */
import { COLORS } from 'Core/colors'

/** Components */
import Text from 'Components/Text'

/** Functions */
import { getInteger, getDecimals, getPrefix } from 'Functions/handlePrice'

class PriceLabel extends Component {
  render () {
    const { value, size, showPrefix } = this.props
    const integer = getInteger(value)
    const decimals = getDecimals(value)
    const showDecimals = typeof decimals === 'number' && decimals > 0
    const priceSize = size || 'xlarge'
    const prefix = showPrefix ? getPrefix(value) : null
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.prefix} size={priceSize}>{prefix}{integer}</Text>
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
