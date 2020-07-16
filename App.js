import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native'

/** Navigation */
import RootNavigator from './src/Navigation'
import Dashboard from './src/Navigation/Dashboard'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Dashboard />
    </SafeAreaView>
  )
}

export default App
