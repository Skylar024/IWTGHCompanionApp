import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import Row from "./Row";
import Column from "./Column";
import Box from "./Box";

export default function Lore_Pages({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar hidden={false} />
            <Row>
                <Text style={styles.text}>Lore Pages Content</Text>
            </Row>
            <Row>
                <Column>
                    <Text style={styles.text}>Ballaeth</Text>
                </Column>
                <Column>
                    <Box>Ballaeth #1</Box>
                </Column>
                <Column>
                    <Box>Ballaeth #2</Box>
                </Column>
                <Column>
                    <Box>Ballaeth #3</Box>
                </Column>
            </Row>
            <Row>
                <Column>
                    <Text style={styles.text}>Themeht</Text>
                </Column>
                <Column>
                    <Box>Themeth #1</Box>
                </Column>
                <Column>
                    <Box>Themeth #2</Box>
                </Column>
                <Column>
                    <Box>Themeth #3</Box>
                </Column>
            </Row>
            <Row>
                <Column>
                    <Text style={styles.text}>Lillian</Text>
                </Column>
                <Column>
                    <Box>Lillian #1</Box>
                </Column>
                <Column>
                    <Box>Lillian #2</Box>
                </Column>
                <Column>
                    <Box>Lillian #3</Box>
                </Column>
            </Row>
            <Row>
                <Column>
                    <Text style={styles.text}>Kreature</Text>
                </Column>
                <Column>
                    <Box>Kreature #1</Box>
                </Column>
                <Column>
                    <Box>Kreature #2</Box>
                </Column>
                <Column>
                    <Box>Kreature #3</Box>
                </Column>
            </Row>
        </View>
    );
}