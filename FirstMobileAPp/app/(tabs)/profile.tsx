import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ScrollView,
} from "react-native";

export default function ProfileScreen() {
    return (
        <>
            <Header />
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Реєстрація</Text>

                <Text style={styles.label}>Електронна пошта</Text>
                <TextInput style={styles.input} placeholder="you@example.com" />

                <Text style={styles.label}>Пароль</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Пароль"
                    secureTextEntry
                />

                <Text style={styles.label}>Пароль (ще раз)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Повторіть пароль"
                    secureTextEntry
                />

                <Text style={styles.label}>Прізвище</Text>
                <TextInput style={styles.input} placeholder="Прізвище" />

                <Text style={styles.label}>Ім'я</Text>
                <TextInput style={styles.input} placeholder="Ім'я" />

                <View style={styles.buttonContainer}>
                    <Button title="Зареєструватися" color="#0073ff" />
                </View>
            </ScrollView>
            <Footer />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#fff",
        flexGrow: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center",
    },
    label: {
        marginTop: 10,
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 8,
    },
    buttonContainer: {
        marginTop: 20,
        marginBottom: 20,
    },
    footer: {
        textAlign: "center",
        fontSize: 12,
        marginBottom: 10,
    },
});
