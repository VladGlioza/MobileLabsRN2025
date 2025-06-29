import React, { useState } from "react";
import { View, Modal, Alert } from "react-native";
import { styles } from "./styles";
import {
    ContentField,
    ModalHeader,
    NameField,
    TypeSwitcher,
} from "./components";
import { ModalActions } from "./components/ModalActions";

type Props = {
    visible: boolean;
    onClose: () => void;
    onCreateFolder: (name: string) => Promise<void>;
    onCreateFile: (name: string, content: string) => Promise<void>;
};

const NewItemModal: React.FC<Props> = ({
    visible,
    onClose,
    onCreateFolder,
    onCreateFile,
}) => {
    const [mode, setMode] = useState<"folder" | "file">("folder");
    const [name, setName] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async () => {
        if (!name.trim()) {
            Alert.alert("Помилка", "Введіть назву.");
            return;
        }
        try {
            if (mode === "folder") {
                await onCreateFolder(name.trim());
            } else {
                await onCreateFile(name.trim(), content);
            }
            setName("");
            setContent("");
            onClose();
        } catch (error) {
            console.error(error);
            Alert.alert("Помилка", `Не вдалося створити ${mode}`);
        }
    };

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.panel}>
                    <ModalHeader />
                    <TypeSwitcher mode={mode} onChange={setMode} />
                    <NameField value={name} onChange={setName} mode={mode} />
                    {mode === "file" && (
                        <ContentField content={content} onChange={setContent} />
                    )}
                    <ModalActions onCancel={onClose} onSubmit={handleSubmit} />
                </View>
            </View>
        </Modal>
    );
};

export default NewItemModal;
