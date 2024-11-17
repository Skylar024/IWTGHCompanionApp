import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";
import { StatusBar } from "expo-status-bar";
import Row from "./Row";
import Column from "./Column";
import Box from "./Box";

export default function Ghosts({ navigation }) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.titleContainer}>
                <StatusBar hidden={false} />
                <Row>
                    <Text style={styles.text}>Ghosts Content</Text>
                </Row>
            </View>
            <View style={styles.container}>
                <Row>
                    <Column>
                        <Text style={styles.text}>Ballaeth</Text>
                    </Column>
                    <Column>
                        <Text style={styles.text}>*Ballaeth Description*</Text>
                    </Column>
                    <Column>
                        <Box>Ballaeth Image</Box>
                    </Column>
                    
                </Row>
                <Row>
                    <Column>
                        <Text style={styles.text}>Themeht</Text>
                    </Column>
                    <Column>
                        <Text style={styles.text}>*Themeht Description*</Text>
                    </Column>
                    <Column>
                        <Box>Themeth Image</Box>
                    </Column>
                    
                </Row>
                <Row>
                    <Column>
                        <Text style={styles.text}>Lillian</Text>
                    </Column>
                    <Column>
                        <Text style={styles.text}>*Lillian Description*</Text>
                    </Column>
                    <Column>
                        <Box>Lillian Image</Box>
                    </Column>
                    
                </Row>
                <Row>
                    <Column>
                        <Text style={styles.text}>Kreature</Text>
                    </Column>
                    <Column>
                        <Text style={styles.text}>*Kreature Description*</Text>
                    </Column>
                    <Column>
                        <Box>Kreature Image</Box>
                    </Column>
                    
                </Row>
            </View>
        </View>
    );
}