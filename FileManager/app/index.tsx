import React, { useEffect, useState } from "react";
import {
    View,
    ActivityIndicator,
    FlatList,
    Alert,
    StyleSheet,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types/RootStackParamList";
import { useDirectory } from "@/hooks/useDirectory";
import { ExplorerHeader, ExplorerListItem } from "@/components";
import NewItemModal from "@/components/modals/NewItemModal";
import { createFile, createFolder } from "@/utils/helpers";

type Props = NativeStackScreenProps<RootStackParamList, "Explorer">;

const ExplorerScreen: React.FC<Props> = ({ navigation, route }) => {
    const { rootDir } = route.params;
    const [modalVisible, setModalVisible] = useState(false);

    const {
        currentPath,
        items,
        loading,
        loadDirectory,
        goUp,
        enterFolder,
        removeItem,
    } = useDirectory(rootDir);

    useEffect(() => {
        loadDirectory(currentPath);
    }, [currentPath]);

    const handleItemPress = (item: any) => {
        return;
    };

    const handleItemLongPress = (item: any) => {
        Alert.alert("Підтвердження", `Видалити «${item.name}»?`, [
            { text: "Скасувати", style: "cancel" },
            {
                text: "Видалити",
                style: "destructive",
                onPress: () => removeItem(item),
            },
        ]);
    };

    return (
        <View style={styles.container}>
            <ExplorerHeader
                path={currentPath.replace(rootDir, "") || "/"}
                canGoUp={currentPath !== rootDir}
                onGoUp={goUp}
                onAdd={() => setModalVisible(true)}
            />
            {loading ? (
                <ActivityIndicator size="large" style={styles.loader} />
            ) : (
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.uri}
                    renderItem={({ item }) => (
                        <ExplorerListItem
                            item={item}
                            onPress={() => handleItemPress(item)}
                            onLongPress={() => handleItemLongPress(item)}
                        />
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={styles.separator} />
                    )}
                />
            )}
            <NewItemModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onCreateFolder={async (name) => {
                    await createFolder(currentPath, name);
                    loadDirectory(currentPath);
                }}
                onCreateFile={async (name, content) => {
                    await createFile(currentPath, name, content);
                    loadDirectory(currentPath);
                }}
            />
        </View>
    );
};

export default ExplorerScreen;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    loader: { marginTop: 20 },
    separator: { height: 1, backgroundColor: "#ccc" },
});
