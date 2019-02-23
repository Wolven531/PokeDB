import React from 'react'
import {
	Image,
	// Platform,
	ScrollView,
	StyleSheet
	// Text,
	// TouchableOpacity,
	// View
} from 'react-native'
// import { WebBrowser } from 'expo'

// import { MonoText } from '../components/StyledText'

export default class TypechartScreen extends React.Component {
	static navigationOptions = {
		title: 'Pokemon Type Chart'
	}

	render() {
		return (
			<ScrollView
				style={styles.container}
				contentContainerStyle={styles.contentContainer}>
				<Image
					source={require('../assets/images/typechart.png')}
					style={styles.genericImage}
				/>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		// backgroundColor: '#0f0',
		// flex: 1,
		// flexDirection: 'column',
		// flexWrap: 'nowrap',
		// flex-flow: 'column nowrap'
	},
	contentContainer: {
		// alignContent: 'flex-start',
		// alignItems: 'flex-start',
		flex: 1,
		// flexDirection: 'column',
		flexDirection: 'column-reverse',
		// flexWrap: 'nowrap',
		// flexFlow: 'column nowrap',
		// justifyContent: 'center',
		// justifyContent: 'flex-end',
		// justifyContent: 'space-around',
		justifyContent: 'flex-start',
		// margin: 0,
		// padding: 0
	},
	genericImage: {
		// height: 80,
		// marginTop: 3,
		resizeMode: 'contain',
		width: '100%'
	}
})
