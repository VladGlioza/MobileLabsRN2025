import { TextInput } from "react-native";
import { styles } from "../styles";

export const NameField = ({
    value,
    onChange,
    mode,
}: {
    value: string;
    onChange: (v: string) => void;
    mode: "folder" | "file";
}) => (
    <TextInput
        style={styles.input}
        placeholder={mode === "folder" ? "Назва папки" : "Назва файлу без .txt"}
        value={value}
        onChangeText={onChange}
    />
);
