import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
    path: string;
    canGoUp: boolean;
    onGoUp: () => void;
    onAdd: () => void;
};

export const ExplorerHeader: React.FC<Props> = ({
    path,
    canGoUp,
    onGoUp,
    onAdd,
}) => (
    <View style={styles.header}>
        {canGoUp && (
            <TouchableOpacity
                onPress={onGoUp}
                style={styles.backButtonContainer}
            >
                <Text style={styles.backButton}>←</Text>
            </TouchableOpacity>
        )}
        <Text style={styles.path}>{path}</Text>
        <TouchableOpacity onPress={onAdd}>
            <Text style={styles.add}>+</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
    },
    backButtonContainer: { paddingRight: 16 },
    backButton: { fontSize: 24 },
    path: { fontSize: 16, fontWeight: "bold" },
    add: { fontSize: 24, padding: 4 },
});
