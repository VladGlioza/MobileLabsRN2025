import { TextInput } from "react-native";
import { styles } from "../styles";

export const ContentField = ({
    content,
    onChange,
}: {
    content: string;
    onChange: (c: string) => void;
}) => (
    <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Початковий вміст"
        value={content}
        onChangeText={onChange}
        multiline
    />
);
