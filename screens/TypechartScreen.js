import React from 'react'
import {
	Image,
	// Platform,
	// ScrollView,
	StyleSheet,
	// Text,
	// TouchableOpacity,
	View
} from 'react-native'
// import { WebBrowser } from 'expo'

// import { MonoText } from '../components/StyledText'

export default class TypechartScreen extends React.Component {
	static navigationOptions = {
		title: 'Pokemon Type Chart'
	}

	render() {
		return (
			<View style={styles.container}>
				{/*
				<ScrollView
					style={styles.container}
					contentContainerStyle={styles.contentContainer}>
				*/}
					<Image
						source={require('../assets/images/typechart.png')}
						style={styles.genericImage}/>
				{/*
				</ScrollView>
				*/}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'flex-start',
		backgroundColor: '#fff',
		flex: 1
	},
	contentContainer: { },
	genericImage: {
		// height: 80,
		// marginTop: 3,
		resizeMode: 'contain',
		width: '100%'
	}
})
