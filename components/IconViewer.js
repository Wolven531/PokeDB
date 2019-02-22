import React from 'react'
import {
	StyleSheet,
	View
} from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import * as IconMap from '@expo/vector-icons/vendor/react-native-vector-icons/glyphmaps/Ionicons.json'

export default class IconViewer extends React.Component {
	render() {
		return (
			<View style={styles.iconContainer}>
				{Object.keys(IconMap).map(iconKey => iconKey !== 'default' && <Ionicons
					key={iconKey}
					name={iconKey}
					style={styles.icon}
					size={25}
					color="#00f"
				/>)}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	iconContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		// justifyContent: 'space-evenly',
		justifyContent: 'space-around',
		padding: 20
	},
	icon: {
		margin: 10
	}
})
