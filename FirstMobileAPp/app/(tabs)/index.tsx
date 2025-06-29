import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const mockNews = Array(8).fill({
    title: "Заголовок новини",
    date: "Дата новини",
    text: "Короткий текст новини",
});

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.sectionTitle}>Новини</Text>
            <FlatList
                data={mockNews}
                keyExtractor={(_, idx) => idx.toString()}
                renderItem={({ item }) => (
                    <View style={styles.newsItem}>
                        <Image
                            source={require("../../assets/images/placeholder.png")}
                            style={styles.newsImage}
                        />
                        <View style={{ marginBottom: 15 }}>
                            <Text style={styles.newsTitle}>{item.title}</Text>
                            <Text style={styles.newsDate}>{item.date}</Text>
                            <Text>{item.text}</Text>
                        </View>
                    </View>
                )}
            />
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        width: "100%",
    },
    newsItem: { flexDirection: "row", margin: 10, alignItems: "center" },
    newsImage: { width: 80, height: 80, marginRight: 10 },
    newsTitle: { fontWeight: "bold" },
    newsDate: { color: "gray", fontSize: 12 },
});
