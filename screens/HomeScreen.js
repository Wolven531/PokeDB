import React from 'react'
import {
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	// TouchableOpacity,
	View
} from 'react-native'
// import { WebBrowser } from 'expo'

import { Ionicons } from '@expo/vector-icons'
import * as IconMap from '@expo/vector-icons/vendor/react-native-vector-icons/glyphmaps/Ionicons.json'

// import { MonoText } from '../components/StyledText'

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		// header: null,# set `header` to null to remove App bar
		title: 'PokeDB Home'
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView
					style={styles.container}
					contentContainerStyle={styles.contentContainer}>
					<View>
						<Text>
							PokeDB Home
						</Text>
						{/*
						{Object.keys(IconMap).map(iconKey => <Text key={iconKey}>{iconKey}</Text>)}
						*/}
						<View style={styles.iconContainer}>
							{Object.keys(IconMap).map(iconKey => iconKey !== 'default' && <Ionicons
								key={iconKey}
								name={iconKey}
								style={styles.icon}
								size={25}
								color="#00f"
							/>)}
						</View>
					</View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	contentContainer: { },
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
	},
	tabBarInfoContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		...Platform.select({
			ios: {
				shadowColor: 'black',
				shadowOffset: { height: -3 },
				shadowOpacity: 0.1,
				shadowRadius: 3
			},
			android: {
				elevation: 20
			}
		}),
		alignItems: 'center',
		backgroundColor: '#fbfbfb',
		paddingVertical: 20
	},
	tabBarInfoText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		textAlign: 'center'
	}
})
