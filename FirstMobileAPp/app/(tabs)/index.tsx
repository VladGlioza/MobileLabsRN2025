import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import Header from "../../components/Header";

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
                        {/* <Image
                            source={require("../../assets/news-placeholder.png")}
                            style={styles.newsImage}
                        /> */}
                        <View>
                            <Text style={styles.newsTitle}>{item.title}</Text>
                            <Text style={styles.newsDate}>{item.date}</Text>
                            <Text>{item.text}</Text>
                        </View>
                    </View>
                )}
            />
            <Text style={styles.footer}>
                Гльоза Владислав Віталійович, ВТ-21-1
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    sectionTitle: { fontSize: 20, fontWeight: "bold", margin: 10 },
    newsItem: { flexDirection: "row", margin: 10 },
    newsImage: { width: 50, height: 50, marginRight: 10 },
    newsTitle: { fontWeight: "bold" },
    newsDate: { color: "gray", fontSize: 12 },
    footer: { textAlign: "center", fontSize: 12, marginBottom: 10 },
});
