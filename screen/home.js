import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
	const pressHandler = () => {
		navigation.navigate('Reviews');
		// navigation.push('Reviews');
	};
	const [reviews, setReviews] = useState([
		{
			title: 'Zelda, Breath of Fresh Air',
			rating: 5,
			body: 'lorem ipsum',
			key: '1'
		},
		{ title: 'Arknight', rating: 5, body: 'lorem ipsum lorum', key: '2' },
		{
			title: 'Fate Grand Order',
			rating: 5,
			body: 'lorem ipsum lorum',
			key: '3'
		}
	]);
	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.titleText}>Home</Text>
			<FlatList
				data={reviews}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate('Reviews', item)}
					>
						<Text style={globalStyles.titleText}>{item.title}</Text>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}
