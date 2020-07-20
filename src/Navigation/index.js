/** Node modules */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

/** Screens */
import LaunchScreen from 'Navigation/Screens/LaunchScreen'
import Dashboard from 'Navigation/Screens/Dashboard'
import UnderConstruction from 'Navigation/Screens/UnderConstruction'

const fadeTransition = ({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress
  }
})

const AppStack = createStackNavigator()

const App = () => {
  return (
    <AppStack.Navigator screenOptions={{ header: () => null }}>
      <AppStack.Screen name='Dashboard' component={Dashboard} />
      <AppStack.Screen name='UnderConstruction' component={UnderConstruction} />
    </AppStack.Navigator>
  )
}

const RootStack = createStackNavigator()

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ header: () => null }}>
        <RootStack.Screen name='LaunchScreen' component={LaunchScreen} />
        <RootStack.Screen
          name='App'
          component={App}
          options={{
            cardStyleInterpolator: fadeTransition,
            gestureEnabled: false
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
