import React from 'react'
import {
	Image,
	ScrollView,
	StyleSheet
} from 'react-native'

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
		// backgroundColor: '#0f0'
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
		resizeMode: 'contain',
		width: '100%'
	}
})
