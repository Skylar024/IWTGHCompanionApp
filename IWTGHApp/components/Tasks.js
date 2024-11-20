import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";
import { StatusBar } from "expo-status-bar";
import Row from "./Row";
import Column from "./Column";
import Box from "./Box";


export default function Tasks({ navigation }) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.titleContainer}>
                <StatusBar hidden={false} />
                <Row>
                    <Text style={styles.text}>Tasks Content</Text>
                </Row>
            </View>
            <View style={styles.container}>
                <Row>
                    <Box>Cleaning</Box>
                    <Box>Load Dishwasher</Box>
                    <Box>Load Traywasher</Box>
                </Row>
            </View>
        </View>
    );
}