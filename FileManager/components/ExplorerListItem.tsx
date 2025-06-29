import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { FileSystemItem } from "@/types/FileSystemItem";

type Props = {
    item: FileSystemItem;
    onPress: () => void;
    onLongPress: () => void;
};

export const ExplorerListItem: React.FC<Props> = ({
    item,
    onPress,
    onLongPress,
}) => (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
        <Text style={[styles.text, item.isDirectory && styles.folder]}>
            {item.isDirectory ? "📁 " : "📄 "} {item.name}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    text: { fontSize: 14, paddingVertical: 8 },
    folder: { fontWeight: "600" },
});
