import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#154d1c",
    },
    modalView: {
        margin: 16,
        backgroundColor: "white",
        borderRadius: 8,
        padding: 16,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    congratsText: {
        fontSize: 24,
        marginBottom: 15,
        textAlign: "center",
    },
    closeButton: {
        backgroundColor: "red",
        padding: 10,
        elevation: 2,
    },
    closeButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 50,
    },
    teams: {
        flexDirection: "row",
        gap: 32,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
    },
});

export default styles;