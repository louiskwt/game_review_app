import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation, route }) {
	const pressHandler = () => {
		navigation.goBack();
	};

	return (
		<View style={globalStyles.container}>
			<Text>{route.params.title}</Text>
			<Text>{route.params.body}</Text>
			<Text>{route.params.rating}</Text>
			<Button title='back to home' onPress={pressHandler} />
		</View>
	);
}
