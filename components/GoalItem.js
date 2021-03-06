import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const GoalItem = props => {
    return (
        <View style={styles.list}>
            <Text>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#ccc",
        borderColor: 'black',
        borderWidth: 1
      }
})