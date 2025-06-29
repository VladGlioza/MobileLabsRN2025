import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    panel: {
        width: "90%",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 16,
    },
    title: { fontSize: 18, fontWeight: "bold", marginBottom: 12 },
    switcher: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 12,
    },
    switchText: { fontSize: 16, color: "#555" },
    active: { fontWeight: "bold", textDecorationLine: "underline" },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        padding: 8,
        marginBottom: 12,
    },
    textarea: { height: 80, textAlignVertical: "top" },
    actions: { flexDirection: "row", justifyContent: "flex-end" },
    actionBtn: { marginLeft: 16 },
});
