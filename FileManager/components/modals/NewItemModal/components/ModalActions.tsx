import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "../styles";

export const ModalActions = ({
    onCancel,
    onSubmit,
}: {
    onCancel: () => void;
    onSubmit: () => void;
}) => (
    <View style={styles.actions}>
        <TouchableOpacity onPress={onCancel} style={styles.actionBtn}>
            <Text>Скасувати</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSubmit} style={styles.actionBtn}>
            <Text>Створити</Text>
        </TouchableOpacity>
    </View>
);
