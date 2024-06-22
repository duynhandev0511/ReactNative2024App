/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet } from "react-native";

const StartScreen: React.FC<any> = ({props}) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollContainer}>
				<Image
					source={{uri: "https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode="stretch"
					style={styles.image}
				/>
				<Text style={styles.title}>{"Chemistry Flashcard"}</Text>
				<Text style={styles.subtitle}>{"Học hóa mọi nơi, thỏa sức sáng tạo"}</Text>
				<View style={styles.buttonContainer}>
					<Text style={styles.buttonText}>{"Khám phá ngay"}</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	scrollContainer: {
		flex: 1,
		backgroundColor: "#2F3290",
		paddingTop: 100,
		paddingBottom: 166,
		paddingHorizontal: 22,
	},
	image: {
		height: 300,
		marginBottom: 65,
	},
	title: {
		color: "#FFFFFF",
		fontSize: 28,
		fontWeight: "bold",
		marginBottom: 21,
        textAlign: 'center',
	},
	subtitle: {
		color: "#FFFFFF",
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 55,
        textAlign: 'center',

	},
	buttonContainer: {
		alignItems: "center",
		backgroundColor: "#FF6C17",
		borderRadius: 20,
		paddingVertical: 15,
	},
	buttonText: {
		color: "#FFFFFF",
		fontSize: 20,
		fontWeight: "bold",
	},
});

export default StartScreen;
