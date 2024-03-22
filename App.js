import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, Modal, Alert } from "react-native";
import Logo from "./assets/logo.png";
import Carta1 from "./assets/carta1.png";
import Carta2 from "./assets/carta2.png";
import Minus from "./assets/minus.png";
import Team from "./components/Team";
import styles from "./Styles";

export default function App() {
	const [team1, setTeam1] = useState(0);
	const [team2, setTeam2] = useState(0);
	const [winner, setWinner] = useState(null);

	function checkPoints(points, team) {
		if (points == 12) {
			setWinner(team);
		}
	}

	return (
		<View style={styles.container}>
			<Modal visible={winner != null} transparent={true} animationType="slide">
				<View style={styles.modalView}>
					<Text style={styles.congratsText}>Parabéns, {winner} ganhou!</Text>
					<TouchableOpacity style={styles.closeButton} onPress={() => {
						setWinner(null);
						setTeam1(0);
						setTeam2(0);
					}}>
						<Text style={styles.closeButtonText}>Fechar</Text>
					</TouchableOpacity>
				</View>
			</Modal>
			<Image source={Logo} style={styles.logo} />
			<View style={styles.teams}>
				<Team image={Carta1} onPress={() => {
					let newScore = team1 + 1;
					setTeam1(newScore);
					checkPoints(newScore, "Time 1");
				}} onPressMinus={() => {
					if (team1 != 0) {
						let newScore = team1 - 1;
						setTeam1(newScore);
					}
				}} image2={Minus} points={team1} />

				<Team image={Carta2} onPress={() => {
					let newScore = team2 + 1;
					setTeam2(newScore);
					checkPoints(newScore, "Time 2");
				}} image2={Minus} onPressMinus={() => {
					if (team2 != 0) {
						let newScore = team2 - 1;
						setTeam2(newScore);
					}
				}} points={team2} />
			</View>
		</View>
	);

}