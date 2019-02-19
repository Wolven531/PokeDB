import React from 'react'
import { Platform } from 'react-native'
import {
	createStackNavigator,
	createBottomTabNavigator
} from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'

import HomeScreen from '../screens/HomeScreen'
import LinksScreen from '../screens/LinksScreen'
import SettingsScreen from '../screens/SettingsScreen'
import TypechartScreen from '../screens/TypechartScreen'

const HomeStack = createStackNavigator({ Home: HomeScreen })
const LinksStack = createStackNavigator({ Links: LinksScreen })
const SettingsStack = createStackNavigator({ Settings: SettingsScreen })
const TypechartStack = createStackNavigator({ Typechart: TypechartScreen })

HomeStack.navigationOptions = {
	tabBarLabel: 'Home',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === 'ios'
					? `ios-information-circle${focused ? '' : '-outline'}`
					: 'md-information-circle'
			}
		/>
	)
}

LinksStack.navigationOptions = {
	tabBarLabel: 'Links',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
		/>
	)
}

SettingsStack.navigationOptions = {
	tabBarLabel: 'Settings',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
		/>
	)
}

TypechartStack.navigationOptions = {
	tabBarLabel: 'Typechart',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-analytics' : 'md-analytics'}
		/>
	)
}

export default createBottomTabNavigator({
	HomeStack,
	TypechartStack,
	LinksStack,
	SettingsStack
})
