import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";
import { StatusBar } from "expo-status-bar";
import Row from "./Row";
import Column from "./Column";
import Box from "./Box";

export default function Home({ navigation }) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.titleContainer}>
                <StatusBar hidden={false} />
                <Row>
                    <Text style={styles.text}>I Want To Go Home</Text>
                </Row>
            </View>
            <View style={styles.container}>
                <Row>
                    <Column>
                        <Text style={styles.text2}>Ghosts</Text>
                        <Text style={styles.text2}>Characters</Text>
                        <Text style={styles.text2}>Lore Pages</Text>
                    </Column>
                </Row>
            </View>
        </View>
        
    );
}