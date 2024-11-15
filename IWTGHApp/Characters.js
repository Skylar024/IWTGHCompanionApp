import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import Row from "./Row";
import Column from "./Column";
import Box from "./Box";

export default function Characters({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar hidden={false} />
            <Row>
                <Text style={styles.text}>Characters Content</Text>
            </Row>
            <Row>
                <Column>
                    <Text style={styles.text}>Trainee</Text>
                </Column>
                <Column>
                    <Box>Trainee</Box>
                </Column>
            </Row>
            <Row>
                <Column>
                    <Text style={styles.text}>Love</Text>
                </Column>
                <Column>
                    <Box>Love</Box>
                </Column>
            </Row>
            <Row>
                <Column>
                    <Text style={styles.text}>Comedy</Text>
                </Column>
                <Column>
                    <Box>Comedy</Box>
                </Column>
            </Row>
            <Row>
                <Column>
                    <Text style={styles.text}>???</Text>
                </Column>
                <Column>
                    <Box>Locked</Box>
                </Column>
            </Row>
            <Row>
                <Column>
                    <Text style={styles.text}>???</Text>
                </Column>
                <Column>
                    <Box>Locked</Box>
                </Column>
            </Row>
        </View>
    );
}