import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const mockPhotos = Array(12).fill(
    require("../../assets/images/photo_placeholder.png")
);

export default function GalleryScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={mockPhotos}
                keyExtractor={(_, idx) => idx.toString()}
                numColumns={2}
                renderItem={({ item }) => (
                    <View style={styles.photoItem}>
                        <Image source={item} style={styles.photo} />
                    </View>
                )}
            />
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    title: { fontSize: 20, fontWeight: "bold", margin: 10 },
    photoItem: {
        flex: 1,
        margin: 5,
        aspectRatio: 1,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        overflow: "hidden",
    },
    photo: {
        width: "100%",
        height: "100%",
    },
    footer: {
        textAlign: "center",
        fontSize: 12,
        marginBottom: 10,
    },
});
