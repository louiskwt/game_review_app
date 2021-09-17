import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screen/home';
import ReviewDetails from './screen/reviewDetails';

const Stack = createNativeStackNavigator();

export default function App() {
	let [fontsLoaded] = useFonts({
		'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
		'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
	});

	if (fontsLoaded) {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name='Home' component={Home} />
					<Stack.Screen name='Reviews' component={ReviewDetails} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	} else {
		return <AppLoading />;
	}
}
