import React from 'react'
import { View, StatusBar } from 'react-native'

/** Navigation */
import RootNavigator from './src/Navigation'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />
      <RootNavigator />
    </View>
  )
}

export default App
