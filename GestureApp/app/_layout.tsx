import { GameProvider } from "@/context/GestureActionsContext";
import { RootStackParamList } from "@/types/RootStackParamList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import TasksScreen from "./tasks";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return <RootLayoutNav />;
}

function RootLayoutNav() {
    return (
        <GameProvider>
            <Stack.Navigator
                initialRouteName="Tasks"
                screenOptions={{ headerShown: false }}
            >
                {/* <Stack.Screen name="Home" /> */}
                <Stack.Screen name="Tasks" component={TasksScreen} />
            </Stack.Navigator>
        </GameProvider>
    );
}
