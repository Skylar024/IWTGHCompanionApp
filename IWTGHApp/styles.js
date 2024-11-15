import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        
        ...Platform.select({
            ios: { paddingTop: 40 },
            android: { paddingTop: StatusBar.currentHeight },
        }),
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        
    },
    text2: {
        fontSize: 30,
        fontWeight: "200",

    },
    box: {
        height: 100,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgray",
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "darkslategray",

    },
    boxText: {
        color: "darkslategray",
        fontWeight: "bold",

    },
    row: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",

    },
    column: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
    },
    
    
})