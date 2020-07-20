/** Node modules */
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

/** Core */
import { COLORS } from 'Core/colors'

/** Components */
import Text from 'Components/Text'

/** Functions */
import { getInteger, getDecimals, getPrefix } from 'Functions/handlePrice'

/** Constants */
const LARGE_MARGIN = 4
const SMALL_MARGIN = 1

class PriceLabel extends Component {
  getTopMargin = (size) => {
    if (size === 'xlarge' || size === 'large') {
      return LARGE_MARGIN
    }
    return SMALL_MARGIN
  }

  render () {
    const { value, size, showPrefix } = this.props
    const integer = getInteger(value)
    const decimals = getDecimals(value)
    const showDecimals = typeof decimals === 'number' && decimals > 0
    const priceSize = size || 'default'
    const prefix = showPrefix ? getPrefix(value) : null
    const marginTop = this.getTopMargin(priceSize)
    return (
      <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
        <Text style={styles.prefix} size={priceSize}>{prefix}{integer}</Text>
        {showDecimals
          ? <Text style={[styles.suffix, { marginTop }]} size='small'>.{decimals} KR</Text>
          : <Text style={[styles.suffix, { marginTop }]} size='small'>KR</Text>}
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
    marginLeft: 2
  }
})

export default PriceLabel
