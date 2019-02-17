import React from 'react'
import {
	// Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import { WebBrowser } from 'expo'

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
						{/*
						<Image
							source={require('../assets/images/robot-dev.png')}
							style={styles.genericImage}/>
						*/}
						<TouchableOpacity
							onPress={this._handleLinkPress}
							style={styles.clickableLink}>
							<Text style={styles.clickableLinkText}>
								PokeDB Home
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		)
	}

	_handleLinkPress = () => {
		WebBrowser.openBrowserAsync('https://github.com/Wolven531/PokeDB')
	}
}

const styles = StyleSheet.create({
	clickableLink: {
		backgroundColor: 'rgba(0, 0, 0, .1)',
		marginVertical: 15,
		padding: 15
	},
	clickableLinkText: {
		color: '#00f'
	},
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	contentContainer: { },
	genericImage: {
		width: 100,
		height: 80,
		resizeMode: 'contain',
		marginTop: 3,
		marginLeft: -10
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
