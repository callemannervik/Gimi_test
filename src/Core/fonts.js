/** Node modules */
import { Platform } from 'react-native'

/** Constants */
const isIos = Platform.OS === 'ios'

/**
 * Predefined font families used in App
 */
export const FONT_FAMILY = {
  DEFAULT: isIos ? 'Muli' : 'Muli-Regular'
}

/**
 * Predefined font sizes used in App
 */
export const FONT_SIZES = {
  SMALL: 12,
  DEFAULT: 15,
  LARGE: 20,
  XLARGE: 25
}

/**
 * Predefined font sizes used in App
 */
export const FONT_WEIGHTS = {
  LIGHT: 'Muli-Light',
  REGULAR: 'Muli-Regular',
  BOLD: 'Muli-Bold',
  BLACK: 'Muli-Black'
}
