import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Button,
    View,
    StyleSheet,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getInfo, readFile } from "../utils/helpers";
import { RootStackParamList } from "@/types/RootStackParamList";
import { FileInfoBlock, FileContentView } from "@/components/FileView";

type Props = NativeStackScreenProps<RootStackParamList, "FileView">;

const FileViewScreen: React.FC<Props> = ({ route, navigation }) => {
    const { uri } = route.params;
    const [fileContent, setFileContent] = useState("");
    const [fileInfo, setFileInfo] = useState<any>(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const [content, info] = await Promise.all([
                    readFile(uri),
                    getInfo(uri),
                ]);
                setFileContent(content);
                setFileInfo(info);
            } catch (err) {
                console.error(err);
                Alert.alert("Помилка", "Не вдалося відкрити файл");
            } finally {
                setPending(false);
            }
        })();
    }, [uri]);

    return (
        <View style={styles.wrapper}>
            {pending ? (
                <ActivityIndicator size="large" />
            ) : (
                <>
                    {fileInfo && (
                        <FileInfoBlock
                            uri={uri}
                            size={fileInfo.size || 0}
                            modificationTime={fileInfo.modificationTime || 0}
                        />
                    )}
                    <FileContentView content={fileContent} />
                    <Button title="Редагувати" />
                </>
            )}
        </View>
    );
};

export default FileViewScreen;

const styles = StyleSheet.create({
    wrapper: { flex: 1, padding: 16 },
});
