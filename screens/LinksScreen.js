import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { WebBrowser } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import Touchable from 'react-native-platform-touchable'

export default class LinksScreen extends React.Component {
	static navigationOptions = {
		title: 'Links'
	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<Touchable
					style={styles.option}
					background={Touchable.Ripple('#ccc', false)}
					onPress={this._handleVisitPokeDB}>
					<View style={{ flexDirection: 'row' }}>
						<View style={styles.optionIconContainer}>
							<Ionicons
								name="ios-chatboxes"
								size={22}
								color="#ccc"
							/>
						</View>
						<View style={styles.optionText}>
							<Text style={{}}>Visit the Pokemon DB site</Text>
						</View>
					</View>
				</Touchable>

				<Touchable
					style={styles.option}
					background={Touchable.Ripple('#ccc', false)}
					onPress={this._handleVisitGithub}>
					<View style={{ flexDirection: 'row' }}>
						<View style={styles.optionIconContainer}>
							<Ionicons
								name="ios-chatboxes"
								size={22}
								color="#ccc"
							/>
						</View>
						<View style={styles.optionText}>
							<Text style={{}}>
								Visit the Github page for this app
							</Text>
						</View>
					</View>
				</Touchable>
			</ScrollView>
		)
	}

	_handleVisitGithub = () => {
		WebBrowser.openBrowserAsync('https://github.com/Wolven531/PokeDB')
	}

	_handleVisitPokeDB = () => {
		WebBrowser.openBrowserAsync('https://pokemondb.net/pokedex/national')
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: '#fff'
	},
	optionIconContainer: {
		marginRight: 9
	},
	option: {
		backgroundColor: '#fdfdfd',
		paddingHorizontal: 15,
		paddingVertical: 15,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#EDEDED'
	},
	optionText: {
		fontSize: 15,
		marginTop: 1
	}
})
