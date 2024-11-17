import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";
import { StatusBar } from "expo-status-bar";
import Row from "./Row";
import Column from "./Column";
import Box from "./Box";

export default function Maps({ navigation }) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.titleContainer}>
                <StatusBar hidden={false} />
                <Row>
                    <Text style={styles.text}>Maps Content</Text>
                </Row>
            </View>
            <View style={styles.container}>
                <Row>
                    <Box>Acorn St.</Box>
                    <Box>Range Rd.</Box>
                    <Box>Clementine Dr.</Box>
                </Row>
            </View>
        </View>
    );
}