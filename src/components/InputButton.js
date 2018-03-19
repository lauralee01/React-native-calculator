import React, { Component } from 'react';
import { View, Text } from 'react-native';

class InputButton extends Component {
	render() {
		const { inputButton, inputButtonText} = styles;
		return (
			<View style ={inputButton}>
				<Text style = {inputButtonText}>{this.props.value}</Text>
			</View>
			)
	}
}

const styles = {
	inputButton: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 0.5,
		borderColor: '#91AA9D'
	},

	inputButtonText: {
		fontSize: 22,
		fontWeight: 'bold',
		color: 'white'
	}
}

export default InputButton;