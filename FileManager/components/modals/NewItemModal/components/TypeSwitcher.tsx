import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles";

export const TypeSwitcher = ({
    mode,
    onChange,
}: {
    mode: "folder" | "file";
    onChange: (m: "folder" | "file") => void;
}) => (
    <View style={styles.switcher}>
        <TouchableOpacity onPress={() => onChange("folder")}>
            <Text
                style={[styles.switchText, mode === "folder" && styles.active]}
            >
                Папку
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onChange("file")}>
            <Text style={[styles.switchText, mode === "file" && styles.active]}>
                Файл
            </Text>
        </TouchableOpacity>
    </View>
);
