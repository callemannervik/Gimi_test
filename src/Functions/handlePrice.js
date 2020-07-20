export const getInteger = (price) => {
  if (typeof price === 'number') {
    return Math.floor(price)
  }
  return null
}

export const getDecimals = (price) => {
  if (typeof price === 'number') {
    const integer = getInteger(price)
    const remaining = price - integer
    const decimals = Math.round(remaining * 100)
    return decimals
  }
  return null
}

export const getPrefix = (price) => {
  if (typeof price === 'number') {
    const prefix = price > 0 ? '+' : '-'
    return prefix
  }
  return null
}
