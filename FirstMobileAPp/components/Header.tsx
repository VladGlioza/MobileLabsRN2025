import { View, Image, Text, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/images/logo.png")}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.title}>FirstMobileApp</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        marginTop: 20,
        marginHorizontal: 10,
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#fff",
    },
    logo: {
        width: 120,
        height: 40,
        marginRight: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
});
