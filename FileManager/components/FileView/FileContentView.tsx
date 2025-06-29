import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

type Props = { content: string };

export const FileContentView: React.FC<Props> = ({ content }) => (
    <ScrollView style={styles.scroll}>
        <Text style={styles.text}>{content}</Text>
    </ScrollView>
);

const styles = StyleSheet.create({
    scroll: { flex: 1, marginBottom: 16 },
    text: { fontSize: 14, lineHeight: 20 },
});
