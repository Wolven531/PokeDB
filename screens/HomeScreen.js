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

import * as IconJson from '@expo/vector-icons/vendor/react-native-vector-icons/glyphmaps/Ionicons.json'

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
						{Object.keys(IconJson).map(iconKey => <Text key={iconKey}>{iconKey}</Text>)}
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
