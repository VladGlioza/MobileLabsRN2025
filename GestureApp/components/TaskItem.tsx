import { useGestureActionsContext } from "@/context/GestureActionsContext";
import { tasks } from "@/mocks/data";
import { FC } from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

interface Props {
    item: (typeof tasks)[0];
}

export const TaskItem: FC<Props> = ({ item }) => {
    const { gameState } = useGestureActionsContext();
    const progressData = gameState.progress;

    const completed = Math.min(progressData[item.id] ?? 0, item.target);
    const isFinished = completed >= item.target;

    return (
        <View style={styles.row}>
            <Text style={[styles.label, isFinished && styles.strikethrough]}>
                {item.title} ({completed}/{item.target})
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    label: {
        fontSize: 16,
    },
    strikethrough: {
        textDecorationLine: "line-through",
        color: "gray",
    },
});
