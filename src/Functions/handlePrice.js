// @flow
export const getInteger = (price: number): number => {
  if (price >= 0) {
    return Math.floor(price)
  } else {
    return Math.ceil(price)
  }
}

export const getDecimals = (price: number): number => {
  const integer = getInteger(price)
  const remaining = price - integer
  const decimals = Math.round(remaining * 100)
  return decimals
}

export const getPrefix = (price: number): string => {
  const prefix = price > 0 ? '+' : ''
  return prefix
}
