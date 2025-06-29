import { useState, useCallback } from "react";
import { Alert } from "react-native";
import {
    readDir,
    getInfo,
    deleteItem,
    createFolder,
    createFile,
} from "@/utils/helpers";
import { FileSystemItem } from "../../types/FileSystemItem";

export function useDirectory(rootDir: string) {
    const [currentPath, setCurrentPath] = useState(rootDir);
    const [items, setItems] = useState<FileSystemItem[]>([]);
    const [loading, setLoading] = useState(false);

    const loadDirectory = useCallback(async (path: string) => {
        setLoading(true);
        try {
            const names = await readDir(path);
            const entries = await Promise.all(
                names.map(async (name) => {
                    const uri = path + name + (name.includes(".") ? "" : "/");
                    const info = await getInfo(uri);
                    return {
                        name,
                        uri,
                        isDirectory: info.isDirectory,
                        size: info.size,
                        modificationTime: info.modificationTime,
                    };
                })
            );
            entries.sort((a, b) => {
                if (a.isDirectory !== b.isDirectory)
                    return a.isDirectory ? -1 : 1;
                return a.name.localeCompare(b.name);
            });
            setItems(entries);
        } catch (err) {
            console.error(err);
            Alert.alert("Помилка", "Не вдалося прочитати директорію");
        } finally {
            setLoading(false);
        }
    }, []);

    const goUp = () => {
        if (currentPath === rootDir) return;
        const parent =
            currentPath.replace(/\/$/, "").split("/").slice(0, -1).join("/") +
            "/";
        setCurrentPath(parent);
    };

    const enterFolder = (uri: string) => {
        setCurrentPath(uri);
    };

    const removeItem = async (item: FileSystemItem) => {
        try {
            await deleteItem(item.uri);
            loadDirectory(currentPath);
        } catch (err) {
            console.error(err);
            Alert.alert("Помилка", "Не вдалося видалити файл/папку");
        }
    };

    return {
        currentPath,
        items,
        loading,
        loadDirectory,
        goUp,
        enterFolder,
        removeItem,
    };
}
