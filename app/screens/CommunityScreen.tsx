import { StyleSheet, Text, View } from "react-native";

export default function CommunityScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Community Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
});