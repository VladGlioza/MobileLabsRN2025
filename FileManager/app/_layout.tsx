import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types/RootStackParamList";
import * as FileSystem from "expo-file-system";
import ExplorerScreen from "../app/index";
import FileViewScreen from "./fileView";

const Stack = createNativeStackNavigator<RootStackParamList>();
const ROOT_DIR = FileSystem.documentDirectory + "AppData/";

export default function RootLayout() {
    useEffect(() => {
        (async () => {
            try {
                const info = await FileSystem.getInfoAsync(ROOT_DIR);
                if (!info.exists) {
                    await FileSystem.makeDirectoryAsync(ROOT_DIR, {
                        intermediates: true,
                    });
                }
            } catch (e) {
                console.error("Помилка створення AppData:", e);
            }
        })();
    }, []);

    return (
        <Stack.Navigator initialRouteName="Explorer">
            <Stack.Screen
                name="Explorer"
                component={ExplorerScreen}
                options={{ title: "Файловий менеджер" }}
                initialParams={{ rootDir: ROOT_DIR }}
            />
            <Stack.Screen
                name="FileView"
                component={FileViewScreen}
                options={{ title: "Перегляд файлу" }}
            />
        </Stack.Navigator>
    );
}
