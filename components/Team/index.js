import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Team({ points, onPress, onPress2, image, image2 }) {
    return (
        <View>
            <Text style={styles.text}>{points}</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Image resizeMode="cover" source={image} style={styles.cards} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.minusButton} onPress={onPress2}>
                <Image resizeMode="contain" source={image2} style={styles.minusImage} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    team: {
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 42,
        fontWeight: "700",
        marginBottom: 8,
        color: "#ffffff",
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        borderRadius: 16,
    },
    cards: {
        width: 130,
        height: 200,
    },
    minusButton : {
        marginTop: 12,
        margin: 15,
        backgroundColor: "#FF6347",
        padding: 10,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",

    },
    minusImage: {
        width: 24, // Exemplo de tamanho menor para o ícone
        height: 24,
    },
})