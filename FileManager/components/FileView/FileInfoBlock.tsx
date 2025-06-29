import { formatBytes } from "@/utils/helpers";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
    uri: string;
    size: number;
    modificationTime: number;
};

export const FileInfoBlock: React.FC<Props> = ({
    uri,
    size,
    modificationTime,
}) => (
    <View style={styles.block}>
        <Text>Назва: {uri.split("/").pop()}</Text>
        <Text>Розмір: {formatBytes(size)}</Text>
        <Text>
            Дата змін: {new Date(modificationTime * 1000).toLocaleString()}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    block: { marginBottom: 12 },
});
