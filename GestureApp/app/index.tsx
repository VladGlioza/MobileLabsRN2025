import "react-native-gesture-handler";
import React, { FC } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { GestureHandler } from "@/components";
import { useGestureActionsContext } from "@/context/GestureActionsContext";
import { RootStackParamList } from "@/types/RootStackParamList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: FC<Props> = ({ navigation }) => {
    const { gameState, trackTask } = useGestureActionsContext();
    const { score } = gameState;

    return (
        <View style={styles.container}>
            <Text style={styles.score}>Score: {score}</Text>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <GestureHandler
                    onSingleTap={() => trackTask("singleTap", 1)}
                    onDoubleTap={() => trackTask("doubleTap", 2)}
                    onLongPress={() => trackTask("longPress", 5)}
                    onPan={() => trackTask("pan", 0)}
                    onFlingRight={() => trackTask("flingRight", 0)}
                    onFlingLeft={() => trackTask("flingLeft", 0)}
                    onPinch={() => trackTask("pinch", 3)}
                />
            </GestureHandlerRootView>
            <Button
                title="Завдання"
                onPress={() => navigation.navigate("Tasks")}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center" },
    score: { fontSize: 32, marginBottom: 20 },
});
