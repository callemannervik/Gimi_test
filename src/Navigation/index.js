/** Node modules */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

/** Screens */
import LaunchScreen from './LaunchScreen'
import Dashboard from './Dashboard'
import UnderConstruction from './UnderConstruction'

const DashBoardStack = createStackNavigator()

const DashboardNavigator = () => {
  return (
    <NavigationContainer>
      <DashBoardStack.Navigator>
        <DashBoardStack.Screen name='DashboardScreen' component={Dashboard} />
        <DashBoardStack.Screen name='UnderConstruction' component={UnderConstruction} />
      </DashBoardStack.Navigator>
    </NavigationContainer>
  )
}

const RootStack = createStackNavigator()

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {/* <RootStack.Screen name='LaunchScreen' component={LaunchScreen} /> */}
        <RootStack.Screen name='Dashboard' component={DashboardNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
