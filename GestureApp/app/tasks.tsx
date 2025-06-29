import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { tasks } from "../mocks/data";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types/RootStackParamList";
import { TaskItem } from "@/components";

type TasksScreenProps = NativeStackScreenProps<RootStackParamList, "Tasks">;

const TasksScreen: React.FC<TasksScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <FlatList
                data={tasks}
                keyExtractor={(task) => task.id}
                renderItem={({ item }) => {
                    return <TaskItem item={item} />;
                }}
            />
            <Button title="Назад" onPress={() => navigation.goBack()} />
        </View>
    );
};

export default TasksScreen;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 16,
    },
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
