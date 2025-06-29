import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import StoreScreen from "./store";

const Tab = createBottomTabNavigator();

export default function RootLayout() {
    const isDark = true;

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: "#1A9FFF",
                tabBarInactiveTintColor: isDark ? "#aaa" : "#555",
                tabBarStyle: {
                    backgroundColor: isDark ? "#2A2A2A" : "#FFFFFF",
                    borderTopColor: isDark ? "#444" : "#ccc",
                },
                tabBarIcon: ({ color, size }) => {
                    return <Ionicons name={"home"} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Store" component={StoreScreen} />
            {/* <Tab.Screen name="Community" component={StoreScreen} /> */}
        </Tab.Navigator>
    );
}
